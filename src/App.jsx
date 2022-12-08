import React from 'react';
import styles from './style';
import NavBar from './components/NavBar.jsx';
import Billing from './components/Billing.jsx';
import Business from './components/Business.jsx';
import Button from './components/Button.jsx';
import CardDeal from './components/CardDeal.jsx';
import Clients from './components/Clients.jsx';
import CTA from './components/CTA.jsx';
import FeedBackCard from './components/FeedBackCard.jsx';
import Footer from './components/Footer.jsx';
import GetStarted from './components/GetStarted.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Testimonials from './components/Testimonials.jsx';



export const App = () => (
  <div className="bg-primary w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  <div className = {`${styles.boxWidth}`}>
    <NavBar/>
  </div>
  </div>

 


  <div className = {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className = {`${styles.boxWidth}`}>
    <Hero/>
    </div>
  </div>

  <div className = {`bg-primary ${styles.paddingX} ${styles.flexstart}}`}>
    <div className = {`${styles.boxWidth}` }>
    <Stats/>
     <Business/>
     <Billing/>  
     <CardDeal/>
     <Testimonials/>
     <Clients/>
     <CTA/>  
     <Footer/>    
 


      
    </div>
  </div>
  </div>
);



