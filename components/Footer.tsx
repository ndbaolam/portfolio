import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { AnimatedTooltip } from './ui/Tooltip'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>      
      <div className='flex flex-col items-center'>
        <div className="flex flex-row items-center justify-center gap-20 w-full">
          <AnimatedTooltip items={socialMedia}/>   
        </div>           
        <a href="mailto:baolam782004@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow/>}
            position='right'
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer