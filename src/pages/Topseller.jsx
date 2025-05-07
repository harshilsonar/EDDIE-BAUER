import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Topseller = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';  // Fetch the search query from URL

  // Fetching the products
  const fetchProduct = () => {
    setLoading(true);
    setError(null);
    axios
      .get('http://localhost:3000/Topselling')
      .then((response) => {
        const updated = response.data.map((item) => ({
          ...item,
          selectedImage: item.mainImage,
        }));
        setProduct(updated);
        setLoading(false);
      })
      .catch(() => {
        setError('Something went wrong');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // Filtering products based on the search query
  const filteredProducts = product.filter((item) => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Handling the swatch click to change image
  const handleSwatchClick = (index, swatchUrl) => {
    const updated = [...product];
    updated[index].selectedImage = swatchUrl;
    setProduct(updated);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 py-10">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Jackets</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((item, index) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-lg transition text-center"
          >
            {/* Main Image with Link */}
            <Link to={`/product/Topselling/${item.id}`}>
              <img
                src={item.selectedImage || item.mainImage}
                alt={item.title}
                className="w-full h-[200px] object-contain mx-auto"
              />
            </Link>

            {/* Swatches */}
            <div className="flex justify-center flex-wrap gap-2 mt-3">
              {item.swatches.map((swatch, i) => (
                <img
                  key={i}
                  src={swatch}
                  alt={`swatch-${i}`}
                  className="w-6 h-6 rounded-full border border-gray-300"
                  onClick={() => handleSwatchClick(index, swatch)}
                />
              ))}
            </div>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="text-xs text-red-600 font-semibold mt-2 uppercase">
                {item.tags[0]} {/* Display only the first tag */}
              </div>
            )}

            {/* Title */}
            <h2 className="mt-1 text-sm font-medium text-gray-800 px-2">{item.title}</h2>

            {/* Price */}
            <div className="text-sm mt-1">
              {item.priceOriginal && item.priceOriginal !== item.priceSale && (
                <span className="text-gray-400 line-through mr-1">${item.priceOriginal}</span>
              )}
              <span className="text-green-700 font-semibold">${item.priceSale}</span>
            </div>

            {/* Ratings */}
            {item.rating > 0 && (
              <div className="text-sm text-yellow-500 mt-1">
                {'★'.repeat(Math.floor(Number(item.rating)))}
                {'☆'.repeat(5 - Math.floor(Number(item.rating)))}
                <span className="text-gray-500 ml-1">({item.ratingCount})</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topseller;
