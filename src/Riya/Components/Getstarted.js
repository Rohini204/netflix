import React from 'react'
import Navbar from './Navbar'
import '../Styles/Getstarted.css'

const Getstarted = () => {
  return (
    <div className='getstarted container'>
      <Navbar/>
      <div className='ig'>

        <div className='inside'>
        <h1 className='heading'>Unlimited movies, TV shows and more</h1>
        <div>Watch anywhere. Cancel anytime.</div><br/><br />
        <div>Ready to watch? Enter your email to create or restart your membership.</div>
        <form action='Subscription'>

        <div className='inside1'>
          <input type="email" placeholder="Email address" required/>

          <button type="submit"><h2 className='heading'>
            Get Started
            </h2></button>
            
            
        </div>
        </form>
        </div>
      </div>
        
    </div>
  )
}

export default Getstarted