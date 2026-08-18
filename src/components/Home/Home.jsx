import React from 'react'
import homeOne from '../../assets/home1.jpg'
import homeTwo from '../../assets/home2.jpg'

export default function Home() {
  return (
    <div style={{height:'100vh'}}>
      <div id="carouselExampleSlidesOnly" className="carousel slide vh-100" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative overflow-hidden">
            <img className="d-block w-100 vh-100" src={homeOne} alt="First slide" />
            <div  className="position-absolute text-dark"
              style={{ top: '200px', left: '100px' , zIndex: 10 }}>
                 <h2 style={{ fontSize:80}}> Hi! <br /> Im Jackson</h2>
                 <p>100% html5 bootstrap templates Made <br /> By <a href="#">Colorlib.com</a> </p>
                 <button className='mt-3 p-2'>  DOWNLOAD CV </button>
            </div>
           
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 vh-100" src={homeTwo} alt="Second slide" />
               <div  className="position-absolute text-dark"
              style={{ top: '200px', left: '100px' , zIndex: 10 }}>
                 <h2 style={{ fontSize:80}}> I am <br />a Designer</h2>
                 <p>100% html5 bootstrap templates Made <br /> By <a href="#">Colorlib.com</a> </p>
                 <button className='mt-3 p-2'>  VIEW PORTFOLIO </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
