import React from 'react'
import './Services.css'
import Services_data from '../../assets/services_data'
import { FaArrowRight } from 'react-icons/fa';
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services <hr /></h1>
            <img src="" alt="" />
        </div>
      <div className="services-container">
        {Services_data.map((service,index)=>{
            return <div key={index} className='services-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='services-readmore'>
                    <p>Read more </p>
                   <p className='arrow'> <FaArrowRight/></p>
                
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
