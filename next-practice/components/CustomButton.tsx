"use client";
import { customButtonProps } from '@/types';
import image from 'next/image';

const CustomButton = ({title,containerStyles,handleClick}: customButtonProps) => {
  return (
    <button disabled={false}
         type = {'button'}
          className={`custom-btn ${containerStyles}`}
          onClick={handleClick}
    
    >
        <span className='flex-1'>
          {title}
        </span>
    </button>
  )
}

export default CustomButton