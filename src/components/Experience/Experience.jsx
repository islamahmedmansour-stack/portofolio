import React from 'react'
import './exxperience.css'
export default function Experience() {
  return (
    <div>
      <p className='mt-4'>EXPERIENCE</p>
      <h2 className='mb-5'>WORK EXPERIENCE</h2>
      <section className='d-flex mb-3'>
        <div className='pen d-flex justify-content-center align-items-center me-4' style={{backgroundColor:'#2C98F0'}}><i className="fa-solid fa-pen fa-2x text-white"></i></div>
        <div className='p-2' style={{backgroundColor : '#F2F3E1'}}>
          <h3>Full Stack Developer <span className='exp_date'>2017-2018</span></h3>
          <p className='mt-3'>
            Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.
          </p>
        </div>
      </section>
      <section className='d-flex mb-3 bg-grey'>
        <div className='pen d-flex justify-content-center align-items-center me-4' style={{backgroundColor:'#D9534F'}} ><i className="fa-solid fa-pen fa-2x text-white"></i></div>
        <div className='p-2' style={{backgroundColor : '#F2F3E1'}}>
          <h3>Front End Developer at Google Company <span className='exp_date'>2017-2018</span></h3>
          <p className='mt-3'>
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>
      </section>
      <section className='d-flex'>
        <div className='pen d-flex justify-content-center align-items-center me-4'style={{backgroundColor:'#F0AD4E'}}><i className="fa-solid fa-pen fa-2x text-white"></i></div>
        <div className='p-2' style={{backgroundColor : '#F2F3E1'}}>
          <h3>System Analyst <span className='exp_date'>2017-2018</span></h3>
          <p className='mt-3'>
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
        </div>
      </section>
    </div>
  )
}
