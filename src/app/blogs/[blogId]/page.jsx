// -------------------------------Start: 40_5 ---------------------------------------
// (1)st
import React from 'react';
// (5)st from page.jsx from blogs folder 
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
// (5)en


// const BlogDetailPage = () => {
    // // (2)st commit previous
    // const BlogDetailPage = ({params}) => {
    //     console.log('show me params', params);
    // // (2)en

    // // (3)st commit (2)
    // const BlogDetailPage = async({params}) => {
    //     const res = await params;
    //     console.log('show me params', res);
    // // (3)en

    // (4)st commit (3)
    const BlogDetailPage = async({params}) => {
        const {blogId} = await params;
        // (6)
        const blog = blogs.find(blog => blog.id === parseInt(blogId));
        // console.log('show me params', blogId);
        // (7)
        console.log('show me params', blog);
    // (4)en
    return (
        <div>
            <h4 className="text-3xl">Blog detail coming soon</h4>
            {/* (8)st */}
            {blog && <div>
                <h2 className ="text-4xl font-bold mb-2">{blog.title}</h2>
                <p>{blog.description}</p>
                <p>{blog.date}</p>
            </div>
            }
            {/* (8)en then page.jsx file in blogs folder */}
        </div>
    );
};

export default BlogDetailPage;
// (1)en
// ---------------------End:40_5-(1) to (13) --------------------------------