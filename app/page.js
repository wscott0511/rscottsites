import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Navbar />
      </div>
      <div className={styles.body}>
        <h1 className={styles.title}>Ryan Scott</h1>
        <p className={styles.description}><Link className={styles.learnMore}href={'/about'}>Learn more about me</Link></p>
        
        <h2 className={styles.title}>Services</h2>
        <ul className={styles.serviceList}>
          <li className={styles.serviceItem}>
            <h3><Link className={styles.learnMore} href={'/services'}>Web Developement</Link></h3>
            <ul className={styles.sublist}>
              <li>I will create a beautiful and accessible website for you.</li>
            </ul>
          </li>
          <li className={styles.serviceItem}>
            <h3><Link className={styles.learnMore} href={'/services'}>Accessibility Consulting</Link></h3>
            <ul className={styles.sublist}>
              <li>I will test your current website for accessibility compliance based off of <a className={styles.learnMore} href='https://www.w3.org/TR/WCAG22/'>WCAG 2.2</a> accessibility standards.</li>
            </ul>
            </li>
        </ul>
      </div>
    </main>
  )
}
