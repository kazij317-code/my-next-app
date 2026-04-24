// -------------------------------Start: 40_7 ---------------------------------------
// (7)st
import React from 'react';

// const UsersDetailPage = () => {
    // (8)st commit previous
    const UsersDetailPage = async({params}) => {
        const {userId} = await params;
        console.log('show me useId', userId)
        // (9)st
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user = await res.json();
        console.log('show me user', user);
        // (9)en
        
    // (8)en
    return (
        <div>
            {/* <h2>Users detail is coming</h2> */}
            {/* (10)st commit previous*/}
            <p>{user.email}</p>
            <p>{user.phone}</p>
            {/* (10)en then in page.jsx in users folder */}
        </div>
    );
};

export default UsersDetailPage;
// (7)en
// ---------------------End:40_7-(1) to (13) --------------------------------


