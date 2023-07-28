import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from 'react-scroll'
import {navData} from '../data';
import { CgClose } from 'react-icons/cg'

const NavMobile = ({setNavMobile}) => {
  const [isScrolled, setIsScrolled] = useState(false);


  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  
    return (
      <nav className='{lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center items-center'>
     
        <div onClick={()=> setNavMobile(false) }className='absolute top-2 left-2 left-2 cursor-pointer'>
          <CgClose className='text-3xl'/>
        </div>
        <ul className='text-xl flex flex-col gap-y-8'>
            {navData.map((item,index) => {
              return  (
              <li key={index}>
                      <Link className='cursor-pointer' to={item.href} spy={true} smooth={true} offset={50} duration={1500} onClick={()=> setNavMobile(false)} >{item.name}</Link>
              </li>
              );
            })}
        </ul>
      </nav>
    );
};

export default NavMobile;