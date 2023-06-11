import Styles from '../Styles/Homepage.module.css';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import HomepageHeader from './HomepageSections/HomepageHeader';
import AboutMe from './HomepageSections/AboutMe';
import Skills from './HomepageSections/Skills';
import Experience from './HomepageSections/Experience';
import SideDotNavbar from './SubComponents/SideDotNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import AngledLeft from './SubComponents/AngledLeft.js';
import AngledRight from './SubComponents/AngledRight.js';

function Homepage({title = ""}) {
    const pages = ["Header", "AboutMe", "Skills", "Experiences"]
    const topButtonRef = useRef();
    const headerRef = useRef(null);
    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);

    const [backgroundColor, setBackgroundColor] = useState('white');
    const [slideLeftExperience, setSlideLeftExperience] = useState(false);
    const [slideRightExperience, setSlideRightExperience] = useState(false);
    const [slideLeftExperience2, setSlideLeftExperience2] = useState(false);
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [aboutMePageTop, setAboutMePageTop] = useState(0);
    const [skillsPageTop, setSkillsPageTop] = useState(0);
    const [experiencePageTop, setExperiencePageTop] = useState(0);

    useEffect(() => {
        document.title = title || "";
    }, [title])

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
            let aboutMeTop = aboutMeRef.current.getBoundingClientRect().top;
            let skillsTop = skillsRef.current.getBoundingClientRect().top;
            let experienceTop = experienceRef.current.getBoundingClientRect().top;
            let aboutMeWindowBottom = aboutMeTop - windowHeight;
            let skillsWindowBottom = skillsTop - windowHeight;
            let experienceWindowBottom = experienceTop - windowHeight;
        
            setAboutMePageTop(() => (aboutMeTop))
            setSkillsPageTop(() => (skillsTop))
            setExperiencePageTop(() => (experienceTop))

            if(aboutMeWindowBottom > 0) {
                button.style.display = 'none';
            }
            else {
                button.style.display = 'initial';
            }
            
            // TopButton breakpoints
            if(aboutMeWindowBottom <= 0 && skillsWindowBottom > 0) {
                setBackgroundColor('white');
            }
            else if(skillsWindowBottom <= 0 && experienceWindowBottom > 0 ) {
                setBackgroundColor('black');
            }
            else if(experienceWindowBottom <= 0) {
                setBackgroundColor('white');
            }

            // Navbar breakpoints
            if (aboutMeTop > 0) {
                navbar.style.backgroundColor = '#D7DBDF';
                for(let link of links) {
                    link.style.color = '#3366bb';
                    link.onmouseover = function() {this.style.color = "white"};
                    link.onmouseout = function() {this.style.color = "#3366bb"};
                }
            }
            else if (aboutMeTop <= 0 && skillsTop > 0) {
                navbar.style.backgroundColor = 'black';
                for(let link of links) {
                    link.style.color = 'white';
                    link.onmouseover = function() {this.style.color = "#3366bb"};
                    link.onmouseout = function() {this.style.color = "white"};
                }
            }
            else if (skillsTop <= 0 && experienceTop > 0) {
                navbar.style.backgroundColor = '#D7DBDF';
                for(let link of links) {
                    link.style.color = '#3366bb';
                    link.onmouseover = function() {this.style.color = "white"};
                    link.onmouseout = function() {this.style.color = "#3366bb"};
                }
            }
            else if ( experienceTop <= 0) {
                navbar.style.backgroundColor = 'black';
                for(let link of links) {
                    link.style.color = 'white';
                    link.onmouseover = function() {this.style.color = "#3366bb"};
                    link.onmouseout = function() {this.style.color = "white"};
                }
            }
            // AboutMe FadeIn
            if(aboutMeWindowBottom >= 50) {
                setShowAboutMe(false);
            }
            else if(aboutMeWindowBottom <= -100 && aboutMeTop > -760) {
                setShowAboutMe(true);
            }
            else if(aboutMeTop <= -760) {
                setShowAboutMe(false);
            }

            // Skills FadeIn
            if(skillsWindowBottom >= 70) {
                setShowSkills(false)
            }
            else if(skillsWindowBottom <= -300 && skillsTop > -1090) {
                setShowSkills(true)
            }
            else if(skillsTop <= -1090) {
                setShowSkills(false)
            }

            // Experience Slide
            if(experienceWindowBottom > 100 && slideLeftExperience === true) {
                setSlideLeftExperience(false)
            }
            else if(experienceWindowBottom <= -290 && slideLeftExperience === false) {
                setSlideLeftExperience(true)
            }

            if(experienceWindowBottom > 100 && slideRightExperience === true) {
                setSlideRightExperience(false)
            }
            else if(experienceWindowBottom <= -610 && slideRightExperience === false) {
                setSlideRightExperience(true)
            }

            if(experienceWindowBottom > 100 && slideLeftExperience2 === true) {
                setSlideLeftExperience2(false)
            }
            else if(experienceWindowBottom <= -1050 && slideLeftExperience2 === false) {
                setSlideLeftExperience2(true)
            }
            
        })

        return () => {
            app.removeEventListener(('scroll'), null);
        }
    }, [backgroundColor, slideLeftExperience, slideRightExperience, slideLeftExperience2, windowHeight])

    useLayoutEffect(() => {
        const handleWindowResize = () => {
            setWindowHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [windowHeight])
    
    return(
        <div id="top" className={Styles.Container}>
            <SideDotNavbar links={pages} breakpoints={[aboutMePageTop, skillsPageTop, experiencePageTop]}/> 

            <HomepageHeader headerRef={headerRef} scroll={scrollToView}/>

            <AngledRight top="100%"/>
            <AboutMe aboutMeRef={aboutMeRef} scrollIdentifier="AboutMe" style={Styles.AboutMe} animate={showAboutMe}/>

            <AngledLeft top="200%"/>
            <Skills skillsRef={skillsRef} scrollIdentifier="Skills" style={Styles.Skills} animate={showSkills}/>

            <AngledRight top="372.5%"/>
            <Experience experienceRef={experienceRef} scrollIdentifier="Experiences" style={Styles.Experience} slideLeft={slideLeftExperience} slideRight={slideRightExperience} slideLeft2={slideLeftExperience2}/>

            <button ref={topButtonRef} className={backgroundColor === 'white' ? `${Styles.TopButton} ${Styles.White}` : `${Styles.TopButton} ${Styles.Black}`} onClick={() => scrollToTop()}>
                <FontAwesomeIcon icon={faChevronUp} className={Styles.TopButtonIcon}/>
            </button>
        </div>
    )
}

export default Homepage;
