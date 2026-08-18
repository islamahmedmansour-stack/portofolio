import React from 'react'

export default function Skills() {
  return (
    <div>
      <p className='mt-4'>MY SPECIALTY</p>
      <h2 className='mb-5'>MY SKILLS</h2>
      <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
      <div className='row'>
        <div className='col-6 p-3'>
          <p className='mt-3' >Photoshop</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '75%', backgroundColor: '#2C98F0' }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
          {/* ------------------------------------------- */}
          <p className='mt-3' >HTML5</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '85%' , backgroundColor: '#F9BF3F' }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
          {/* ------------------------------------------- */}
          <p className='mt-3' >WordPress</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '70%' , backgroundColor: '#2FA499' }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
          {/* ------------------------------------------- */}

        </div>
        <div className='col-6 p-3'>
          <p className='mt-3' >jQuery</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '60%' , backgroundColor: '#EC5453' }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
          {/* ------------------------------------------- */}
          <p className='mt-3' >CSS3</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '90%' , backgroundColor: '#A84CB8' }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
          {/* ------------------------------------------- */}
          <p className='mt-3' >SEO</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '80%' , backgroundColor: '#4054B2' }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
          {/* ------------------------------------------- */}

        </div>
      </div>
    </div>
  )
}
