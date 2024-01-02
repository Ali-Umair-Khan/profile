

import { motion, useInView } from "framer-motion";

import './tools.scss'
const Tools = () => {
    return(
        <motion.div
            // style={{ height: "100vh", background: "black" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5 }} 
            className='tools'
        >
            <h1 className='tools__left'>Tools I use!</h1>
            <div className='tools__right'>
                <h2>HTML & CSS & JS</h2>
                <h2>React & Next</h2>
                <h2>Git & GitHub</h2>
                <h2>Framer Motion & GSAP</h2>
                <h2>MongoDB & Express</h2>
            </div>
        </motion.div>
    )
}

export default Tools