import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <Navbar />
      </div>
      <div className={styles.description}>
        <h1 className={styles.title}>Rscott Sites Homepage</h1>
        
      </div>
    </main>
  )
}
