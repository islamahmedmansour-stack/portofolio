import React from 'react'
import workOne from '../../assets/work1.jpg'
import workTwo from '../../assets/work2.jpg'
import workThree from '../../assets/work3.jpg'
import workFour from '../../assets/work4.jpg'
import workFive from '../../assets/w5.jpg'
import worksix from '../../assets/work6.jpg'


export default function Work() {
  return (
    <div>
      <p className='mt-4'>MY WORK</p>
      <h2 className='mb-5'>RECENT WORK</h2>
      <h5 className='me-3 d-inline'>Graphic Design</h5>
      <h5 className='me-3 d-inline'>Apps</h5>
      <h5 className='me-3 d-inline'>Software</h5>
      <div className='row m-3'>
        <div className='col-6 p-2'>
          <div className='m-3' >
            <img className='w-100' src={workOne} alt="work one" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
          <div className='m-3'>
            <img className='w-100' src={workThree} alt="work three" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
          <div className='m-3'>
            <img className='w-100' src={workFive} alt="work five" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
        </div>
        <div className='col-6 p-2'>
          <div className='m-3'>
            <img className='w-100' src={workTwo} alt="work two" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
          <div className='m-3' >
            <img className='w-100' src={workFour} alt="work four" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
          <div className='m-3' >
            <img className='w-100' src={worksix} alt="work six" style={{ height: '400px', objectFit: 'cover' }} />
          </div>

        </div>
      </div>
    </div>
  )
}
