import styles from './Screen.module.css'
import Typewriter from 'typewriter-effect';
import React from "react"

const Screen = function () {
    return (
        <div className={styles.screen}>
            <h1>
                <Typewriter
                    options={{
                        autoStart: true,
                        deleteSpeed: 20,
                        delay: 75,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Salut !<br/>')
                        .pauseFor(1000)
                        //.deleteChars(7)
                        .typeString("Yacine MAOUCHE<br/>")
                        .pauseFor(1000)
                        .typeString("Dev Web Full Stack<br/>")
                        .pauseFor(1000)
                        //.deleteChars(14)
                        .typeString("Css")
                        .pauseFor(1000)
                        //.deleteChars(3)
                        .typeString(", Javascript")
                        .pauseFor(1000)
                        //.deleteChars(10)
                        .typeString(", PHP")
                        .pauseFor(1000)
                        //.deleteChars(3)
                        .typeString(", React")
                        .start();
                    }}
                />
            </h1>
        </div>
    )
}

export default Screen