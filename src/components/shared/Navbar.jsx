import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto p-5'>
           <div>

           </div>
           <ul className='flex items-center gap-2'>
               <li><NavLink href={'/'}>Home</NavLink></li>
               <li><NavLink href={'/about'}>About</NavLink></li>
               <li><NavLink href={'/career'}>Career</NavLink></li>
           </ul>
           <div>
            <button className='btn btn-primary'>
                <Link href={'/login'}>Login</Link>
            </button>

           </div>
        </div>
    );
};

export default Navbar;