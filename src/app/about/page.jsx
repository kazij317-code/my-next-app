// create page.jsx file creating about folder in app folder
// // -------------------------------Start: 40_3 ---------------------------------------
// // (1)st
// // import React from 'react';
// // (2)commit previous. then create page.jsx file creating contact folder in app folder



// // rename to AboutPage
// const AboutPage = () => {
//     return (
//         <div>
//             <h2>This is About page</h2>
//         </div>
//     );
// };

// export default AboutPage;
// // (1)en 


// // ---------------------End:40_3-(1) to (13) --------------------------------
// -------------------------------Start: 40_8 ---------------------------------------
import Image from "next/image";
// (2-2)
import mithu from '../../assets/images/mithu.jpg'

const AboutPage = () => {
    return (
        <div>
            <h2>This is About page</h2>
            <div className="grid grid-cols-2">
                
                    {/* (6)st */}
                    <Image src="https://i.ibb.co/Xp3sL2h/1.png" alt="" width="500" height="300"></Image>
                    {/* (6)en then in nex.config.mjs file*/}
            

               
                    {/* (3)st */}
                    <Image src="https://images.unsplash.com/photo-1773394472792-a3a2f9a85d2e" alt="wooden table" width="500" height="300"></Image>
                    {/* (3)en then in next.config.mjs file*/}
               
                    {/* (1) st put one picture in public folder*/}
                    <Image src="/nabhan.jpeg" alt="nabhan pic" width="500" height="300"></Image>
                    {/* (1) en then put one picture creating images folder in creating assets folder in src folder*/}
                    {/* (2-1)st */}
                    <Image src={mithu} alt="mithu pic" width="500" height="300"></Image>
                    {/* (2-1)en */}
               
            </div>
        </div>

    );
};

export default AboutPage;

// ---------------------End:40_8-(1) to (13) --------------------------------