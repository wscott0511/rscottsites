import Navbar from '../components/navbar';
import styles from './page.module.css';

export default function About() {

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Navbar />
            </div>
            <div className={styles.body}>
                <h1>About</h1>
                <p>This is the about page</p>
            </div>
        </main>
    )
}