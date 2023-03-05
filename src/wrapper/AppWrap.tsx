import React from 'react'
// import {NavigationDots, SocialMedia} from '../components'
import NavigationDots from '../components/NavigationDots'
import SocialMedia from '../components/SocialMedia'

const AppWrap = (Components:any, idName:any, classNames:any) =>function HOC() {
  return (

            <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Components />

        <div className="copyright">
          <p className="p-text"> &copy; PuzzledBird</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>

  )
}

export default AppWrap;