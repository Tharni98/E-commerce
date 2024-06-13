import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Product = (prop:any) => {

    const [selectedCategory, setSelectedCategory] = useState<keyof typeof prop.data.products>('pizza');

    return(

      

<div className="bg-gradient-to-r from-[#f59e0b] to-[#475569] flex flex-col">
                <div className="justify-center flex flex-col items-center pt-14">

                    <h1 className="text-4xl text-center text-white font-bold">OUR PRODUCT</h1>
                    <br />
                    <br />
                    <p className="text-white text-center max-w-[700px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <br />
                <br />

                <div className="flex justify-center gap-10 items-center">
                    <div className={`px-5 py-2 rounded ${selectedCategory === 'pizza' ? 'bg-[#AB8A5A]' : ''}`} onClick={() => setSelectedCategory('pizza')}>
                        <h1 className="text-2xl text-center text-black">Pizza</h1>
                    </div>
                    <div className={`px-5 py-2 rounded ${selectedCategory === 'seaFood' ? 'bg-[#AB8A5A]' : ''}`} onClick={() => setSelectedCategory('seaFood')}>
                        <h1 className="text-2xl text-center  text-black">Sea Food Items</h1>
                    </div>
                    <div className={`px-5 py-2 rounded ${selectedCategory === 'meet' ? 'bg-[#AB8A5A]' : ''}`} onClick={() => setSelectedCategory('meet')}>
                        <h1 className="text-2xl text-center  text-black">Meet Items</h1>
                    </div>
                    <div className={`px-5 py-2 rounded ${selectedCategory === 'bakery' ? 'bg-[#AB8A5A]' : ''}`} onClick={() => setSelectedCategory('bakery')}>
                        <h1 className="text-2xl text-center  text-black">Bakery Items</h1>
                    </div>
                    <div className={`px-5 py-2 rounded ${selectedCategory === 'juice' ? 'bg-[#AB8A5A]' : ''}`} onClick={() => setSelectedCategory('juice')}>
                        <h1 className="text-2xl text-center  text-black">Juice</h1>
                    </div>
                    <div className={`px-5 py-2 rounded ${selectedCategory === 'desserts' ? 'bg-[#AB8A5A]' : ''}`} onClick={() => setSelectedCategory('desserts')}>
                        <h1 className="text-2xl text-center  text-black">Desserts</h1>
                    </div>
                    <div className={`px-5 py-2 rounded ${selectedCategory === 'saledes' ? 'bg-[#AB8A5A]' : ''}`} onClick={() => setSelectedCategory('saledes')}>
                        <h1 className="text-2xl text-center  text-black">Saledes</h1>
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="flex justify-evenly items-center">
                    {prop.data[selectedCategory].map((product:any, index:number) => (
                        <div key={index} className="flex flex-col justify-evenly items-center text-center gap-5">
                            <img className="w-[250px] h-[250px]" src={product.img} alt={product.title} />
                            <h1 className="text-2xl text-center text-white">{product.title}</h1>
                            <p className="max-w-[250px] text-white">{product.description}</p>
                            <h1 className="text-2xl text-center text-white ">{product.price}</h1>
                            <div className="flex justify-center items-center">
                                <button className="text-white border-2 border-[#1e293b] px-5 py-2  animate-pulse ">Add To cart</button>
                            </div>

                        </div>
                    ))}
                </div>

                <br />
                <br />

                <div className="flex justify-center items-center">
                {prop.viewButton ?  (<button  className="text-white border-2 border-[#AB8B5A] px-5 py-2 animate-pulse">
                        <Link to="/menu">View Menu</Link>
                    </button>)  : ""}
                    
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>

    )
}
export default Product;