import React from 'react'
import "./Home.css"
import Footer from './Footer'
import MainFooter from './MainFooter'

const Home = () => {
  return (
   
<section className='home'>

    <div className='home-content'>
    <h1> Hi, I'm Shamandeep Kaur</h1>
    <h3>Frontend Developer</h3>
    <p>Passionate and dedicated ReactJS developer with a strong desire to learn and grow, eagerly seeking opportunities to contribute my skills and drive innovation in the field.</p>
    <div className='btn-box'>
       <a href='https://drive.google.com/file/d/1dhMRwTqQLyRdUZO0rSgXJKrTav8_cX39/view?usp=sharing' target='_blank'>My Resume</a>
       <a href='https://www.linkedin.com/in/shamandeep-kaur-9b1476164/' target='_blank'>Contact</a>
    </div>
  
    </div>
    
</section>




  )
}

export default Home