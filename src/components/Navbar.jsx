import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { FaMountain } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import { Link } from 'react-router-dom';


 function Navbar() {
    return (
      <div className="w-full">
       <div className="fixed top-0 left-0 w-full bg-gray-800 text-white text-sm flex justify-between items-center px-6 py-2 z-50">
  {/* Left: Logo + Text */}
  <div className="flex items-center gap-2 whitespace-nowrap">
    <FaMountain className="text-lg" />
    <span>Earn Rewards On Purchases</span>
  </div>

  {/* Center: Offer Text */}
  <div className="flex-1 text-center whitespace-nowrap overflow-hidden">
    <span className="font-medium">
      40% OFF PANTS & SHORTS
      <span className="ml-4 inline-flex items-center gap-1 cursor-pointer font-normal text-sm">
        VIEW ALL OFFERS <SlArrowRight />
      </span>
    </span>
  </div>

  {/* Right: Links */}
  <div className="flex items-center gap-4 whitespace-nowrap">
    <span className="flex items-center gap-1 cursor-pointer">
      <FaLocationDot /> Stores
    </span>
    <span className="flex items-center gap-1 cursor-pointer">
      <CgProfile /> Sign In / Sign Up
    </span>
  </div>
</div>



      {/* Fixed Navbar */}
      <div className="fixed top-[35px] left-0 w-full bg-white z-40 shadow border-b">
        <div className="grid grid-cols-3 items-center px-6 py-4 gap-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="border-b border-gray-400 focus:outline-none w-full py-1 px-2"
            />
            <FaSearch className="text-gray-600" />
          </div>

          <div className="flex justify-center">
  <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
    <Link to="/" className="flex items-center gap-2">
      EDDIE BAUER <GiHummingbird />
    </Link>
  </h1>
</div>


          <div className="flex justify-end">
            <div className="text-sm text-gray-700 flex flex-col items-center">
              <IoBag className="text-xl" />
              <span>Bag</span>
            </div>
          </div>
        </div>
      </div>


  
        {/* Bottom Nav Links */}

{/* <!-- NEW --> */}
{/* <!-- Navbar --> */}

<div className="fixed top-[105px] left-0 w-full bg-white z-40 border-b shadow">
  <div className="flex justify-center gap-6 text-sm font-semibold py-2">

  {/* <!-- NEW --> */}
  <div class="group relative">
    <span class="cursor-pointer text-blue-900">NEW!
    <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>  
    </span> 
    <div class="absolute hidden group-hover:block bg-white s top-full mt-2 p-10  z-10 d-flex" style={{marginLeft:"-400px", width:"1560px",height:"400px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px",marginLeft:"105px"}}>
        <div style={{width:"250px",borderRight:"1px solid grey"}}>
      <h4 class="font-bold mb-2">FEATURED</h4>
      <ul class="space-y-1 text-sm">
        <li class="hover:underline">Mother's Day Gifts</li>
        <li class="hover:underline">Hiking</li>
        <li class="hover:underline">Travel</li>
        <li class="hover:underline">Spring Jackets</li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"50px",width:"250px"}}>SHOP BY CATEGORY</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"50px",width:"160px" }}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Women</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Men</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Outwear</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Gear & Home</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shoes</li>
      </ul>
      </div>
  </div>
</div>
</div>

  {/* <!-- WOMEN --> */}
  <div class="group relative">
    <span class="cursor-pointer">WOMEN
    <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>  
    </span> 
    <div class="absolute hidden group-hover:block bg-white s top-full mt-2 p-10  z-10 d-flex" style={{marginLeft:"-500px", width:"1605px",height:"500px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px",marginLeft:"105px"}}>
        <div style={{width:"800px",borderRight:"1px solid black"}}>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px",width:"150px",}}>FEATURED</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Shop All Women's</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>New Arrivals</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>First Ascent</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Sale</li> 
        <li class="hover:underline" style={{marginTop:"10px"}}>Women's Petite</li>   
        <li class="hover:underline" style={{marginTop:"10px"}}>Women's Tall</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Women's Plus</li>      
      </ul>

      <h4 class="font-bold mb-2" style={{marginLeft:"100px",width:"150px",marginTop:"90px"}}>BUY MORE & SAVE</h4>

