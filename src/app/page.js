'use client'

import WelcomePopup from './components/welcomePopup'
import styles from './page.module.css'
import { useState } from 'react'

const CloseWindow = () => {
  const popup = document.querySelector('.popup')
  popup.styles.opacity=0;
};

export default function Home() {

  const [showPopup, setShowPopup] = useState(true)

  const togglePopup = () => {
    setShowPopup(!showPopup)
    CloseWindow()
    console.log(showPopup)
  }

  return (
    <main className={styles.main}>
      <div className={styles.popup} showPopup>
      <WelcomePopup className={styles.text} />
      <div className={styles.startBtn} onClick={togglePopup}>Start</div>
      </div>
    </main>
  )
}
