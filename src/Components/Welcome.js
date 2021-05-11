import React from 'react'
import styles from './Styles/Welcome.module.css'

function Welcome() {
    return(
        <div className={styles.welcomeArea}>
            <div className={styles.bigWelcome}>
                <h1 className={styles.bigBigText}>Welcome</h1>
                <p className={styles.bigText}>OnKun is the simple kanji dictionary.
                <br /> Start by searching for kanji using the search bar.</p>
                <br />
            </div>

            <hr className={styles.welcomeHr}/>
            
            <div className={styles.smallWelcome}>
                <h3>What is OnKun?</h3>
                <p>OnKun is a dictionary for Japanese kanji characters. Kanji are the Chinese characters that are used in Japanese writing alongside hiragana and katakana.</p>
                <p>OnKun uses kanjiapi.dev, a fantastic api that provides kanji data for over 13,000 kanji.</p>
                <p><a className={styles.link} href="https://www.kanjiapi.dev">Click here to find out more about kanjiapi.dev</a></p>
                <br />
                <h3>Why the name "OnKun"?</h3>
                <p>Kanji characters can be tricky since there are usually at least two ways that each character can be read. These readings are split into "on-yomi" (based on how these characters would have sounded like in Chinese at the time they were adopted) and kun-yomi (based on the pronunciation of a native Japanese word which has a similar meaning to that character). </p>
                <p>The OnKun dictionary aims to display these kanji readings in a simple and clear way, with on-yomi readings on the left in black, and kun-yomi readings on the right in red.</p>
                <br />
                <h3>Who made OnKun?</h3>
                <p>OnKun was created by Daniel Parsons (that's me), a web developer living in Japan.</p>
                <p><a className={styles.link} href="https://www.danpdev.com">Click here to see my personal page.</a></p>
                <br />
            </div>
        </div>
    )
}

export default Welcome