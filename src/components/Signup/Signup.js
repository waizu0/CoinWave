import React from 'react'
import './SignupStyles.css'

import Window from '../../assets/laptop.png'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Window} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                <h2>Generate passive income through cryptocurrency investments.</h2>
                    <p>Digital assets have revolutionized the way we invest and grow our wealth. Explore the world of digital assets and earn annual rewards of up to 12% on a diverse range of over 30 cryptos.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Read More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup