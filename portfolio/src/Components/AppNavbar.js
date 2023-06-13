import { isMobile, isPortraitMode } from '../Exports';
import Styles from '../Styles/AppNavbar.module.css';

function AppNavbar() {
    return(
        <section id="NavBar" className={(window.location.pathname === ("/") && isMobile() && isPortraitMode()) ? Styles.HomepageNavLinks : Styles.NavLinks}>
            <a href="/" className={(window.location.pathname === ("/") && isMobile() && isPortraitMode()) ? Styles.HomepageLink : Styles.Link}>Home</a>
            <a href="/resume" className={Styles.Link}>Resume</a>
            <a href="/projects" className={Styles.Link}>Projects</a>
            <a href="mailto:jordansukhnyc@gmail.com" className={Styles.Link}>Contact</a>
        </section>
    )
}

export default AppNavbar;