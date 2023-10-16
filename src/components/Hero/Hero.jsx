import React from 'react'
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            
            {/* Left Side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                    <motion.h1
                        initial={{y: "2rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2,
                            type: "spring"
                        }}
                    >
                        #buiders, <br />
                        show progress <br /> get ecosystem support
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className="secondaryText">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </span>
                    <span className="secondaryText">
                        Duis aute irure dolor in reprehenderit in voluptate velit.
                    </span>
                </div>

                {/*<div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} />
                    <input type="text" />
                    <button className='button'>Search</button>
                </div>*/}
                <button className='button'>Register Now</button>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={300} end={395} duration={4} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">
                            Investors
                        </span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1300} end={1395} duration={4} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">
                            Startups
                        </span>
                    </div>

                    {/*<div className="flexColCenter stat">
                        <span>
                            <CountUp end={28} />
                            <span>+</span>
                        </span>
                        <span className="secondaryText">
                            Award Winnings
                        </span>
                    </div>*/}
                </div>
            </div>

            {/* Right Side */}
            <div className="flexCenter hero-right">
                <motion.div
                    initial={{x: "7rem", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }} 
                    className="image-container"
                >
                    <img src="./hero-image.png" alt="" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero