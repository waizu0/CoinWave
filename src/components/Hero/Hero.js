import React from 'react'
import './HeroStyles.css'
import Phone from '../../assets/phone.png'


function Hero() {
  return (
    <div className='hero'>
        <div className="container">
            <div className="left">
                <p>Trade Cryptocurrency anytime with your retirement account</p>
                <h1>Use Your IRA to Invest in Digital Assets</h1>
                <p>Trade and Store a variety of Cryptocurrencies</p>
                <div className='input-container'>
                    <input type="email" placeholder='Enter your email address'/>
                    <button className='btn'>Read More</button>
                </div>
            </div>


            <div className="right">

                <div className="img-container">
                    <div className="circle"></div>
                    <img src={Phone} alt="/" />
                </div>

            </div>



        </div>
    </div>
  )
}

export default Hero