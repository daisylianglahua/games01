     import React from 'react';
     import Link from 'next/link';

     const Navbar = () => {
       return (
         <nav className="bg-gray-800 text-white p-4">
           <div className="container mx-auto">
             <ul className="flex space-x-6">
               <li>
                 <Link href="/adventure" className="hover:text-gray-300 transition-colors">
                   冒险类
                 </Link>
               </li>
               <li>
                 <Link href="/puzzle" className="hover:text-gray-300 transition-colors">
                   益智类
                 </Link>
               </li>
               <li>
                 <Link href="/casual" className="hover:text-gray-300 transition-colors">
                   休闲类
                 </Link>
               </li>
               <li>
                 <Link href="/recommended" className="hover:text-gray-300 transition-colors">
                   推荐使用
                 </Link>
               </li>
             </ul>
           </div>
         </nav>
       );
     };

     export default Navbar;