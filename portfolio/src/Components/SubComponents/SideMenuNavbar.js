import Styles from '../../Styles/SideMenuNavbar.module.css';
import Animations from '../../Styles/Animations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function SideMenuNavbar({links = [], style, page}) {

    const [collapsed, setCollapsed] = useState(true);
    const [currentPage, setCurrentPage] = useState(links[0]);

    const handleCollapse = () => {
        setCurrentPage(page);
        setCollapsed((prev) => (!prev));
    };
   
    const navigate = (e) => {
        let pageID = e.target.getAttribute("value");
        setCurrentPage(pageID);
        let page = document.getElementById(pageID);
        page.scrollIntoView({
            behavior: 'smooth'
        })
        setCollapsed((prev) => (!prev))
    };

    return(
        <>
        <FontAwesomeIcon icon={faBars} className={ collapsed ? `${Styles.MenuButton} ${style}` : `${Styles.Collapsed}`} onClick={handleCollapse}/>
        <aside className={ collapsed ? `${Styles.Collapsed}` : `${Styles.Container} ${Animations.UnCollapse}`}>
            <header className={Styles.HeaderBlock}>
                <h2 className={Styles.Title}>{currentPage}</h2>
                <FontAwesomeIcon icon={faXmark} className={Styles.CloseButton} onClick={handleCollapse}/>
            </header>
            <section className={Styles.LinksContainer}>
                {
                    links.map((linkName, index) => {
                        let name = linkName.replace(/([a-z])([A-Z])/, '$1 $2');
                        return(
                            // eslint-disable-next-line
                            <a value={linkName} className={Styles.NavLink} onClick={(e) => navigate(e)} key={index}>{name}</a>
                        )
                    })
                }
            </section>
        </aside>
        </>
    )
};