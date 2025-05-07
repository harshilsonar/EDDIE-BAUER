import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedFit, setSelectedFit] = useState("Regular");
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);

  const handleSwatchClick = (swatchUrl) => {
    setSelectedImage(swatchUrl);
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];  
  
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    // Main product data fetch
    axios.get(`http://localhost:3000/${type}/${id}`)
      .then(res => {
        // Process the data to organize images by color if available
        let processedData = {...res.data};
        
        // If the API doesn't provide color-specific images, we'll create a structure for them
        if (!processedData.colorImages) {
          processedData.colorImages = {};
          
          // If there's color-specific data in the response, try to organize it
          if (processedData.colors) {
            processedData.colors.forEach(color => {
              if (color.images) {
                processedData.colorImages[color.id || color.name] = color.images;
              }
            });
          }
        }
        
        setData(processedData);
        setSelectedImage(processedData.images?.[0] || processedData.mainImage);
        
        // Set the initial selected color
        if (processedData.swatches && processedData.swatches.length > 0) {
          setSelectedColor(processedData.swatches[0]);
        } else if (processedData.colors && processedData.colors.length > 0) {
          setSelectedColor(processedData.colors[0]);
        }
        
        // Use default color if specified
        if (processedData.defaultColor) {
          const defaultSwatch = (processedData.swatches || processedData.colors || []).find(
            swatch => swatch.name === processedData.defaultColor || swatch.id === processedData.defaultColor
          );
          if (defaultSwatch) {
            setSelectedColor(defaultSwatch);
          }
        }
        
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setError("Something went wrong");
        setLoading(false);
      });
  }, [type, id]);

  // Improved color change handler
  const handleColorChange = (swatch) => {
    setSelectedColor(swatch);
    
    // Check if we need to make an API call or if we can use existing data
    // First, let's immediately show the swatch's image if it has one
    if (swatch.imageUrl) {
      setSelectedImage(swatch.imageUrl);
    }
    
    // Try to find images specific to this color in the data we already have
    if (data.colorImages && data.colorImages[swatch.id || swatch.name]) {
      setData(prevData => ({
        ...prevData, 
        images: data.colorImages[swatch.id || swatch.name]
      }));
      // Update the selected image to the first image of the new color
      if (data.colorImages[swatch.id || swatch.name].length > 0) {
        setSelectedImage(data.colorImages[swatch.id || swatch.name][0]);
      }
      return; // No need for API call if we already have the images
    }
    
    // If we don't have the images for this color already, show loading indicator
    setLoading(true);
    
    // Check if the API endpoint for color-specific images exists
    axios.get(`http://localhost:3000/${type}/${id}`)
      .then(res => {
        // If the product has images for this color or a default set of images
        if (res.data.images) {
          // Update the data with all images
          setData(prevData => ({...prevData, images: res.data.images}));
          // Update the selected image
          if (res.data.images.length > 0) {
            setSelectedImage(res.data.images[0]);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Failed to load product images:", err);
        // Even if the API call fails, let's try to use what we have
        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        } else if (data.mainImage) {
          setSelectedImage(data.mainImage);
        }
        setLoading(false);
      });
  };
  
  // Function to add item to cart
  const addToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
  
    setAddingToCart(true);
  
    const cartItem = {
      productId: id,
      type,
      title: data.title,
      price: data.price || data.priceSale,
      mainImage: selectedImage || data.mainImage,
      color: selectedColor?.name || data.defaultColor || 'Default',
      size: selectedSize,
      fit: selectedFit,
      quantity,
      totalPrice: (data.price || data.priceSale) * quantity
    };
  
    axios.get(`http://localhost:3000/cart`)
      .then(res => {
        const existingItem = res.data.find(item =>
          item.productId === cartItem.productId &&
          item.selectedColor === cartItem.color &&
          item.size === cartItem.size &&
          item.fit === cartItem.fit
        );
  
        if (existingItem) {
          const updatedQuantity = existingItem.quantity + cartItem.quantity;
          return axios.patch(`http://localhost:3000/cart/${existingItem.id}`, {
            quantity: updatedQuantity,
            totalPrice: updatedQuantity * existingItem.price
          });
        } else {
          return axios.post(`http://localhost:3000/cart`, cartItem);
        }
      })
      .then(() => {
        alert("Item added to cart");
      })
      .catch(err => {
        console.error("Failed to add to cart:", err);
        alert("Failed to add to cart");
      })
      .finally(() => {
        setAddingToCart(false);
      });
  };

  // Loading and error states
  if (loading && !data) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 py-10">{error}</p>;
  if (!data) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 mt-30">
      {/* Thumbnail Images */}
      <div className="flex flex-col gap-4 w-24">
        {data.images?.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${data.title} thumbnail ${i + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-28 object-cover cursor-pointer border ${selectedImage === img ? 'border-black' : 'border-gray-300'}`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 relative">
        <img 
          src={selectedImage || data.mainImage} 
          alt={data.title} 
          className="w-full h-auto max-h-96 object-contain"
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="w-full md:w-[350px]">
        <div className="text-sm text-gray-500 mb-4">
          {type.charAt(0).toUpperCase() + type.slice(1)}  {data.category || 'Dresses'}
        </div>

        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <div className="flex items-center mt-2">
          <span className="text-lg font-medium">${data.price || data.priceSale || '29.99'}</span>
          {data.priceInfo && <span className="ml-2 text-sm text-gray-500">{data.priceInfo}</span>}
        </div>

        <div className="flex items-center mt-2">
          <div className="text-yellow-500">
            {'★'.repeat(Math.floor(Number(data.rating || 4)))}
            {'☆'.repeat(5 - Math.floor(Number(data.rating || 4)))}
          </div>
          <span className="text-gray-600 text-sm ml-2">{data.ratingCount || 1} review</span>
        </div>

        {/* Color Selection */}
        <div className="mt-6">
          {/* Color Name Display */}
          <div className="flex justify-between items-center">
            <span className="font-medium">COLOR:</span>
            <span className="text-sm">
              {selectedColor?.name || data?.defaultColor || 'No Color Selected'}
            </span>
          </div>

          {/* Color Swatches */}
          <div className="flex gap-2 flex-wrap mt-2">
            {(data.swatches || data.colors || []).map((swatch, index) => {
              // Ensure swatch is properly formatted as an object
              const swatchObj = typeof swatch === 'string' || swatch instanceof String 
                ? { imageUrl: swatch, name: `Color ${index + 1}`, id: `color-${index}` } 
                : swatch;
                
              // Determine if this is the selected color
              const isSelected = selectedColor 
                ? (selectedColor.id === swatchObj.id || selectedColor.name === swatchObj.name)
                : false;
                
              return (
                <div 
                  key={swatchObj.id || swatchObj.name || index}
                  className="relative cursor-pointer"
                  onClick={() => handleColorChange(swatchObj)}
                >
                  <div 
                    className={`w-8 h-8 rounded-full border-2 ${
                      isSelected ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{
                      backgroundColor: swatchObj.color || swatchObj.hexCode || '#ffffff',
                      backgroundImage: swatchObj.imageUrl ? `url(${swatchObj.imageUrl})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  {isSelected && (
                    <div className="absolute -right-1 -top-1 w-4 h-4 bg-black rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Available Patterns Section (if selected color has swatches) */}
          {selectedColor?.swatches?.length > 0 && (
            <div className="mt-3">
              <div className="text-sm font-medium mb-1">AVAILABLE PATTERNS:</div>
              <div className="flex flex-wrap gap-2">
                {selectedColor.swatches.map((swatch, i) => (
                  <img
                    key={i}
                    src={swatch}
                    alt={`${selectedColor.name} pattern ${i + 1}`}
                    className={`w-10 h-10 rounded-sm cursor-pointer border-2 ${
                      selectedImage === swatch ? 'border-black' : 'border-gray-200'
                    }`}
                    onClick={() => handleSwatchClick(swatch)}
                    onError={(e) => {
                      e.target.src = '/fallback-image.jpg';
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Fit Selection */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">FIT:</span>
            <span>{selectedFit}</span>
          </div>
          <div className="flex gap-2">
            {["Regular", "Petite", "Tall"].map((fit) => (
              <span
                key={fit}
                onClick={() => setSelectedFit(fit)}
                className={`cursor-pointer border px-4 py-2 rounded-full text-sm ${
                  selectedFit === fit ? 'bg-black text-white' : 'bg-white border-gray-400'
                }`}
              >
                {fit}
              </span>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">SIZE:</span>
            <span>{selectedSize || "Please select a size"}</span>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <span
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`cursor-pointer border px-4 py-2 text-sm ${
                  selectedSize === size 
                    ? 'border-black border-2 font-medium' 
                    : 'border-gray-400 border'
                }`}
              >
                {size}
              </span>
            ))}
          </div>

          <div className="flex justify-end mt-2">
            <span className="text-sm text-gray-700 flex items-center cursor-pointer">
              <span className="mr-1">Size Guide</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </div>
        </div>

        {/* Membership Info */}
        <div className="mt-6 p-2 bg-gray-50 text-sm">
          <div className="flex items-center">
            <span className="mr-2">🔵</span>
            <span>Members can earn up to 400 points on this item</span>
            <button className="ml-1 text-blue-600">Join</button>
            <span className="mx-1">or</span>
            <button className="text-blue-600">Sign In Now</button>
          </div>
          <div className="mt-2">From $13.88/month or 4 payments, from 0% interest with Klarna</div>
        </div>

        {/* Add to Cart */}
        <div className="mt-6 flex gap-2">
          <div className="w-1/4 border border-gray-300">
            <select 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full p-3 bg-white"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          
          <button
            onClick={addToCart}
            disabled={addingToCart || !selectedSize}
            className={`w-3/4 ${!selectedSize ? 'bg-gray-400' : addingToCart ? 'bg-gray-500' : 'bg-black'} text-white py-3 px-4 hover:bg-gray-800 disabled:cursor-not-allowed`}>
            {addingToCart ? 'ADDING...' : 'ADD TO BAG'}
          </button>
        </div>

        {/* Shipping Options */}
        <div className="mt-6">
          <div className="border border-gray-300 p-4 mb-2">
            <label className="flex items-center">
              <input type="radio" name="shipping" className="mr-2" defaultChecked />
              <span>Ship to Address</span>
            </label>
          </div>
          
          <div className="border border-gray-300 p-4">
            <label className="flex items-center">
              <input type="radio" name="shipping" className="mr-2" />
              <div>
                <div>Store Pickup · FREE</div>
                <div className="text-sm text-gray-500">Please select a size to view if product is available for store pickup.</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;