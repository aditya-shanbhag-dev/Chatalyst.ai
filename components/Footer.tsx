import React from 'react'

export default function Footer() {
  return (
    <div className='max-w-7xl bottom-0 mt-auto mx-auto h-20 pt-10 pb-20'>
        <div className='text-center text-sm text-gray-500'>
            © {new Date().getFullYear()} Chatalyst.ai. All rights reserved.
        </div>
    </div>
  );
}
