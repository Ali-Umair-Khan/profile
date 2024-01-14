'use client'
import {useInView} from 'framer-motion';

import React, { useState, useEffect, useRef } from 'react';
import './imageSlider.scss'; // Create a CSS file for styling

const ImageSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'desk/desk1.png',
    'desk/desk12.png',
    'desk/desk4.png',
    'desk/desk5.png',
    'desk/desk6.png',
    'desk/desk7.png',
    'desk/desk8.png',
    'desk/desk9.png',
    'desk/desk10.png',
    'desk/desk13.png'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index, and loop back to 0 if it exceeds the number of desk
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [currentImageIndex, images.length]);

  return (
    <div 
    ref={ref}
          style={{
//         //   height: "100vh",
          background: isInView ? "black" : "white",
          // color: isInView ? 'black' : 'gray',
          transition: "10s background",
          }}
    className="image__slider">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: '90vw', height: '90vh' }} />
    </div>
  );
}

export default ImageSlider


////
// 'use client'
// import {motion,useInView} from 'framer-motion';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faPlus,faMinus,faWindowMinimize,faBars
// } from "@fortawesome/free-solid-svg-icons";
// import {faqData} from './data';
// import {useState,useRef} from 'react';
// import './faq.scss'
// const FaqComponent = () =>{
//     const ref = useRef(null);
//     const isInView = useInView(ref);
//     const [faqs,setFaqs]=useState(faqData);
//     // console.log(faqs);
//     const faqQues = (i) => {
//             const updatedFaqs = [...faqData];
//             updatedFaqs[i].isOpen = !updatedFaqs[i].isOpen;
//             setFaqs(updatedFaqs);
//     }
//     return(
//         <div 
//           ref={ref}
//           style={{
//         //   height: "100vh",
//           background: isInView ? "white" : "blue",
//           color: isInView ? 'black' : 'gray',
//           transition: "10s background, 5s color",
//           }}
//           className='faq'
//         >
//         <h1 className='faq__h1'>Frequently asked questions</h1>
//             {faqs.map((f,i)=>(
//                 <div key={i} className='hero__faqs'>
//                     {/* <h1>{f.question}<span style={{fontSize:'2rem', padding:'0 1rem', margin:'1rem 1rem -2rem 1rem', display:'inlineBlock'}} onClick={(i)=>opener(i)}><FontAwesomeIcon icon={faPlus} /></span></h1> */}
//                     {/* {f.isOpen ? <h1>{f.answer}</h1> : ''} */}
//                     <div onClick={()=>faqQues(i)}>
//                         <h1 className='hero__faqs-question'>{f.question} </h1> 
//                         {/* {f.isOpen ? <span className='hero__faqs-span'><FontAwesomeIcon icon={faWindowMinimize}/></span> : <span className='hero__faqs-span'><FontAwesomeIcon icon={faBars}/></span>} */}
//                     </div>
//                     {f.isOpen && <h1 className='hero__faqs-answer' onClick={()=>faqQues(i)}>{f.answer}</h1>}
//                 </div>
//             ))
//         }
//         </div>
//     )
// }

// export default FaqComponent