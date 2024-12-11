import React from 'react';

const ContactData = ({title, data, photo}) => {
  return (
    <div className="flex items-start gap-2">
        {photo}
        <div className='pt-0 flex flex-col'>
            <h5 className='text-black text-2xl font-medium'>{title}</h5>
            <p className='text-black text-base font-normal w-52'>{data}</p>
        </div>
    </div>
  )
}

export default ContactData;