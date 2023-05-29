import Styles from '../Styles/AppNavbar.module.css';

function AppNavbar() {
    return(
        <>
            <section className={Styles.NavLinks}>
                <a href="/" className={Styles.Link}>Home</a>
                <a href="/resume" className={Styles.Link}>Resume</a>
                <a href="/projects" className={Styles.Link}>Projects</a>
                <a href="/education" className={Styles.Link}>Education</a>
            </section>
        </>
    )
}

export default AppNavbar;