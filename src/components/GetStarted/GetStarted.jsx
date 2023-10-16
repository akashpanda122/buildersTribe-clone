import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Partner with us</span>
                <span className="secondaryText">
                    Are you a Chain devrel, infra provider, protocol, service provider, influencer &
                    <br />
                    want to work with our startups?
                </span>
                <button className="button">
                    <a href="mailto:aakipandap@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted