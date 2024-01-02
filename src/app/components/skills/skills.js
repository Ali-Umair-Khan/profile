import { motion, useInView } from "framer-motion";

import './skills.scss';

const Skills = () => {
    return(
        <motion.div  
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 5 }} 
            className='skills'
        >
            <h1 className='skills__h1'>
            &quot;Pixels are my playground. Specialized in the realms of web apps development, I thrive on crafting seamless digital experiences.&quot;
            </h1>
            <p className='skills__p'>Alongside, I have a knack for designing and building websites, turning concepts into captivating online realities.</p>
        </motion.div>
    )
}

export default Skills