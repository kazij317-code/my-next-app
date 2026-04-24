// -------------------------------Start: 40_6 ---------------------------------------
// (3)st
import Link from 'next/link';
import React from 'react';

// const DashboardLayout = () => {
// (4)commit previous
const DashboardLayout = ({ children }) => {
    return (
        // <div>
        //     <p>Common parts of the dashboard</p>
        //     {/* (5)st */}
        //     <main>
        //         {children}
        //     </main>
        //     {/* (5)en then create page.jsx file creating Revenue folder in dashboard folder*/}
        // </div>
        // (8)st commit <div> and copy from daisyUi:Responsive: Sidebar is always visible on large screen, can be toggled on small screen
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                {/* (9) */}
                {children}
                <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {/* <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li> */}
                    
                    {/* (10)st commit previous */}
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/dashboard/revenue">Revenue</Link></li>
                    <li><Link href="/dashboard/profile">Profile</Link></li>
                    {/* (10)en then (start: 40_7) create page.jsx file creating users folder in app folder */}
                </ul>
            </div>
        </div>

        // (8)en
    );
};

export default DashboardLayout;

// (3)en

// ---------------------End:40_6-(1) to (13) --------------------------------
