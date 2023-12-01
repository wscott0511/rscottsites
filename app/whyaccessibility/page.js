import Navbar from "../components/navbar";
import styles from "../whyaccessibility/page.module.css";

export default function WhyAccessibility() {

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Navbar />
            </div>
            <div className={styles.body}>
                <h1>Why Accessibility?</h1>
                <p>Accessibility is a right, not a privilege. It is a right for all people to be able to access information, regardless of ability. This is why we must make our websites accessible.</p>
            </div>
        </main>
    )
}