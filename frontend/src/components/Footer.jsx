import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-slate-500 h-[1px] w-11/12 mt-10 m-auto'></div>
        <div className="h-[150px] w-full text-gray-600 font-bold text-xl flex items-center justify-center space-x-16">
          <div className='flex gap-2 flex-row-reverse hover:text-2xl duration-150 ease-in-out'>
              <img src="github.svg" alt="" className='h-6 flex justify-center items-center'/>
              <a href="https://github.com/TriparnoXd">Github</a>
          </div>
          <div className='flex gap-2 flex-row-reverse hover:text-2xl duration-150 ease-in-out'>
              <img src="linkedin.svg" alt="" />
              <a href="https://www.linkedin.com/in/triparno-das-616bb830b/">Linkedin</a>
              </div>
          <div className='flex gap-2 flex-row-reverse hover:text-2xl duration-150 ease-in-out'>
            <img src="instagram.svg" alt="" className='h-6 flex justify-center items-center'/>
            <a href="https://www.instagram.com/ig_acoustically/">Instagram</a>
          </div>
          <div className='hover:text-2xl duration-150 ease-in-out'>
            <a href="https://bhagavadgitaapi.in/">BhagwadGita Api</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
