import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Rscott Sites Homepage</h1>
        <p className={styles.text}>
          This is a template for Next.js + Tailwind CSS.
        </p>
      </div>
    </main>
  )
}
