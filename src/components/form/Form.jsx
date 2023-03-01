import React from 'react';
import './form.css';
import { AnimatePresence, motion } from 'framer-motion';

import pattern from '../../assets/Assets/Pattern.png';
import avatar from '../../assets/Assets/UserAvatar.svg';
import { isVisible } from '@testing-library/user-event/dist/utils/misc/isVisible';

const Form = () => {
  return (
    <AnimatePresence>
      {isVisible && (
      <motion.div 
      className='card__form'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      exit={{ opacity: 0 }}>
          <div className='header__form'>
            <img src={pattern} className='pattern' alt='' />
            <p className='title'>Creating email templates has never been easier.</p>
          </div>
          <div className='bottom__form'>
              <p className='child__text'>Receiver daily emails on how to best create email templates, completely free.</p>
              <div className='input__form'>
                <input type="text" placeholder='Email Address' />
                <motion.button
                  whileHover={{scale: 1.1}}
                  whileTap={{scale:0.9}}
                  onClick={() => null}
                >Subscribe
                </motion.button>
              </div>
              <p className='child__text2'>No spam, ever. Unsubscribe anytime.</p>
              <br />
              <br />
              <div className='people__respond'>
                <img src={avatar} alt="" />
                <div className='nickname__text'>
                  <p className='avatar__name'>Andrew Vickins</p>
                  <p className='job__name'>Newsletter Designer</p>
                </div>
                <p className='quote__text'>"By far one of the best Newsletter
                  i've ever subscribed to. It is sent biweeekly
                  and i'm always looking forward to their emails."</p>
              </div>
          </div>
      </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Form