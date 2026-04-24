// // -------------------------------Start: 40_4 ---------------------------------------
// // (13)st

// import Link from 'next/link';
// import React from 'react';
// // (15)st from AI 
// const blogs = [
//     {
//         id: 1,
//         title: "Getting Started with React",
//         author: "John Doe",
//         date: "2026-04-01",
//         category: "Programming",
//         description: "A beginner-friendly guide to understanding the basics of React, components, and JSX.",
//         image: "https://example.com/images/react.jpg"
//     },
//     {
//         id: 2,
//         title: "Mastering Tailwind CSS",
//         author: "Jane Smith",
//         date: "2026-03-28",
//         category: "Web Design",
//         description: "Learn how to build modern, responsive layouts بسرعة using Tailwind CSS utility classes.",
//         image: "https://example.com/images/tailwind.jpg"
//     },
//     {
//         id: 3,
//         title: "JavaScript ES6 Features Explained",
//         author: "Michael Lee",
//         date: "2026-03-20",
//         category: "Programming",
//         description: "Explore important ES6 features like arrow functions, destructuring, and modules.",
//         image: "https://example.com/images/js.jpg"
//     },
//     {
//         id: 4,
//         title: "How to Deploy a React App",
//         author: "Emily Clark",
//         date: "2026-03-15",
//         category: "Deployment",
//         description: "Step-by-step guide to deploying your React app on GitHub Pages and other platforms.",
//         image: "https://example.com/images/deploy.jpg"
//     }
// ];
// // (15)en

// const BlogsPage = () => {
//     return (
//         <div>
//             <h2 className="text-3xl font-bold mb-4">Blogs</h2>
//             {/* (16)st */}
//             {
//                 blogs.map(blog => <div key={blog.id}>
//                     <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>
//                    <Link href="/">Show details</Link>
//                     </div>)
//             }
//             {/* (16)en then (start: 40_5) create page.jsx file creating [blogId] folder in blogs folder*/}
//         </div>
//     );
// };

// export default BlogsPage;
// // (13)en then in Navbar.jsx file

// // ---------------------End:40_4-(1) to (13) --------------------------------
// // -------------------------------Start: 40_5 ---------------------------------------

// import Link from 'next/link';
// import React from 'react';

// const blogs = [
//     {
//         id: 1,
//         title: "Getting Started with React",
//         author: "John Doe",
//         date: "2026-04-01",
//         category: "Programming",
//         description: "A beginner-friendly guide to understanding the basics of React, components, and JSX.",
//         image: "https://example.com/images/react.jpg"
//     },
//     {
//         id: 2,
//         title: "Mastering Tailwind CSS",
//         author: "Jane Smith",
//         date: "2026-03-28",
//         category: "Web Design",
//         description: "Learn how to build modern, responsive layouts بسرعة using Tailwind CSS utility classes.",
//         image: "https://example.com/images/tailwind.jpg"
//     },
//     {
//         id: 3,
//         title: "JavaScript ES6 Features Explained",
//         author: "Michael Lee",
//         date: "2026-03-20",
//         category: "Programming",
//         description: "Explore important ES6 features like arrow functions, destructuring, and modules.",
//         image: "https://example.com/images/js.jpg"
//     },
//     {
//         id: 4,
//         title: "How to Deploy a React App",
//         author: "Emily Clark",
//         date: "2026-03-15",
//         category: "Deployment",
//         description: "Step-by-step guide to deploying your React app on GitHub Pages and other platforms.",
//         image: "https://example.com/images/deploy.jpg"
//     }
// ];


// const BlogsPage = () => {
//     return (
//         <div>
//             <h2 className="text-3xl font-bold mb-4">Blogs</h2>

//             {
//                 blogs.map(blog => <div key={blog.id}>
//                     <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>
//                    {/* <Link href="/">Show details</Link> */}
//                     {/* (9)commit previous then (start: 40_6) create page.jsx file creating dashboard folder in app folder*/}
//                    <Link href={`/blogs/${blog.id}`}>Show details</Link>
//                     </div>)
//             }

//         </div>
//     );
// };

// export default BlogsPage;

// // ---------------------End:40_5-(1) to (13) --------------------------------
// -------------------------------Start: 40_10 ---------------------------------------

import Link from 'next/link';
import React from 'react';

// (1)st
import { Poppins, Roboto, Rum_Raisin } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})
// (1)en

// (3)st
const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
})
// (3)en

const blogs = [
    {
        id: 1,
        title: "Getting Started with React",
        author: "John Doe",
        date: "2026-04-01",
        category: "Programming",
        description: "A beginner-friendly guide to understanding the basics of React, components, and JSX.",
        image: "https://example.com/images/react.jpg"
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS",
        author: "Jane Smith",
        date: "2026-03-28",
        category: "Web Design",
        description: "Learn how to build modern, responsive layouts بسرعة using Tailwind CSS utility classes.",
        image: "https://example.com/images/tailwind.jpg"
    },
    {
        id: 3,
        title: "JavaScript ES6 Features Explained",
        author: "Michael Lee",
        date: "2026-03-20",
        category: "Programming",
        description: "Explore important ES6 features like arrow functions, destructuring, and modules.",
        image: "https://example.com/images/js.jpg"
    },
    {
        id: 4,
        title: "How to Deploy a React App",
        author: "Emily Clark",
        date: "2026-03-15",
        category: "Deployment",
        description: "Step-by-step guide to deploying your React app on GitHub Pages and other platforms.",
        image: "https://example.com/images/deploy.jpg"
    }
];


const BlogsPage = () => {
    return (
        // (2)className={roboto.className}
        // <div className={roboto.className}>
        // (4)commit previous
        <div className={poppins.className}>
            <h2 className="text-3xl font-bold mb-4">Blogs</h2>

            {
                blogs.map(blog => <div key={blog.id}>
                    <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>

                    <Link href={`/blogs/${blog.id}`}>Show details</Link>
                </div>)
            }

        </div>
    );
};

export default BlogsPage;

// ---------------------End:40_10-(1) to (13) --------------------------------