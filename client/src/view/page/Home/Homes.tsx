import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from 'framer-motion';

import Product from "../../../componanent/Product";
import DiscoverOurStory from "../../../image/Group 15.png";
import Pic1 from "../../../image/menu1.jpg";
import Pic3 from "../../../image/menu2.jpg";
import Pic2 from "../../../image/menu3.jpg";
import Pic4 from "../../../image/menu4.jpg";
import Icon1 from "../../../image/24Icon.png";
import { url } from "inspector";
// import OurProductPic1 from "../../../image/OurProductPic/Beafourtony Espresso Cups and Saucers Unique craft Ceramic Cup.png";
// import OurProductPic2 from "../../../image/OurProductPic/Free PSD _ Mockup of a cup of takeaway coffee.png";
// import OurProductPic3 from "../../../image/OurProductPic/Tea holic.png";

interface Product {
    img: string;
    title: string;
    description: string;
    price: string;
}

const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const testimonials = [
    {
        text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small",
        author: "Louise Kelly",
    },
    {
        text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small",
        author: "Louise Kelly",
    },
    {
        text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small",
        author: "Louise Kelly",
    }
];


export const products: Record<string, Product[]> = {
    pizza: [
        {
            img: Pic1,
            title: "Cheese pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.2500/=",
        },
        {
            img: Pic2,
            title: "pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1500/",
        },
        {
            img: Pic3,
            title: "pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1900/",
        },

        {
            img: Pic1,
            title: "pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.2500/=",
        },
        {
            img: Pic2,
            title: "pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1500/",
        },
        {
            img: Pic3,
            title: "pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1900/",
        },
    ],
    seaFood: [
        {
            img: Pic3,
            title: "Mango Juice",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "$2.89",
        },
        {
            img: Pic1,
            title: "Apple Juice",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "$2.89",
        },
        {
            img: Pic2,
            title: "Avacardo Juice",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "$2.89",
        },
    ],
    meet: [
        {
            img: Pic1,
            title: "Cappuccino pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.2500/=",
        },
        {
            img: Pic2,
            title: "Ice Coffee",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1500/",
        },
        {
            img: Pic3,
            title: "Chai Coffee",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1900/",
        },
    ],
    bakery: [
        {
            img: Pic1,
            title: "Cappuccino pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.2500/=",
        },
        {
            img: Pic2,
            title: "Ice Coffee",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1500/",
        },
        {
            img: Pic3,
            title: "Chai Coffee",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1900/",
        },
    ],
    juice: [
        {
            img: Pic1,
            title: "Cappuccino pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.2500/=",
        },
        {
            img: Pic2,
            title: "Ice Coffee",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1500/",
        },
        {
            img: Pic3,
            title: "Chai Coffee",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1900/",
        },
    ],
    saledes: [
        {
            img: Pic1,
            title: "Cappuccino pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.!",
            price: "Rs.2500/=",
        },
        {
            img: Pic2,
            title: "Ice Coffee",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1500/",
        },
        {
            img: Pic3,
            title: "Chai Coffee",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1900/",
        },
    ],
    desserts: [
        {
            img: Pic1,
            title: "Cappuccino pizza",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.2500/=",
        },
        {
            img: Pic2,
            title: "Ice Coffee",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            price: "Rs.1500/",
        }
    ],
};

