import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayers/VideoPlayer'

const App = () => {
  const [playState, setPlayerState] = useState(false);
  return (
    <div>
    <Navbar />
    <Hero />
    <div className="container">
    <Title  subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs />
        <About setPlayerState={setPlayerState}/>
        <Title  subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title  subTitle='TESTIMONIAL' title='What Student Says'/>
        <Testimonials />
        <Title  subTitle='Contact US' title='Get in Touch'/>
        <Contact />
        <Footer />
    </div>
    <VideoPlayer playState={playState} setPlayerState={setPlayerState}/>
    </div>
  )
}

export default App
