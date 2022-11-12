import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/logo_compuoffice.png'
import IMG2 from '../../assets/logo_excel.png'
import IMG3 from '../../assets/logo_powerBI.png'
import IMG4 from '../../assets/logo_tableau.png'
import IMG5 from '../../assets/logo_winman.png'
import IMG6 from '../../assets/logo_adda.png'
import IMG7 from '../../assets/internal_software.png'
import IMG8 from '../../assets/logo_tallyERP9.png'
import IMG9 from '../../assets/logo_tallyPrime.png'
import IMG10 from '../../assets/logo_sap.png'
import IMG11 from '../../assets/logo_sagInfotech.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CompuTax',  
    detail:'CAs in India use CompuOffice software for end-to-end management of every stage of tax life cycle, from provision to estimates and extensions, returns, audit, amendment and planning'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Excel',
    detail:'Some of the CAs we talked to are using MS Excel for data analysis, preparing and analysing reports'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Power BI',
    detail:'CAs are using Power BI to prepare dashbaords, to make use of Data Visualisation, to prepare and analyse data with the help of charts etc.'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tableau',
    detail:'CAs are using Tableau to prepare dashbaords, to build inhouse capability, PNL dashboard with competition benchmarking'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Winman',
    detail:'Many CAs in India are using Winman software for Income Tax Returns and TDS Returns. Most of the CAs we spoke to use this technology for filing/ revising TDS Returns online'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Adda Software',
    detail:'CA firms use Adda software for housing society accounts. They use this technology for automating society accounting, billing, helpdesk etc'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Internally-built Software',
    detail: "Some CAs have built softwares from scratch for their firm's specific needs and requirements, for purposes such as staff management etc."
  },
  {
    id: 8,
    image: IMG8,
    title: 'Tally ERP',
    detail:'CAs around India are using Tally ERP for accounting of client businesses'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Tally Prime',
    detail: "CAs are making great use of Tally Prime by utilising it's business managemnet solutions and also for accounting"
  },
  {
    id: 10,
    image: IMG10,
    title: 'SAP',
    detail:'Using SAP for financials and accounting. CAs use SAP for automating diverse accounting tasks such as maintaining ledgers, balance sheets, and profit and loss statements etc.'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Genius Software (SAG Infotech)',
    detail:'A lot of CAs are using Genius, a software that assists in TDS Returns, Income Tax returns, Tax aduits of clients etc'
  }

]

const Portfolio = () => {
  return (
    <section id='dashboard'>
      <h5 className="text-light">Displaying various tech stacks used by CA firms</h5>
      <h2>The Dashboard</h2>

      <div className = "container portfolio__container">
        {
          data.map(({id, image, title, detail}) => {
            return (
              <article key={id} className = "portfolio__item">
                <div className = "portfolio__item-image">
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta tech_details">
                  <p>{detail}</p>
                </div>
              </article>
              )
            })
          }
      </div> 
    </section>
  )
}

export default Portfolio
