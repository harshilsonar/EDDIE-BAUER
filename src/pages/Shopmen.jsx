import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import Filter from '../components/Filter';



const Shopmen = () => {
 const [product, setproduct] = useState([]);
       const [loading, setloading] = useState(false);
       const [error, seterror] = useState(null);
       const [filters, setFilters] = useState({ gender: [], price: [] });
    const [sortOrder, setSortOrder] = useState("");

       const [searchParams] = useSearchParams();
       const searchQuery = searchParams.get('search') || '';
     
       const fetchProduct = () => {
         setloading(true);
         seterror(null);
         axios.get(`http://localhost:3000/men`)
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


       const filterByPrice = (priceRange, actualPrice) => {
        if (priceRange === 'below50') return actualPrice < 50;
        if (priceRange === '50to100') return actualPrice >= 50 && actualPrice <= 100;
        if (priceRange === '100to150') return actualPrice > 100 && actualPrice <= 150;
        if (priceRange === '150to200') return actualPrice > 150 && actualPrice <= 200;
        if (priceRange === 'above250') return actualPrice > 250;
        return true;
      };
    
      // Apply gender and price filters
      const filteredProducts = product
      .filter((item) => {
        const gender = item.title.includes("Women's") ? 'Women' : item.title.includes("Men's") ? 'Men' : '';
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGender = filters.gender?.length === 0 || filters.gender.includes(gender);
        const matchesPrice = filters.price?.length === 0 || filters.price.some(priceRange => filterByPrice(priceRange, item.priceSale));
        return matchesSearch && matchesGender && matchesPrice;
      })
      .sort((a, b) => {
        if (sortOrder === "asc") return a.priceSale - b.priceSale;
        if (sortOrder === "desc") return b.priceSale - a.priceSale;
        return 0;
      });
    

       const handleSwatchClick = (index, swatchUrl) => {
        const updated = [...product];
        updated[index].selectedImage = swatchUrl;
        setproduct(updated);}
     
 if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 py-10">{error}</p>;

  return (
     <div className="max-w-7xl mx-auto px-4 py-8 mt-25">
         <h1 className="text-3xl font-bold mb-6 text-center">Shopmen</h1>
         <div className="flex justify-end mb-4">
  <select
    className="border border-gray-300 rounded px-3 py-1"
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
  >
    <option value="">Sort by Price</option>
    <option value="asc">Price: Low to High</option>
    <option value="desc">Price: High to Low</option>
  </select>
</div>
         <div className="flex flex-col sm:flex-row">
           <Filter filters={filters} setFilters={setFilters} />
   
           <div className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {filteredProducts.map((item, index) => (
               <div key={item.id} className="bg-white border rounded-lg p-4 shadow text-center">
                 <Link to={`/product/men/${item.id}`}>
                   <img src={item.selectedImage} alt={item.title} className="w-full h-[200px] object-contain mx-auto" />
                 </Link>
                 <div className="flex justify-center flex-wrap gap-2 mt-3">
                   {item.swatches.map((swatch, i) => (
                     <img
                       key={i}
                       src={swatch}
                       alt={`swatch-${i}`}
                       className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
                       onClick={() => handleSwatchClick(index, swatch)}
                     />
                   ))}
                 </div>
                 {item.tags?.[0] && <div className="text-xs text-red-600 mt-2">{item.tags[0]}</div>}
                 <h2 className="mt-1 text-sm font-medium text-gray-800">{item.title}</h2>
                 <div className="text-sm mt-1">
                   {item.priceOriginal !== item.priceSale && (
                     <span className="line-through text-gray-400 mr-1">${item.priceOriginal}</span>
                   )}
                   <span className="text-green-700 font-semibold">${item.priceSale}</span>
                 </div>
                 {item.rating > 0 && (
                   <div className="text-sm text-yellow-500 mt-1">
                     {'★'.repeat(Math.floor(item.rating))}{'☆'.repeat(5 - Math.floor(item.rating))}
                     <span className="text-gray-500 ml-1">({item.ratingCount})</span>
                   </div>
                 )}
               </div>
             ))}
           </div>
         </div>
       </div>
  );
};

export default Shopmen