import Navbar from '../components/navbar';
import MyImage from '../images/profileImage';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function About() {

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Navbar />
            </div>
            <div className={styles.body}>
                <h1 classname={styles.hero}>About</h1>
                <MyImage />
                <h2 classname={styles.title}>Ryan</h2>
                <p className={styles.description}>I am a software engineer and accessibility engineer. I am experienced in React and Next.js. I have extense experience in cypress and seleinum testing. I excel in user experience and making sure that websites work great and everyones experience is nice and smooth.</p>

                <h1 className={styles.title}>Software Engineer</h1>
                <p className={styles.description}>As a software engineer I am experienced in React and Next.js. I have extense experience in cypress and seleinum testing. I excel in user experience and making sure that websites work great and everyones experience is nice and smooth.</p>

                <h1 className={styles.title}>Accessibility Engineer</h1>
                <p className={styles.description}>As an accessibility engineer I am experienced in making sure that websites are accessible to everyone. I work in solving accessibility issue for all different types of disabilities whether it be visual, cognitive, or other impairments.</p>
                <p className={styles.description}>
                <Link className={styles.learnMore} href={'/whyaccessibility'}>Learn more about why accessibility is important</Link>
                </p>
            </div>
        </main>
    )
}