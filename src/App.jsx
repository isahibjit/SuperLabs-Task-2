import React from 'react'
import Navbar from './Components/Navbar'
import CornerPopupBtn from './Components/CornerPopupBtn'
import Hero from './Components/Hero'
import VideoSection from './Components/VideoSection'
import RedBanner from './Components/RedBanner'
import Footer from './Components/Footer'
import SlideTabs from './Components/SlideTabs'
import UpperNav from './Components/UpperNav'
import SuccessSlider from './Components/SuccessSlider'
import FooterBanner from './Components/FooterBanner'

const App = () => {
  return (
    <div className=''>
      <UpperNav />
      <Navbar />
      <CornerPopupBtn />
      <Hero />

      <section>
        <VideoSection />
        <RedBanner />
      </section>
      <section>
        <SlideTabs />
      </section>
      <section>
        <SuccessSlider />
      </section>
      
        <FooterBanner />
      <Footer />
    </div>
  )
}

export default App