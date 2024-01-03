import {useInView} from 'framer-motion';
import {useRef} from 'react';

import './hero.scss'
const Hero = () => {
    
    const ref = useRef(null);
    const isInView = useInView(ref);

    const linkUrl = 'https://calendly.com/aliumairkhan/30min';

    return(
    <div 
          ref={ref}
          style={{
          //   height: "100vh",
          background: isInView ? "whitesmoke" : "aliceblue",
          //   color: isInView ? 'white' : 'black',
          transition: "10s background",
          }}
          className='hero'>
        <h1 className='hero__h1'>I engage with people in web Development and Design.</h1>
        <h2 className='hero__h2'>I am available for inquiries regarding robust & clean web design and development.</h2>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer"><button className='hero__btn'>Book a free discovery call.</button></a>
    </div>
    )
}

export default Hero

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