import Styles from '../Styles/Homepage.module.css';
import React, { useEffect, useRef, useState } from 'react';
import HomepageHeader from './HomepageSections/HomepageHeader';
import AboutMe from './HomepageSections/AboutMe';
import Skills from './HomepageSections/Skills';
import Experience from './Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
    const topButtonRef = useRef();
    const [backgroundColor, setBackgroundColor] = useState('white');

    const scrollToView = (e) => {
        const element = document.getElementById(`${e.target.value}`)
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
            console.log(pageHeight)
            if(pageHeight < 5) {
                button.style.display = 'none';
            }
            else {
                button.style.display = 'initial';
            }

            if(pageHeight >= 5 && pageHeight < 116) {
                setBackgroundColor('white');

            }
            else if(pageHeight >= 116 && pageHeight < 277 ) {
                setBackgroundColor('black');
            }
            else if(pageHeight >= 277) {
                setBackgroundColor('white');
            }

        })

        return () => {
            app.removeEventListener(('scroll'), null);
        }
    }, [backgroundColor])

    return(
        <div id="top" className={Styles.Container}> 
            <HomepageHeader scroll={scrollToView} />

            <div className={Styles.AngledRight} style={{'top':'100%'}}/>
            <AboutMe scrollIdentifier="AboutMe" style={Styles.AboutMe}/>

            <div className={Styles.AngledLeft} style={{'top':'200%'}}/>
            <Skills scrollIdentifier="Skills" style={Styles.Skills} />

            <div className={Styles.AngledRight} style={{'top':'372.5%'}}/>
            <Experience scrollIdentifier="Experiences" style={Styles.Experience}/>

            <button ref={topButtonRef} className={backgroundColor === 'white' ? `${Styles.TopButton} ${Styles.White}` : `${Styles.TopButton} ${Styles.Black}`} onClick={() => {window.location.href = '#top'}}>
                <FontAwesomeIcon icon={faChevronUp} className={Styles.TopButtonIcon}/>
            </button>
        </div>
    )
}

export default Homepage;
