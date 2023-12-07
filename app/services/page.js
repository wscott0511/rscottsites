import styles from './page.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'
import Image from 'next/image'
import CodingImage from './webdev-image'
import AccessibilityImage from './accessibility-image'

export default function Sevices() {
    return (
        <main className={styles.main}>
        <div className={styles.header}>
            <Navbar />
        </div>
        <div className={styles.body}>
            <h1 className={styles.title}>Services</h1>
            <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                    <div className={styles.services}>
                        <h3 className={styles.subtitle}>Building Websites</h3>
                
                        <p className={styles.cap}>What's included</p>
                
                        <ul className={styles.list}>
                            <li>Accessibility</li>
                            <li>Design</li>
                            <li>Development</li>
                        </ul>
                
                        <div className={styles.image}>
                        <CodingImage />
                        </div>
                    </div>
                </li>

                <li className={styles.serviceItem}>
                    <div className={styles.services}>
                        <h3 className={styles.subtitle}>Accessibility Consulting</h3>

                        <p className={styles.cap}>What's included</p>

                        <ul className={styles.list}>
                            <li>Accessibility Audit</li>
                            <li>Accessibility Training</li>
                            <li>Accessibility Testing</li>
                        </ul>
                        <AccessibilityImage />
                    </div>
                </li>
            </ul>
        </div>

        <div className={styles.contact}>
            <h4>
                For more information on prices and services, please <Link className={styles.contactLink} href="/contact">contact me</Link></h4>
        </div>

        </main>
    )
}