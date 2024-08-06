import React from 'react';
import styles from './GotQuestions.module.scss'

const GotQuenstions = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2 className={styles.textH2}>Got Questions?</h2>
                <p>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
                <a href="#" className={styles.consultationLink}>Schedule Consultation</a>
            </div>
            <div className={styles.right}>
                <ul>
                    <li>
                        <a href="tel:8773553585" className={styles.button}>(877) 355-3585</a>
                    </li>
                    <li>
                        <a href="#" className={styles.button}>Live Chat</a>
                    </li>
                    <li>
                        <a href="#" className={styles.button}>Contact Us</a>
                    </li>
                </ul>



            </div>
        </div>

    );
}

export default GotQuenstions;
