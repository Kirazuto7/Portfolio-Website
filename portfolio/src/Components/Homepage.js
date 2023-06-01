import Styles from '../Styles/Homepage.module.css';
import React, { useEffect, useRef, useState } from 'react';
import HomepageHeader from './HomepageSections/HomepageHeader';
import AboutMe from './HomepageSections/AboutMe';
import Skills from './HomepageSections/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
    const topButtonRef = useRef();
    const aboutMeRef = useRef();
    const skillsRef = useRef();
    const [backgroundColor, setBackgroundColor] = useState('white');

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

    useEffect(() => {
        let button = topButtonRef.current
        let app = document.getElementById("App")
        app.addEventListener(('scroll'), () => {
            let scrollTop = app.scrollTop;
            let pageHeight = (scrollTop / (window.innerHeight)) * 100
            //console.log(pageHeight)
            if(pageHeight < 5) {
                button.style.display = 'none';
            }
            else {
                button.style.display = 'initial';
            }

            if(pageHeight >= 5 && pageHeight < 116) {
                setBackgroundColor('white');

            }
            else if(pageHeight >= 116 ) {
                setBackgroundColor('black');
            }

        })

        return () => {
            app.removeEventListener(('scroll'), null);
        }
    }, [backgroundColor])

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

            <button ref={topButtonRef} className={backgroundColor === 'white' ? `${Styles.TopButton} ${Styles.White}` : `${Styles.TopButton} ${Styles.Black}`} onClick={() => {window.location.href = '#top'}}>
                <FontAwesomeIcon icon={faChevronUp} className={Styles.TopButtonIcon}/>
            </button>
        </div>
    )
}

export default Homepage;
