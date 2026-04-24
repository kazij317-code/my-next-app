// // -------------------------------Start: 40_7 ---------------------------------------
// // (1)st
// import Link from 'next/link';
// import React from 'react';

// // const UsersPage = () => {
// // (2)st commit previous
// const UsersPage = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');//from json place holder
//     const users = await res.json();
//     // (2)en

//     return (
//         <div>
//             <h2>Users are coming here</h2>
//             {/* (3)st from daisyUi: Card with custom color */}
//             {/* (5)className="grid grid-cols-3 gap-4" */}
//             <div className="grid grid-cols-3 gap-4">
//                 {
//                     users.map(user =>
//                         // <div key={user.id} className="card bg-primary text-primary-content w-96">
//                             // (4)commit previous
//                         <div key={user.id} className="card bg-primary text-primary-content">
//                             <div className="card-body">
//                                 {/* <h2 className="card-title">Card title!</h2> */}
//                                 {/* (6)commit previous and then create page.jsx file creating [userId] folder in users folder*/}
//                                 <h2 className="card-title">{user.name}</h2>

//                                 <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//                                 <div className="card-actions justify-end">
//                                     {/* <button className="btn">Buy Now</button> */}
//                                     {/* (11)st commit previous */}
//                                     <Link href={`/users/${user.id}`}>
//                                         <button className="btn">Show Info </button>
//                                     </Link>
//                                     {/* (11)en then in Navbar */}
//                                 </div>
//                             </div>
//                         </div>)
//                 }
//             </div>
//             {/* (3)en */}
//         </div>
//     );
// };

// export default UsersPage;
// // (1)en
// // ---------------------End:40_7-(1) to (13) --------------------------------
// -------------------------------Start: 40_9 ---------------------------------------
import Link from 'next/link';
import React from 'react';
// // (1)st
// export const metadata = {
//   title: 'My Blog',
//   description: '...',
// }
// // (1)en
// (2)st
export const metadata = {
  title: 'All Users',
  description: 'all the users information',
}
// (2)en then in page.jsx file in dashboard

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');//from json place holder
    const users = await res.json();

    return (
        <div>
            <h2>Users are coming here</h2>

            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user =>

                        <div key={user.id} className="card bg-primary text-primary-content">
                            <div className="card-body">

                                <h2 className="card-title">{user.name}</h2>

                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">

                                    <Link href={`/users/${user.id}`}>
                                        <button className="btn">Show Info </button>
                                    </Link>

                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default UsersPage;

// ---------------------End:40_9-(1) to (13) --------------------------------
