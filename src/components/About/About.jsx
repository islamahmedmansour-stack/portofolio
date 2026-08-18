import React from 'react'
import './about.css'
export default function About() {
  return (
    <div>
      <p className='mt-4'>ABOUT US</p>
      <h2 className='mb-5'>WHO AM I?</h2>
      <p>Hi Im Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country. </p>
      <p className='mt-4'> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. </p>
      <div className='row'>
        <div className='col-3 p-2'>
            <div className='about_part rounded-2 p-4' style={{borderBottom:'5px solid #2CA5F4'}}>
              <i className="fa-regular fa-lightbulb fa-3x " style={{color:'#2CA5F4' }}></i>
              <h4 className='mt-4'>Graphic Design</h4>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='about_part rounded-2 p-4' style={{borderBottom:'5px solid #EC5453'}}>
                <i className="fa-solid fa-earth-africa fa-3x" style={{color:'#EC5453' }}></i>
                <h4 className='mt-4'>Web Design</h4>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='about_part rounded-2 p-4' style={{borderBottom:'5px solid #F9BF3F'}}>
            <i className="fa-solid fa-database fa-3x" style={{color:'#F9BF3F' }}></i>
            <h4 className='mt-4'>Software</h4>
            </div>
        </div>
        <div className='col-3 p-2'>
            <div className='about_part rounded-2 p-4' style={{borderBottom:'5px solid #A84CB8'}}>
            <i className="fa-solid fa-mobile-screen fa-3x"style={{color:'#A84CB8' }}></i>
            <h4 className='mt-4'>Application</h4>
            </div>
        </div>
        
      </div>
    </div>
  )
}
