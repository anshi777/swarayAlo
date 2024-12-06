import React from 'react'
import trick from './tricks.png'

const OptionCard = ( {title,text,image}) => {
  return (
    <div class='rounded-lg shadow-sm planet-background-1 cursor-pointer p-6'>
      <div class=' flex item-center justify-center w-12 h-12 bg-indigo-500 rounded-md'>
<img src={trick} class='w-[60%] brightness-0 invert'></img>
      </div>
      <h3 class='mt-4 text-lg font-medium text-gray-900'>
{title}
      </h3>
      <p class='mt-2 text-sm text-gray-300'>{text}</p>
    </div>
  )
}

export default OptionCard
