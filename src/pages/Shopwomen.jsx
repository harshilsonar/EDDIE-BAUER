import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';


const Shopwomen = () => {

  const [product, setproduct] = useState([]);
       const [loading, setloading] = useState(false);
       const [error, seterror] = useState(null);
       const [searchParams] = useSearchParams();
       const searchQuery = searchParams.get('search') || '';
     
       const fetchProduct = () => {
         setloading(true);
         seterror(null);
         axios.get(`http://localhost:3000/women`)
           .then((response) => {
            const updated = response.data.map(item => ({
              ...item,
              selectedImage: item.mainImage
            }));
            setproduct(updated); // ✅ correct use
             setloading(false);
           
           })
           .catch(() => {
             seterror('Something went wrong');
             setloading(false);
           });
       };
     
       useEffect(() => {
         fetchProduct();
       }, []);


       const filteredProducts = product.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
       const handleSwatchClick = (index, swatchUrl) => {
        const updated = [...product];
        updated[index].selectedImage = swatchUrl;
        setproduct(updated);}
     
     if (loading) return <p className="text-center py-10">Loading...</p>;
      if (error) return <p className="text-center text-red-600 py-10">{error}</p>;
    
      return (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Jackets</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg p-4 shadow hover:shadow-lg transition text-center"
              >
                {/* Main Image with Link */}
                <Link to={`/product/women/${item.id}`}>

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
                    {item.tags[0]} {/* Display only the first tag for simplicity */}
                  </div>
                )}
    
                {/* Title */}
                <h2 className="mt-1 text-sm font-medium text-gray-800 px-2">
                  {item.title}
                </h2>
    
                {/* Price */}
                <div className="text-sm mt-1">
                  {item.priceOriginal && item.priceOriginal !== item.priceSale && (
                    <span className="text-gray-400 line-through mr-1">
                      ${item.priceOriginal}
                    </span>
                  )}
                  <span className="text-green-700 font-semibold">
                    ${item.priceSale}
                  </span>
                </div>
    
                {/* Ratings */}
                {item.rating > 0 && (
                  <div className="text-sm text-yellow-500 mt-1">
                    {'★'.repeat(Math.floor(Number(item.rating)))}
                    {'☆'.repeat(5 - Math.floor(Number(item.rating)))}
                    <span className="text-gray-500 ml-1">
                      ({item.ratingCount})
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };


export default Shopwomen