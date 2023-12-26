
import './hero.scss'
const Hero = () => {
    const linkUrl = 'https://calendly.com/aliumairkhan/30min';

    return(
    <div className='hero'>
        <h1 className='hero__h1'>I engage with people in web Development and Design.</h1>
        <h2 className='hero__h2'>I am available for inquiries regarding robust & clean web design and development.</h2>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer"><button className='hero__btn'>Book a free discovery call.</button></a>
    </div>
    )
}

export default Hero