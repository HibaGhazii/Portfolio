import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const HeroSection = () => {

  const [text] = useTypewriter({
    words: [' Web Developer', ' Web Designer',' UI/UX Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });
  
  return (
    <div className="flex flex-row bg-[url('../public/img/banner-bg.png')] py-40">
            <div className="w-1/2 p-10 pl-32">
                <button className=" bg-none text-white font-bold text-center border border-white py-2 px-4">Welcome to my Portfolio</button>
                <p className="text-white text-4xl font-bold pt-5">
                  Hi! I'm Hiba,
                  <span className='text-white text-4xl font-bold pt-5'>
                    {text}
                  </span>
                  <span className='text-white text-4xl'>
                    <Cursor cursorStyle='|' />
                  </span>
                </p>
                <p className="text-white pt-2 text-lg font-bold">Are you looking for a web developer ?</p>
                <p className="text-white pt-2">You're in luck! I am passionate about the web and have acquired a number of skills since I started in the field.</p>
                <p className="text-white">First and foremost, let me introduce myself. I'm Hiba, an computer engineer specializing in web development. I present to you my portfolio, which outlines my professional journey.</p>
            </div>
            <div className="w-1/2 p-4">
              <img src="/img/header-img.svg" className="h-80 w-full" alt="" />
            </div>
    </div>
  ); 
}

export default HeroSection;