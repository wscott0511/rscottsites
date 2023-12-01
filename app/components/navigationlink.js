import Link from 'next/link';
import Styles from './navigationlink.module.css';

export default function NavigationLink({ href, children }) {
    
    return (
        <li className={Styles.navItem}>
            <Link href={href} className={Styles.navLink}>
                {children}
            </Link>
        </li>
    )
}