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
        <h1 className={styles.title}><Link href={'/about'}>Ryan Scott</Link></h1>
        {/* Add an image of me later */}
        {/* <Image className={styles.authorImage} src="/images/ryan.jpg" alt="Ryan Scott" width={200} height={200} /> */}
        <h1 className={styles.title}>Software Engineer</h1>
        <p className={styles.description}>As a software engineer I am experienced in React and Next.js. I have extense experience in cypress and seleinum testing. I excel in user experience and making sure that websites work great and everyones experience is nice and smooth.</p>
        <h1 className={styles.title}><Link href={'/whyaccessibility'}>Accessibility Engineer</Link></h1>
        <p className={styles.description}>As an accessibility engineer I am experienced in making sure that websites are accessible to everyone. I work in solving accessibility issue for all different types of disabilities whether it be visual, cognitive, or other impairments. </p>
      </div>
    </main>
  )
}