interface FeatureCardProps {
    imgSrc: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    imgSrc,
    title,
    description,
}) => {
    return (
        <div className="flex flex-col items-center text-center gap-4 p-5 bg-white rounded-lg shadow-lg max-w-xs">
            <img src={imgSrc} alt={title} className="w-16 h-16 mb-4" />
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};
const Home = () => {
    const [selectedCategory, setSelectedCategory] =
        useState<keyof typeof products>("pizza");

    return (
        <>
            {/*//home photo*/}
            <div id="homePic" className="relative">
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white font-bold text-center">
                    <h4 className="text-6xl md:text-7xl lg:text-8xl">JUST COME TO</h4>
                    <h1 className="text-3xl md:text-7xl lg:text-8xl">fooides & orderd</h1>
                    <h6 className=" text-3xl  text-[#fbbf24]">Here You will Fine All Best Quality And Pure Food. Order Now To Satisfy Your Hunger Pangs</h6>
                   
                </div>

                <div className="absolute inset-x-0 bottom-10 flex justify-center space-x-10">
                    <button className="px-8 md:px-10 lg:px-12 py-3 bg-[#f59e0b] text-black border-2 font-bold">
                        <Link to="/menu">Latest Collection</Link>
                    </button>
                </div>
            </div>

    

            {/*//kahapata kotasa*/}
            <div className="bg-white py-16 px-4 md:px-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-around items-center ">
                    <FeatureCard 
                        imgSrc= "data:image/png;base64,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"
                        
                        title="24 HOUR SERVICE"
                        description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                    />
                    <FeatureCard
                        imgSrc="data:image/png;base64,"
                        title="FRESH ITEMS"
                        description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                    />
                    <FeatureCard
                        imgSrc="data:image/png;base64,"
                        title="FAST DELIVERY"
                        description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                    />
                    <FeatureCard
                    imgSrc="data:image/png;base64,"
                    title="FRENDLY STARFF"
                    description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                />
                </div>
            </div>

            {/*//discover our menu kotasa*/}
            <div className="bg-gradient-to-r from-green-800 to-green-500 flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 items-center py-10 md:py-20 px-5 md:px-10">

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <div className="flex flex-col gap-5">
                        <img
                            className="w-52 h-80 object-cover rounded-lg shadow-lg"
                            src={Pic1}
                            alt="Coffee Image 1"
                        />
                        <img
                            className="w-52 h-56 object-cover rounded-lg shadow-lg"
                            src={Pic3}
                            alt="Coffee Image 3"
                        />
                    </div>
                    <div className="flex flex-col gap-5 mt-10 sm:mt-0">
                        <img
                            className="w-52 h-56 object-cover rounded-lg shadow-lg"
                            src={Pic2}
                            alt="Coffee Image 2"
                        />
                        <img
                            className="w-52 h-80 object-cover rounded-lg shadow-lg"
                            src={Pic4}
                            alt="Coffee Image 4"
                        />
                    </div>
                
                    <div className="flex flex-col gap-5 mt-10 sm:mt-0">
                    <img
                            className="w-52 h-80 object-cover rounded-lg shadow-lg"
                            src={Pic4}
                            alt="Coffee Image 4"
                        />
                        <img
                            className="w-52 h-56 object-cover rounded-lg shadow-lg"
                            src={Pic2}
                            alt="Coffee Image 2"
                        />
                       
                    </div>
                    <div className="flex flex-col gap-5 mt-10 sm:mt-0">
                        <img
                            className="w-52 h-56 object-cover rounded-lg shadow-lg"
                            src={Pic2}
                            alt="Coffee Image 2"
                        />
                        <img
                            className="w-52 h-80 object-cover rounded-lg shadow-lg"
                            src={Pic4}
                            alt="Coffee Image 4"
                        />
                    </div>

                <div className="flex flex-col items-end justify-center text-right max-w-lg lg:max-w-none">
                    {/* <h1 className="text-2xl items-start md:text-3xl text-[#f59e0b]">Discover</h1> */}
                    <h1 className="text-4xl items-start md:text-5xl text-[#f59e0b] font-bold">
                        OUR MENU
                    </h1>
                    <p className="text-white items-start mt-6 md:mt-8 max-w-md">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button className="text-white border-2 border-[#AB8B5A] px-5 py-2 mt-6 md:mt-8 transition hover:bg-[#AB8B5A]">
                        <Link to="/menu">View Menu</Link>
                    </button>
                </div>

               
                </div>
            </div>


            {/*//Our Product*/}

            <Product data={products} viewButton={true} />

        

            {/*//Customer Syas*/}
            <div id="CustomerSaysPic" className="bg-gradient-to-r from-[#1B1B1B] to-[#535353] flex flex-col min-h-screen px-5 py-14">
                <div className="flex flex-col justify-center items-center">
                    
                    <h1 className="text-4xl text-white">CUSTOMERS FEADBACK</h1>
                    <br />
                    <br />
                    <p className="text-white text-center max-w-[700px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-5 pt-14">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#059669] p-8 rounded-lg shadow-lg max-w-md w-full"
                            initial="hidden"
                            whileInView="visible"
                            variants={testimonialVariants}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <p className="text-xl text-white">{testimonial.text}</p>
                            <h1 className="pt-5 text-white text-right font-semibold">{testimonial.author}</h1>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
