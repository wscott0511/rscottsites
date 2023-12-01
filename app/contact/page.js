import Navbar from "../components/navbar";
import styles from "../contact/page.module.css";

export default function Contact() {

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Navbar />
            </div>
            <div className={styles.body}>    
                <h1>Contact</h1>
            </div>
        </main>
        )
}