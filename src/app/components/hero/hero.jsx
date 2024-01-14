'use client'
import {motion, useInView as useInViewFM} from 'framer-motion';
import { useInView as useInViewRIO } from 'react-intersection-observer';
import {useRef,useState,useEffect} from 'react';
import { useSpring, animated } from 'react-spring';



import './hero.scss'
const Hero = () => {
    // const [blur, setBlur] = useState(false);
    const refFM = useRef(null);
    const isInViewFM = useInViewFM(refFM);
    const linkUrl = 'https://calendly.com/aliumairkhan/30min';

    // const textRef = useRef(null);
//     useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) {
//             // Text is leaving or has left the screen
//             setBlur(true);
//           } else {
//             // Text is back on the screen
//             setBlur(false);
//           }
//         });
//       },
//       { threshold: 0.4 } // Adjust the threshold as needed
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     // Cleanup the observer when the component unmounts
//     return () => observer.disconnect();
//   }, [ref]);

  const [ refh1, inViewh1] = useInViewRIO({
    /* Optional options */
    threshold: 0.5,
    // "initialInView": true,
    rootMargin: '-100px 50px', // Adjust as needed
  });

  const [refh2, inViewh2] = useInViewRIO({
    /* Optional options */
    threshold: 0.7,
    // "initialInView": true,
    rootMargin: '-70px 0px', // Adjust as needed
  });

  const [ refbtn, inViewbtn] = useInViewRIO({
    /* Optional options */
    threshold: 0.8,
    // "initialInView": true,
    rootMargin: '-100px 0px', // Adjust as needed

  });

  console.log('inViewh1:', inViewh1);
  console.log('inViewh2:', inViewh2);
  console.log('inViewbtn:', inViewbtn);

  const blurAnimationh1 = useSpring({
    filter: inViewh1 ? 'blur(0px)' : 'blur(1px)', // Adjust the blur amount
  });

  const blurAnimationh2 = useSpring({
    filter: inViewh2 ? 'blur(0px)' : 'blur(1px)', // Adjust the blur amount
  });

  const blurAnimationbtn = useSpring({
    filter: inViewbtn ? 'blur(0px)' : 'blur(1px)', // Adjust the blur amount
  });

  
    
    
    return(
    <div
        //   initial={{ background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0) 60%)' }}
        //   animate={{ background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0) 60%)' }}
        //   transition={{ duration: 10 }} 
          ref={refFM}
          style={{
          //   height: "100vh",
          background: isInViewFM ? 'black' : 'darkgray',          //   color: inpm run devsInView ? 'white' : 'black',
          transition: "10s background",
          }}
          className='hero'
    >
      <animated.h1 ref={refh1} className='hero__h1' style={blurAnimationh1}>
        I engage with people in web Development and Design.
      </animated.h1>
        {/* <h1 ref={refh1} className={`hero__h1 ${!inViewh1 ? 'blurred' : ''}`} style={{filter: !inViewh1 ? 'blur(5px)' : 'none'}}>I engage with people in web Development and Design.</h1> */}
      <animated.h2 ref={refh2} className='hero__h2' style={blurAnimationh2}>
        I am available for inquiries regarding robust & clean web design and development.      
      </animated.h2>
        {/* <h2 ref={refh2} className={`hero__h2 ${!inViewh2 ? 'blurred' : ''}`} style={{filter: !inViewh2 ? 'blur(5px)' : 'none'}}>I am available for inquiries regarding robust & clean web design and development.</h2> */}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer"><animated.button ref={refbtn} className='hero__btn' style={blurAnimationbtn}>Book a free discovery call.</animated.button></a>
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

// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import { useInView } from 'react-intersection-observer';

// const Hero = () => {
//   const [refh1, inViewh1] = useInView({
//     threshold: 0.8,
//   });

//   const [refh2, inViewh2] = useInView({
//     threshold: 0.8,
//   });

//   const [refbtn, inViewbtn] = useInView({
//     threshold: 0.8,
//   });

//   const blurAnimation = useSpring({
//     filter: inViewh1 ? 'blur(0px)' : 'blur(5px)', // Adjust the blur amount
//   });

//   return (
//     <div className='hero'>
//       <animated.h1 ref={refh1} className={`hero__h1`} style={blurAnimation}>
//         I engage with people in web Development and Design.
//       </animated.h1>
//       <animated.h2 ref={refh2} className={`hero__h2`} style={blurAnimation}>
//         I am available for inquiries regarding robust & clean web design and development.
//       </animated.h2>
//       <a href='https://calendly.com/aliumairkhan/30min' target='_blank' rel='noopener noreferrer'>
//         <animated.button ref={refbtn} className={`hero__btn`} style={blurAnimation}>
//           Book a free discovery call.
//         </animated.button>
//       </a>
//     </div>
//   );
// };

// export default Hero;
