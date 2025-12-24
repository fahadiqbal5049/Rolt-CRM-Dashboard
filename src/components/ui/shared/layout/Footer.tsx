import React from 'react'

const Footer:React.FC = () => {
  return (
    <div className='w-full gap-5 flex md:px-5 px-4 border-t-[1px] border-[#3F3F464D] justify-between items-center min-h-[60px]'>
         <img src="/logo.png" className='w-[46px] h-[28px]' alt="" />
        <p className='text-[12px] text-neutral-50 font-medium'> 2025 Company Name. Privacy Policy • Terms of Use</p>
    </div>
  )
}

export default Footer