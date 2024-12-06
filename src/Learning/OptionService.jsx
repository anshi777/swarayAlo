import React from 'react'
import OptionCard from './optionCard'
import tricks from './tricks.png'

const OptionService = () => {
  return (
    <section class='bg-gradient-to-r from-purple-800 to-indigo-800 pb-[300px] py-16'>
        <div class='max-w-7xl max-auto px-4 sm:px-6 lg:px-8'>
            <div class='text-center'>
                <h1 class='text-3xl font-extraBold text-white'> OI Analysis </h1>
                <p class=' mt04 text-xl text-gray-300'> In-depth analysis of Open Interest to gauge market sentiment."</p>

            </div>
<div class='mt-12 grid grid-cols cols md:grid-cols-2 lg:grid-cols-3'>
    <OptionCard title="OI Analysis" text="In-depth analysis of Open Interest to gauge market sentiment" image={tricks}/>
    <OptionCard title="OI Analysis" text="In-depth analysis of Open Interest to gauge market sentiment" image={tricks}/>
    <OptionCard title="OI Analysis" text="In-depth analysis of Open Interest to gauge market sentiment" image={tricks}/>
</div>
        </div>

    </section>
  )
}

export default OptionService
