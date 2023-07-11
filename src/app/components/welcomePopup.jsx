import React from "react";
import styles from './welcomePopup.module.css';

export default function WelcomePopup() {
    return (
            <div className=''>
                <h1 className={styles.title}>Welcome to <br/>The Halls Whisper MURDER!</h1>
                <p className={styles.paraPopUp}>This is a single player, murder mystery game where you play as "The Detective" and try to solve the murder of Dr.Warwick. When you arrive to His mansion for the dinner party, all you know is he is dead and everyone there is a suspect! <b>YOU</b> have to solve the mystery before the time runs out!</p>
                <p className={styles.paraPopUp}>WHO?! WHERE?! HOW?!</p>
                <br/>
                <p className={styles.paraPopUp}>This is where the game gets <i>spicy!</i></p>
                <p className={styles.paraPopUp}>Each game will be different. With 10 Suspects, 7 Rooms, and 15 Weapons! there are over <b>1000</b> different stories to solve!</p>
            </div>
    );
}