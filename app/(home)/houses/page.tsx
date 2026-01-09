import React from 'react'
import { FaPlus, FaRecycle } from 'react-icons/fa'

export const metadata = {
    title: 'Houses',
    description: 'Houses',
}

function page() {
  return (
    <div className='flex-1 bg-amber-50 min-h-screen flex flex-row items-center justify-center'>
      {/* House UI */}
      <div className='max-w-100 relative flex-1 flex h-screen bg-blue-500 flex-col justify-start items-center background-image-container'>
        <div className='w-full h-fit flex flex-row justify-between px-4 mt-6'>
          <div className='flex flex-row gap-x-2 text-helvetica items-center'>
            <FaRecycle color='white' size={24} />
            <h2 className='text-[20px] text-sans font-light text-white'>
              CoStarGroups
            </h2>
          </div>
          <div className='flex flex-row gap-x-2 text-helvetica items-center'>
            <p className='text-[14px] font-light text-white'>
              Add Data
            </p>
            <FaPlus color='white' size={14} />
          </div>
        </div>

        <div className='w-[90%] h-80 mt-14 bg-blue-500 flex flex-col items-center justify-start rounded-[20px] px-4 sub-comp-background-image'>
          <div className='w-full pt-8 flex flex-col items-center justify-center gap-y-1'>
            <h2 className='text-white font-light text-[20px]'>
              Dune Dweller House
            </h2>
            <p className='text-white font-extralight text-[11px] w-[70%] text-center'>Home of the Dune Dweller, Desert district, Saudi Arabia</p>
          </div>
        </div>

        {/* bottom section */}
        <div className='w-full h-90 absolute bottom-0 bottom-comp-gradient'>
          
        </div>
      </div>
    </div>
  )
}

export default page