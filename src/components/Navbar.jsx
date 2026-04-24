// // -------------------------------Start: 40_4 ---------------------------------------
// // (1)st
// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//     // (7)st
//     const links = <>
//     {/* <li><a>Item 1</a></li> */}

//     {/* (10) st commit previous */}
//     {/* <li><a href="/about">About</a></li>
//     <li><a href="/contact">Contact</a></li>
//     <li><a href="/about/developers">developers</a></li> */}
//     {/* (10) en */}

//     {/* (11)st commit (10) */}
//     <li><Link href="/about">About</Link></li>
//     <li><Link href="/contact">Contact</Link></li>
//     <li><Link href="/about/developers">developers</Link></li>
//     {/* (14) then in page.jsx in blogs folder*/}
//     <li><Link href="/blogs">Blogs</Link></li>
//     {/* (11) en */}

//     </>
//     // (7)en
//     return (
//         // <div>

//         // </div>

//         // (2)st commit previous and copy from daisyUI: Responsive (dropdown menu on small screen, center menu on large screen)
//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                          {/* (6) commit it and copy to (7)*/}
//                         {/* <li><a>Item 1</a></li> */}
//                         {/* (8) */}
//                         {links}


//                         {/* <li>
//                             <a>Parent</a>
//                             <ul className="p-2">
//                                 <li><a>Submenu 1</a></li>
//                                 <li><a>Submenu 2</a></li>
//                             </ul>
//                         </li>
//                         <li><a>Item 3</a></li> */}
//                         {/* (5)commit previous */}

//                     </ul>
//                 </div>

//                 {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
//                 {/* (12)commit previous then create page.jsx file creating blogs folder in app folder */}
//                 <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>

//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {/* <li><a>Item 1</a></li>
//                     <li>
//                         <details>
//                             <summary>Parent</summary>
//                             <ul className="p-2 bg-base-100 w-40 z-1">
//                                 <li><a>Submenu 1</a></li>
//                                 <li><a>Submenu 2</a></li>
//                             </ul>
//                         </details>
//                     </li>
//                     <li><a>Item 3</a></li> */}
//                     {/* (4) commit previous */}
//                     {/* (9) */}
//                         {links}

//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <a className="btn">Button</a>
//             </div>
//         </div>
//         // (2)en then in layout.js file
//     );
// };

// export default Navbar;
// // (1)en
// // ---------------------End:40_4-(1) to (13) --------------------------------
// // -------------------------------Start: 40_6 ---------------------------------------

// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {

//     const links = <>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//         <li><Link href="/about/developers">developers</Link></li>
//         <li><Link href="/blogs">Blogs</Link></li>
//         {/* (2) then create layout.jsx file in dashboard folder*/}
//         <li><Link href="/dashboard">Dashboard</Link></li>

//     </>

//     return (

//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

//                         {links}

//                     </ul>
//                 </div>

//                 <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {links}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <a className="btn">Button</a>
//             </div>
//         </div>

//     );
// };

// export default Navbar;

// // ---------------------End:40_6-(1) to (13) --------------------------------
// // -------------------------------Start: 40_7 ---------------------------------------

// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {

//     const links = <>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//         <li><Link href="/about/developers">developers</Link></li>
//         <li><Link href="/blogs">Blogs</Link></li>
//         <li><Link href="/dashboard">Dashboard</Link></li>
//         {/* (12) then (start: 40_8) in page.jsx file in about folder  */}
//         <li><Link href="/users">User</Link></li>

//     </>

//     return (

//         <div className="navbar bg-base-100 shadow-sm">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex="-1"
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

//                         {links}

//                     </ul>
//                 </div>

//                 <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {links}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <a className="btn">Button</a>
//             </div>
//         </div>

//     );
// };

// export default Navbar;

// // ---------------------End:40_7-(1) to (13) --------------------------------
// -------------------------------Start: 40_9 ---------------------------------------
// (8)
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    // (7)st
    const pathName = usePathname();
    console.log('pathname in the navbar', pathName);
    // (7)en

    const links = <>
    {/* (9)st */}
        {/* <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/about/developers">developers</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/users">User</Link></li> */}
    {/* (9)en */}

    {/* (10)st commit (9) */}
        <li><Link className={pathName === '/' ? 'text-blue-400 border' : ''} href="/">Home</Link></li>
        <li><Link className={pathName === '/about' ? 'text-blue-400 border' : ''} href="/about">About</Link></li>
        <li><Link className={pathName === '/contact' ? 'text-blue-400 border' : ''} href="/contact">Contact</Link></li>
        <li><Link className={pathName === '/about/developers' ? 'text-blue-400 border' : ''} href="/about/developers">developers</Link></li>
        <li><Link className={pathName === '/blogs' ? 'text-blue-400 border' : ''} href="/blogs">Blogs</Link></li>
        <li><Link className={pathName === '/dashboard' ? 'text-blue-400 border' : ''} href="/dashboard">Dashboard</Link></li>
        <li><Link className={pathName === '/users' ? 'text-blue-400 border' : ''} href="/users">User</Link></li>
    {/* (10)en then (start: 40_10) in page.jsx file in blogs folder */}

    </>

    return (

        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {links}

                    </ul>
                </div>

                <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>

    );
};

export default Navbar;

// ---------------------End:40_9-(1) to (13) --------------------------------