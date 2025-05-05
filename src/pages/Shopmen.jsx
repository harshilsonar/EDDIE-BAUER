import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Shopmen = () => {
 const [product, setproduct] = useState([]);
       const [loading, setloading] = useState(false);
       const [error, seterror] = useState(null);
     
       const fetchProduct = () => {
         setloading(true);
         seterror(null);
         axios.get(`http://localhost:3000/men`)
           .then((response) => {
             setproduct(response.data); // ✅ correct use
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
     
       return loading ? (
         <p className="text-center">Loading...</p>
       ) : error ? (
         <p className="text-center text-red-600">{error}</p>
       ) :
       <div className=" bg-white px-4  mt-25 ml-50">
        <div className=" bg-white px-6 ss">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-40">
             {product.map((item) => (
               <div
                 key={item.id}
                 className="bg-white text-center"
               >
                 {/* Main Image */}
                 <img
                   src={item.mainImage}
                   alt={item.title}
                   className="w-50 h-[200px] object-contain mx-auto"
                 />
     
                 {/* Swatches */}
                 <div className="flex justify-center flex-wrap gap-2 mt-3">
                   {item.swatches.map((swatch, i) => (
                     <img
                       key={i}
                       src={swatch}
                       alt={`swatch-${i}`}
                       className="w-6 h-6 rounded-full border border-gray-300"
                     />
                   ))}
                 </div>
     
                 {/* Tag */}
                 {item.tag && (
                   <div className="text-xs text-red-600 font-semibold mt-2 uppercase">
                     {item.tag}
                   </div>
                 )}
     
                 {/* Title */}
                 <h2 className="mt-1 text-sm font-medium text-gray-800 px-2">
                   {item.title}
                 </h2>
     
                 {/* Price */}
                 <div className="text-sm mt-1">
                   {item.priceOriginal !== item.priceSale && (
                     <span className="text-gray-400 line-through mr-1">
                       {item.priceOriginal}
                     </span>
                   )}
                   <span className="text-green-700 font-semibold">
                    {item.priceSale}
                   </span>
                 </div>
     
                 {/* Ratings */}
                 {item.rating > 0 && (
                   <div className="text-sm text-yellow-500 mt-1">
                     ★ {item.rating}{" "}
                     <span className="text-gray-500">
                       ({item.ratingCount})
                     </span>
                   </div>
                 )}
               </div>
             ))}
           </div>
         </div>
     </div>
}

export default Shopmen