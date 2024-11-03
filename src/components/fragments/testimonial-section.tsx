import React, { useEffect, useState } from 'react'

const TestimonialSection: React.FC = () => {
  const [testimoni, setTestimoni] = useState([])

  useEffect(() => {
    // const allTestimoni = await fetch('/api/testimoni')
    // setTestimoni(allTestimoni)
  }, [])

  return (
    <>
      <section id='testimonial-section' className='mb-32'>
        <div className='max-w-screen-xl w-full h-full flex flex-wrap mx-auto bg-pr800 rounded-3xl text-white'>
          <div className='w-3/5 flex flex-col justify-around p-12'>
            <div className=''>
              <img src="images/icon/5-star.png" alt="" />
            </div>
            <p className='text-4xl'>“Beasiswa Bank Indonesia ngebantu banget kuliah saya! Lewat GenBI, saya dapet banyak pengalaman seru.”</p>
            <div className='flex'>
              <img className='w-12 h-auto mr-6' src="images/unej-logo.png" alt="" />
              <div className=''>
                <h4 className='font-semibold text-xl'>- Rizki Dwi Putra</h4>
                <h6>Penerima Beasiswa Bank Indonesia Universitas Jember</h6>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <ul className='flex'>
                <li className='w-3 h-3 bg-pr300 mr-2 rounded-full'></li>
                <li className='w-3 h-3 bg-white mr-2 rounded-full'></li>
                <li className='w-3 h-3 bg-white rounded-full'></li>
              </ul>
              <div className='flex'>
                <img className='mr-4' src="images/icon/arrow-left.png" alt="" />
                <img src="images/icon/arrow-right.png" alt="" />
              </div>
            </div>
          </div>
          <div className='w-2/5'>
            <img className='w-full rounded-r-3xl' src="/images/testi-image.png" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialSection