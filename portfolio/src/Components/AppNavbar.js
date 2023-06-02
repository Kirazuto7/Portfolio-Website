import Styles from '../Styles/AppNavbar.module.css';

function AppNavbar() {
    return(
        <>
            <section className={Styles.NavLinks}>
                <a href="/Portfolio-Website/" className={Styles.Link}>Home</a>
                <a href="/Portfolio-Website/resume" className={Styles.Link}>Resume</a>
                <a href="/Portfolio-Website/projects" className={Styles.Link}>Projects</a>
                <a href="mailto:jordansukhnyc@gmail.com" className={Styles.Link}>Contact</a>
            </section>
        </>
    )
}

export default AppNavbar;