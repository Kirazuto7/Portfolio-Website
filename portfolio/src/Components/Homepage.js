import Styles from '../Styles/Homepage.module.css';
import React, { useRef } from 'react';
import HomepageHeader from './HomepageSections/HomepageHeader';
import AboutMe from './HomepageSections/AboutMe';
import Skills from './HomepageSections/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Homepage() {

    const aboutMeRef = useRef();
    const skillsRef = useRef();

    const aboutMeScroll = () => {
        const element = aboutMeRef.current;
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }

    const skillsScroll = () => {
        const element = skillsRef.current;
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }

    return(
        <div id="top" className={Styles.Container}> 
            <HomepageHeader aboutMeScroll={aboutMeScroll} skillsScroll={skillsScroll} />

            <div className={Styles.AngledRight}/>
            <div className={Styles.AboutMeScrollWrapper} ref={aboutMeRef}>
                <AboutMe style={Styles.AboutMe}/>
            </div>

            <div className={Styles.AngledLeft} />
            <div className={Styles.SkillsScrollWrapper} ref={skillsRef}>
                <Skills style={Styles.Skills} />
            </div>

            <button className={Styles.TopButton} onClick={() => {window.location.href = '#top'}}>
                <FontAwesomeIcon icon={faChevronUp} className={Styles.TopButtonIcon}/>
            </button>
        </div>
    )
}

export default Homepage;
