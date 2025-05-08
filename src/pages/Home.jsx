import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const fetchProduct = () => {
    setloading(true);
    seterror(null);
    axios.get(`http://localhost:3000/Best-seller`)
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

  return (
    <div className="relative z-0">




      
      {/* First Banner */}
      <div className="relative inline-block" style={{ marginTop: '100px' }}>
        <img
          src="https://assets.eddiebauer.com/m/592f8f4de44ff406/original/250501_hp_flash-sale_V1.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex justify-center items-center space-x-4 mt-44">
  <Link to="/topseller"> <button className="px-6 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition">
            SHOP NOW
          </button></Link>
        </div>
      </div>

      {/* Headline and Grid */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Shop Warm-Weather Must-Haves</h1>

        {/* Static Images Row */}
        <div className="flex space-x-5">
          {/* Jackets */}
          <div className="relative w-160 h-80">
            <img
              src="https://assets.eddiebauer.com/transform/a8/0958f884-62a0-48ca-a7a4-5a36e1975621/250430_hp_jackets_V1"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-60 left-2 text-white font-semibold px-2 py-1 rounded">
              Lightweight Outerwear
            </div>
         <Link to="/jacket">   <div className="absolute bottom-2 left-2 text-white font-medium px-2 py-1 rounded hover:underline cursor-pointer">
              Shop Jackets
            </div></Link>
          </div>

          {/* Dresses */}
          <div className="relative w-160 h-80">
            <img
              src="https://assets.eddiebauer.com/transform/a8/b4e0c20d-9189-4c3f-995b-2e15f065382c/250423_hp_dresses_V1"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-60 left-2 text-white font-semibold px-2 py-1 rounded">
              One & Done Favourite Dresses
            </div>
           <Link to="/dresses"> <div className="absolute bottom-2 left-2 text-white font-medium px-2 py-1 rounded hover:underline cursor-pointer">
              Shop Dresses
            </div></Link>
          </div>
        </div>
      </div>

      {/* Shop Men/Women Section */}
      <div className="relative inline-block mt-10">
        <img
          src="https://assets.eddiebauer.com/m/145ef45cffc35b8f/original/250430_hp_bottoms-promo_V2.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex justify-start items-center gap-4 mt-[200px] ms-[120px]">
       <Link to="/shopmen"><button className="px-6 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition">
            Shop Men
          </button></Link>   
          <Link to="/shopwomen"> <button className="px-6 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition">
            Shop Women
          </button></Link>   
        </div>
      </div>

      {/* Second Static Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex space-x-5">
          {/* Beach */}
          <div className="relative w-160 h-80">
            <img
              src="https://assets.eddiebauer.com/transform/a8/18f9faa1-2b90-4620-a3f6-766f97e96ec0/250430_hp_beach_V1"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-60 left-2 text-white font-semibold px-2 py-1 rounded">
              Summer Essentials
            </div>
         <Link to="/swim">   <div className="absolute bottom-2 left-2 text-white font-medium px-2 py-1 rounded hover:underline cursor-pointer">
              Shop Swim & Beach Gear
            </div></Link>
          </div>

          {/* Tees */}
          <div className="relative w-160 h-80">
            <img
              src="https://assets.eddiebauer.com/transform/a8/bd3f8f45-f6fc-40e5-a6d3-aa79dfdce0bd/250430_hp_t-shirts_V1"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-60 left-2 text-white font-semibold px-2 py-1 rounded">
              Must-Have Tees
            </div>
          <Link to="/tshirts">  <div className="absolute bottom-2 left-2 text-white font-medium px-2 py-1 rounded hover:underline cursor-pointer">
              SHOP T-Shirts
            </div></Link>
          </div>
        </div>
      </div>

      {/* Dynamic Product Grid */}
      <div className="mt-16 px-6">
        <h2 className="text-2xl font-bold text-start mb-6">Best Sellers</h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {product.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden p-4"
            >
          <Link to={`/product/Best-seller/${item.id}`}><img
                src={item.mainImage}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg"
              /> </Link>
             
              <div className="mt-4 space-y-2">
                <h2 className=" font-semibold text-gray-800">{item.title}</h2>
                <p className="text-xl  text-gray-10">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-sm text-red-600">{item.offer}</p>
                {/* <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
                  Add to Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
        )}
      </div>



      <div className="flex flex-col items-start pt-32 ms-50">  {/* pt-32 = enough space to avoid hiding behind fixed navbar */}
  <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
  <h3 className="text-2xl font-bold mb-10  max-w-1xl">
    To inspire, enable, and empower everyone to experience the outdoors & live their adventure.
  </h3>

  <div className="flex flex-wrap gap-6">
    {/* First Block */}
    <div>
      <img
        src="https://assets.eddiebauer.com/transform/a8/30aad3f3-f393-4008-a383-1a0488a36b89/250407_hp_MRKT_earth-month_V2"
        alt=""
        className="w-150 h-64"
      />
      <div className="mt-3 space-y-1 text-black">
        <div className="text-lg font-semibold">Eddie Bauer & American Forests</div>
        <div className="text-base">Proud to be partners for over 30 years.</div>
        <div className="font-medium hover:underline cursor-pointer">SHOP THE COLLECTION</div>
      </div>
    </div>

    {/* Second Block */}
    <div >
      <img
        src="https://assets.eddiebauer.com/transform/a8/7518ef5e-c5e7-414d-bdb5-9271a7f93ea1/250407_hp_MRKT_heritage_V1"
        alt=""
        className="w-150 h-64 "
      />
      <div className="mt-3 space-y-1 text-black">
        <div className="text-lg font-semibold">100 Years of Eddie Bauer</div>
        <div className="text-base">Did you know that Eddie Bauer was a real person?</div>
        <div className="font-medium hover:underline cursor-pointer">LEARN MORE</div>
      </div>
    </div>
  </div>
</div>




    </div>
  );
};

export default Home;
