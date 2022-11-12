import React from 'react'
import './about.css'
import {TiTick} from 'react-icons/ti'

const About = () => {
  return (
    <section id='about'>
      <h5>About us</h5>
      <h2>What is TechSavvyCA</h2>

      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TiTick className='about__icon'/>
              <h5>It's a webapp</h5>
              <small>designed as a dashboard</small>
            </article>

            <article className='about__card'>
              <TiTick className='about__icon'/>
              <h5>It displays the tech-stack</h5>
              <small>used by CAs around the world</small>
            </article>

            <article className='about__card'>
              <TiTick className='about__icon'/>
              <h5>It's an attempt</h5>
              <small>to bring CAs together digitally on a single platform</small>
            </article>
          </div>

          <p>
            TechSavvyCA is an attempt to highlight to the CA community around the world about how technology is helping the profession become more efficient and effective. Here we list out the various softwares and tech stacks used by CA firms across the globe.
          </p>
          <p>
            We at TechSavvyCA believe that technlogy has been leveraged by CAs all over the globe to make the profession stay at par with the changing world. We are aggregating all the tech-usage by CAs on a single platform.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