<ul class="space-y-1 text-sm" style={{marginLeft:"100px"}}>
<li class="hover:underline" style={{marginTop:"10px"}}>Tops up to 30% off</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Socks up to 40% off</li>  
  
</ul>
      </div>
          
      <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"50px",width:"180px"}}>TOPS</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"50px",width:"160px" }}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Actwear Tops</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shirts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Tank Tops</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>T-Shirt</li>
      </ul>

      <h4 class="font-bold mb-2" style={{marginLeft:"90px",marginTop:"180px"}}>FLEECE</h4>

      </div>
    
      <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"90px"}}>BOTTOMS</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"90px", width:"110px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Capris</li>
      <li class="hover:underline" style={{marginTop:"10px"}}>Jeans</li>
      <li class="hover:underline" style={{marginTop:"10px"}}>Joggers</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Leggings </li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Lined Bottoms</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Pants</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shorts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Skirts & Skorts</li>
      </ul>

      <h4 class="font-bold mb-2" style={{marginLeft:"90px",marginTop:"55px"}}>SWIMWEAR</h4>
      </div> 

      <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"60px"}}>OUTERWEAR</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"60px", width:"160px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Insulated</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>jackets</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Pants</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Parkas</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Rainwear</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Softshell & Wind jackets</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Vests</li> 

              <h4 class="font-bold mb-2" style={{marginLeft:"90px",marginTop:"85px"}}>DRESSES</h4>
 
      </ul>
      </div>

      <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"60px",width:"250px"}}>ACCESSORIES</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"60px", width:"120px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Belts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Gloves</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Hats</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Scarves</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Scoks</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sunglasses</li>
      </ul>

      <h4 class="font-bold mb-2" style={{marginLeft:"90px",marginTop:"110px"}}>SHOES</h4>

<ul class="space-y-1 text-sm" style={{marginLeft:"90px", width:"110px"}}>
<li class="hover:underline" style={{marginTop:"10px"}}>Boots</li>
  <li class="hover:underline" style={{marginTop:"10px"}}>Hiking </li>
  <li class="hover:underline" style={{marginTop:"10px"}}>Sandals</li>
  <li class="hover:underline" style={{marginTop:"10px"}}>Slippers</li>
</ul>
      </div>

    </div>
  </div>
  </div>

  {/* <!-- MEN --> */}
  <div class="group relative">
    <span class="cursor-pointer">MEN
    <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>  
    </span> 
    <div class="absolute hidden group-hover:block bg-white s top-full mt-2 p-10  z-10 d-flex" style={{marginLeft:"-500px", width:"1520px",height:"450px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px",marginLeft:"105px"}}>
        <div style={{width:"800px",borderRight:"1px solid black"}}>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px",width:"150px",}}>FEATURED</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Shop All Men's</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>New Arrivals</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>First Ascent</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Sale</li> 
        <li class="hover:underline" style={{marginTop:"10px"}}>Men's Tall</li>   
      </ul>

      <h4 class="font-bold mb-2" style={{marginLeft:"100px",width:"150px",marginTop:"100px"}}>BUY MORE & SAVE</h4>

<ul class="space-y-1 text-sm" style={{marginLeft:"100px"}}>
<li class="hover:underline" style={{marginTop:"10px"}}>Tops up to 30% off</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Socks up to 40% off</li>  
  
</ul>
      </div>
          
      <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"50px",width:"180px"}}>TOPS</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"50px",width:"160px" }}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Actwear Tops</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Polos </li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shirts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shirt Jacket</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sweatshirts & Hoodies</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>T-Shirt</li>
      </ul>

      <h4 class="font-bold mb-2" style={{marginLeft:"90px",marginTop:"70px"}}>FLEECE</h4>

      </div>
    
      <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"90px"}}>BOTTOMS</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"90px", width:"110px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Jeans</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Pants </li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shorts</li>
      </ul>

      <h4 class="font-bold mb-2" style={{marginLeft:"90px",marginTop:"150px"}}>SHOES</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"90px", width:"110px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Boots</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Hiking </li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sandals</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Slippers</li>
      </ul>

      </div> 

      <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"20px"}}>OUTERWEAR</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"20px", width:"160px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Insulated</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>jackets</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Pants</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Parkas</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Rainwear</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Softshell & Wind jackets</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Vests</li>  
      </ul>
      </div>

      <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"20px",width:"250px"}}>ACCESSORIES</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"20px", width:"120px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Belts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Boxers</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Gloves</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Hats</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Scarves</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Scoks</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sunglasses</li>
      </ul>
      </div>

    </div>
  </div>
  </div>

  {/* <!-- OUTERWEAR --> */}
  <div class="group relative">
    <span class="cursor-pointer">OUTERWEAR
    <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>  
    </span> 
    <div class="absolute hidden group-hover:block bg-white s top-full mt-2 p-10  z-10 d-flex" style={{marginLeft:"-600px", width:"1560px",height:"400px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px",marginLeft:"105px"}}>
        <div style={{width:"600px",borderRight:"1px solid black"}}>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px",width:"150px",}}>FEATURED</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Rainwear</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shop all Outwear</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>New Arrivals </li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Sale</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Outerwear Care Guide</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>First Ascent</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Women's Petite</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Women's Tall</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Women's Plus</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Men's Tall</li>  
      </ul>
      </div>
            <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"50px"}}>WOMEN</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"50px",width:"160px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Insulated</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>jackets</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Pants</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Parkas</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Rainwear</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Softshell & Wind jackets</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Vests</li>  
      </ul>
      </div>
      <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px"}}>MEN</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px", width:"160px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Insulated</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>jackets</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Pants</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Parkas</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Rainwear</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Shirt Jackets</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Softshell & Wind jackets</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Vests</li>
      </ul>
      </div>
    
     

    </div>
  </div>
  </div>

  {/* <!-- GEAR & HOME --> */}
  <div class="group relative">
    <span class="cursor-pointer">GEAR & HOME
    <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>  
    </span> 
    <div class="absolute hidden group-hover:block bg-white s top-full mt-2 p-10  z-10 d-flex" style={{marginLeft:"-800px", width:"1650px",height:"400px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px",marginLeft:"105px"}}>
        <div style={{width:"800px",borderRight:"1px solid black"}}>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px",width:"150px",}}>FEATURED</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Shop All Gear & Home</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>New Arrivals</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>First Ascent</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Sale</li>  
      </ul>

      <h4 class="font-bold mb-2" style={{marginLeft:"100px",width:"150px",marginTop:"100px"}}>Special Collection</h4>

<ul class="space-y-1 text-sm" style={{marginLeft:"100px"}}>
<li class="hover:underline" style={{marginTop:"10px"}}>Stanely</li>
  <li class="hover:underline" style={{marginTop:"10px"}}>Travelon</li>  
  
</ul>
      </div>
          
      <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"50px",width:"180px"}}>PACKS & LUGGAGE</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"50px", }}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Backpacks</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Crossbody bags</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Duffle & Luggage</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Tote Bags</li>
      </ul>
      </div>
    
      <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"90px"}}>CAMPING</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"90px", width:"110px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Chairs</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sleeping Bags</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Tents</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Slippers</li>
      </ul>
      </div> 

      <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"20px",width:"200px"}}>OUTDOOR ACCESSORIES</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"20px", width:"100px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Drinkware</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Games</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Lighting</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sunglasses</li>
      </ul>
      </div>

      <div>
      <h4 class="font-bold mb-2" style={{paddingLeft:"20px",width:"250px"}}>HOME</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"20px", width:"120px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Bedding</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Blankets & Throws</li>
      </ul>
      </div>

    </div>
  </div>
  </div>

  {/* <!-- SHOES --> */}
  <div class="group relative">
    <span class="cursor-pointer">SHOES
    <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>  
    </span> 
    <div class="absolute hidden group-hover:block bg-white s top-full mt-2 p-10  z-10 d-flex" style={{marginLeft:"-900px", width:"1620px",height:"400px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px",marginLeft:"105px"}}>
        <div style={{width:"600px",borderRight:"1px solid black"}}>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px",width:"150px",}}>FEATURED</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Shop All Shoes</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>New Arrivals</li>  
        <li class="hover:underline" style={{marginTop:"10px"}}>Sales</li>  

      </ul>
      </div>
            <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"166px"}}>WOMEN</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"166px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Boots</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Hiking</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sandals</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Slippers</li>
      </ul>
      </div>
      <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px"}}>MEN</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px", width:"120px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Boots</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Hiking</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sandals</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Slippers</li>
      </ul>
      </div>
    
     

    </div>
  </div>
  </div>

  {/* <!-- SALE --> */}
  <div class="group relative">
    <span class="cursor-pointer">SALE
    <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>  
    </span> 
    <div class="absolute hidden group-hover:block bg-white s top-full mt-2 p-10  z-10 d-flex" style={{marginLeft:"-900px", width:"1550px",height:"390px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px",marginLeft:"105px"}}>
        <div style={{width:"600px",borderRight:"1px solid black"}}>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px",width:"150px",}}>BUY MORE & SAVE</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Tops up to 30% off</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Socks up to 40% off</li>  
      </ul>
      </div>
            <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"166px"}}>WOMEN</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"166px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Accessories</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Bottom</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Outwears</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shoes</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Tops</li>
      </ul>
      </div>
      <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px"}}>MEN</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px", width:"120px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Accessories</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Bottom</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Outwears</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shoes</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Tops</li>
      </ul>
      </div>
    
      <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"90px",width:"100px"}}>GEAR & HOME</h4>
      </div>

    </div>
  </div>
  </div>

  {/* <!-- CLEARANCE --> */}
  <div class="group relative">
    <span class="cursor-pointer text-red-600">CLEARANCE
    <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>  
    </span>
    <div class="absolute hidden group-hover:block bg-white s top-full mt-2 p-10  z-10 d-flex" style={{marginLeft:"-935px", width:"1525px",height:"540px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px",marginLeft:"105px"}}>
            <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"166px"}}>WOMEN</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"166px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Accessories</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Bottom</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Flannel</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Fleece </li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Leggings </li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sweaters </li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Swimwear </li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Outwears</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Pants</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shirts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shoes</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>shorts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sweatshirts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Hoodies</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Tops</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>T-shirts</li>
      </ul>
      </div>
      <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"100px"}}>MEN</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px", width:"120px"}}>
      <li class="hover:underline" style={{marginTop:"10px"}}>Accessories</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Bottom</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Flannel</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Fleece </li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Graphic T-shirts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Outwears</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Pants</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shirts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Shoes</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>shorts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Sweatshirts</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Hoodies</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>Tops</li>
        <li class="hover:underline" style={{marginTop:"10px"}}>T-shirts</li>
      </ul>
      </div>
    
      <div>
      <h4 class="font-bold mb-2" style={{marginLeft:"90px"}}>GEAR & HOME</h4>

      <ul class="space-y-1 text-sm" style={{marginLeft:"100px", width:"100px"}}>
      <li class="hover:underline" style={{marginTop:"15px"}}>Accessories</li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Backpack</li>
       
      </ul>
      </div>

    </div>
  </div>
  </div>

  {/* <!-- KIDS --> */}
  <div class="group relative">
  <span class="relative cursor-pointer group">
 KIDS
  <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>  
  </span> 
  </div>

  {/* <!-- ABOUT US --> */}
  <div class="group relative">
  <span class="relative cursor-pointer group">
  ABOUT US
  <span class="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-500/75 transition-all duration-300 group-hover:w-full"></span>
</span>
  <div class="absolute hidden group-hover:block bg-white s top-full mt-2 p-10  z-10 d-flex" style={{marginLeft:"-1100px", width:"1520px",height:"390px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"400px",marginLeft:"200px"}}>
            <div>
      <h4 class="font-bold mb-2 ">WHO ARE WE</h4>

      <ul class="space-y-1 text-sm" >
        <li class="hover:underline" style={{marginTop:"15px"}}>Awards & press</li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Our story</li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Sustainability</li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Careers</li>

      </ul>
      </div>

      <div>
      <h4 class="font-bold mb-2">BLOG</h4>

      <ul class="space-y-1 text-sm">
      <li class="hover:underline" style={{marginTop:"15px"}}>View All Posts</li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Camp & Hike</li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Expedition</li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Food </li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Gear</li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Reacent Videos</li>
        <li class="hover:underline" style={{marginTop:"15px"}}>Wellness</li>
      </ul>
      </div>
    

    
    </div>
  </div>
</div>
</div>
</div>
</div>
   

    );
  }
  

export default Navbar