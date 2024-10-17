import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='section' id='home'>
    <div className='container mx-auto'>
      <div>
        {/* text */}
        <div>
          <h1>
            BERA <span>Auda Beta</span>
          </h1>
          <div>
            <span>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Analyst',
              2000,
            ]} />
          </div>
        </div>
        {/* image */}
        <div>
          <img src={Image} alt='' />
        </div>
        
      </div>
    </div>
  </section>;
};

export default Banner;
