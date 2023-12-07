import NavLink from './navigationlink';
import Logo from '../logo/logo';
import Image from 'next/image';
import Styles from './navbar.module.css';

export default function Navbar() {

    return (
        <div className={Styles.navBar}>
            <div className={Styles.left}>
                <Logo className={Styles.logo} />
            </div>
            <div className={Styles.right}>
                <ul className={Styles.nav}>
                    <NavLink href="/" children="Home" />
                    <NavLink href="/about" children="About" />
                    <NavLink href="/services" children="Services" />
                    <NavLink href="/whyaccessibility" children="Why Accesssibility" />
                    <NavLink href="/contact" children="Contact" />
                </ul>
            </div>
        </div>
    )
}