import Image from 'next/image'
import React from 'react'

const RecentPostItem = ({photo, title, date}) => {
  return (
    <div className='flex items-center gap-4'>
        <Image src={photo} width={80} height={80} alt='recentPost'/>
        <div>
            <h4 className="text-black text-sm font-normal mb-1 w-40">{title}</h4>
            <p className="text-[#9F9F9F] text-xs font-normal">{date}</p>
        </div>
    </div>
  )
}

export default RecentPostItem