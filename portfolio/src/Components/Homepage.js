import Styles from '../Styles/Homepage.module.css';
import React, { useEffect, useRef, useState } from 'react';
import HomepageHeader from './HomepageSections/HomepageHeader';
import AboutMe from './HomepageSections/AboutMe';
import Skills from './HomepageSections/Skills';
import Experience from './HomepageSections/Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import AngledLeft from './SubComponents/AngledLeft.js';
import AngledRight from './SubComponents/AngledRight.js';

function Homepage({title = ""}) {

    useEffect(() => {
        document.title = title || "";
    }, [title])
    
    const topButtonRef = useRef();
    const [backgroundColor, setBackgroundColor] = useState('white');

    const scrollToView = (e) => {
        const element = document.getElementById(`${e.target.value}`)
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }

    const scrollToTop = () => {
        const element = document.getElementById('top');
        element.scrollIntoView({
            behavior: 'instant'
        });
    }

    useEffect(() => {
        let button = topButtonRef.current
        let app = document.getElementById("App");
        let navbar = document.getElementById("NavBar");
        let links = navbar.children;

        app.addEventListener(('scroll'), () => {
            let scrollTop = app.scrollTop;
            let pageHeight = (scrollTop / (window.innerHeight)) * 100

            if(pageHeight < 5) {
                button.style.display = 'none';
            }
            else {
                button.style.display = 'initial';
            }
            
            // Button to go to top breakpoints
            if(pageHeight >= 5 && pageHeight < 116) {
                setBackgroundColor('white');
            }
            else if(pageHeight >= 116 && pageHeight < 277 ) {
                setBackgroundColor('black');
            }
            else if(pageHeight >= 277) {
                setBackgroundColor('white');
            }

            // Navbar breakpoints

            if (pageHeight < 93) {
                navbar.style.backgroundColor = '#D7DBDF';
                for(let link of links) {
                    link.style.color = '#3366bb';
                    link.onmouseover = function() {this.style.color = "white"};
                    link.onmouseout = function() {this.style.color = "#3366bb"};
                }
            }
            else if (pageHeight >= 93 && pageHeight < 215) {
                navbar.style.backgroundColor = 'black';
                for(let link of links) {
                    link.style.color = 'white';
                    link.onmouseover = function() {this.style.color = "#3366bb"};
                    link.onmouseout = function() {this.style.color = "white"};
                }
            }
            else if (pageHeight >= 215 && pageHeight < 368) {
                navbar.style.backgroundColor = '#D7DBDF';
                for(let link of links) {
                    link.style.color = '#3366bb';
                    link.onmouseover = function() {this.style.color = "white"};
                    link.onmouseout = function() {this.style.color = "#3366bb"};
                }
            }
            else if ( pageHeight >= 368) {
                navbar.style.backgroundColor = 'black';
                for(let link of links) {
                    link.style.color = 'white';
                    link.onmouseover = function() {this.style.color = "#3366bb"};
                    link.onmouseout = function() {this.style.color = "white"};
                }
            }
        })

        return () => {
            app.removeEventListener(('scroll'), null);
        }
    }, [backgroundColor])
    
    return(
        <div id="top" className={Styles.Container}> 
            <HomepageHeader scroll={scrollToView} />

            <AngledRight top="100%"/>
            <AboutMe scrollIdentifier="AboutMe" style={Styles.AboutMe}/>

            <AngledLeft top="200%"/>
            <Skills scrollIdentifier="Skills" style={Styles.Skills} />

            <AngledRight top="372.5%"/>
            <Experience scrollIdentifier="Experiences" style={Styles.Experience}/>

            <button ref={topButtonRef} className={backgroundColor === 'white' ? `${Styles.TopButton} ${Styles.White}` : `${Styles.TopButton} ${Styles.Black}`} onClick={() => scrollToTop()}>
                <FontAwesomeIcon icon={faChevronUp} className={Styles.TopButtonIcon}/>
            </button>
        </div>
    )
}

export default Homepage;
