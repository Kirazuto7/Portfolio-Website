import Styles from '../Styles/Homepage.module.css';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import HomepageHeader from './HomepageSections/HomepageHeader';
import AboutMe from './HomepageSections/AboutMe';
import Skills from './HomepageSections/Skills';
import Experience from './HomepageSections/Experience';
import SideDotNavbar from './SubComponents/SideDotNavbar';
import SideMenuNavbar from './SubComponents/SideMenuNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { isMobile, homepagePages as pages } from '../Exports';

function Homepage({title = ""}) {
    const topButtonRef = useRef();
    const headerRef = useRef(null);
    const aboutMeRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);

    const [backgroundColor, setBackgroundColor] = useState('white');
    const [menuBackgroundColor, setMenuBackgroundColor] = useState(true);
    const [currentPage, setCurrentPage] = useState(pages[0]);
    const [slideLeftExperience, setSlideLeftExperience] = useState(false);
    const [slideRightExperience, setSlideRightExperience] = useState(false);
    const [slideLeftExperience2, setSlideLeftExperience2] = useState(false);
    const [showAboutMe, setShowAboutMe] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [sideNavBreakpoint1, setSideNavBreakpoint1] = useState(0);
    const [sideNavBreakpoint2, setSideNavBreakpoint2] = useState(0);
    const [sideNavBreakpoint3, setSideNavBreakpoint3] = useState(0);
    const [scrollPage, setScrollPage] = useState(0);

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

        const handleScroll = () => {
            requestAnimationFrame(() => {
                let aboutMe = aboutMeRef.current.getBoundingClientRect();
                let skills = skillsRef.current.getBoundingClientRect();
                let experience = experienceRef.current.getBoundingClientRect();
                let aboutMeTop = aboutMe.top;
                let skillsTop = skills.top;
                let experienceTop = experience.top;

                let scrollTop = app.scrollTop;
                let scrollBottom = scrollTop + windowHeight;

                let breakPoint0 = windowHeight + 400;
                let breakPoint1 = document.getElementById("HomeBreakpoint1").getBoundingClientRect().top + scrollTop;
                let breakPoint2 = document.getElementById("HomeBreakpoint2").getBoundingClientRect().bottom + scrollTop;
                let breakPoint3 = document.getElementById("HomeBreakpoint3").getBoundingClientRect().top + scrollTop;
                
                let aboutMeBreakpoint = aboutMeTop + scrollTop;
                let skillsBreakpoint = skillsTop + scrollTop;
                let experienceBreakpoint = experienceTop + scrollTop;

                setScrollPage(() => (scrollBottom - windowHeight/2))
                setSideNavBreakpoint1(() => (breakPoint1))
                setSideNavBreakpoint2(() => (breakPoint2 - 100))
                setSideNavBreakpoint3(() => (breakPoint3))

                if(scrollBottom < breakPoint0) {
                    button.style.display = 'none';
                }
                else {
                    button.style.display = 'initial';
                }

                // TopButton breakpoints
                if(scrollBottom >= breakPoint0 && scrollBottom < breakPoint2 - 50) {
                    setBackgroundColor('white');
                }
                else if(scrollBottom >= breakPoint2 - 50 && scrollBottom < breakPoint3 + 115 ) {
                    setBackgroundColor('black');
                }
                else if( scrollBottom >= breakPoint3 + 115) {
                    setBackgroundColor('white');
                }
            
                // Navbar breakpoints
                if (scrollTop < breakPoint1 + 50) {
                    setMenuBackgroundColor(true);
                    setCurrentPage(pages[0]);
                    navbar.style.backgroundColor = '#D7DBDF';
                    for(let link of links) {
                        link.style.color = '#3366bb';
                        link.onmouseover = function() {this.style.color = "white"};
                        link.onmouseout = function() {this.style.color = "#3366bb"};
                    }
                }
                else if (scrollTop >= breakPoint1 + 50 && scrollTop < breakPoint2 - 60) {
                    setMenuBackgroundColor(false);
                    setCurrentPage(pages[1]);
                    navbar.style.backgroundColor = 'black';
                    for(let link of links) {
                        link.style.color = 'white';
                        link.onmouseover = function() {this.style.color = "#3366bb"};
                        link.onmouseout = function() {this.style.color = "white"};
                    }
                }
                else if (scrollTop >= breakPoint2 - 60 && scrollTop < breakPoint3 + 60) {
                    setMenuBackgroundColor(true);
                    setCurrentPage(pages[2]);
                    navbar.style.backgroundColor = '#D7DBDF';
                    for(let link of links) {
                        link.style.color = '#3366bb';
                        link.onmouseover = function() {this.style.color = "white"};
                        link.onmouseout = function() {this.style.color = "#3366bb"};
                    }
                }
                else if ( scrollTop >= breakPoint3 + 50) {
                    setMenuBackgroundColor(false);
                    setCurrentPage(pages[3]);
                    navbar.style.backgroundColor = 'black';
                    for(let link of links) {
                        link.style.color = 'white';
                        link.onmouseover = function() {this.style.color = "#3366bb"};
                        link.onmouseout = function() {this.style.color = "white"};
                    }
                }
                
                // AboutMe FadeIn
                if(scrollTop >= aboutMeBreakpoint/2.5 && scrollTop < skillsBreakpoint) {
                    setShowAboutMe(true);
                }
                else if (scrollTop >= skillsBreakpoint + 150 || scrollTop < 30) {
                    setShowAboutMe(false);
                }
               
                // Skills FadeIn
                if(scrollTop >= skillsBreakpoint/2.5 && scrollTop < experienceBreakpoint) {
                    setShowSkills(true);
                }
                else if(scrollTop >= experienceBreakpoint || scrollTop < aboutMeBreakpoint - 100) {
                    setShowSkills(false);
                }
                // Experience Slide
                if(scrollTop >= experienceBreakpoint - 200) {
                    setSlideLeftExperience(true);
                }

                if(scrollTop >= experienceBreakpoint) {
                    setSlideRightExperience(true);
                }

                if(scrollTop >= experienceBreakpoint + 100) {
                    setSlideLeftExperience2(true);
                }

                if(scrollTop <= experienceBreakpoint - 800) {
                    setSlideLeftExperience(false);
                    setSlideRightExperience(false);
                    setSlideLeftExperience2(false);
                }

            })
        }

        app.addEventListener(('scroll'), handleScroll)

        return () => {
            app.removeEventListener(('scroll'), handleScroll);
        }
    }, [backgroundColor, windowHeight])

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
            {   isMobile() ?
                <SideMenuNavbar links={pages} style={ menuBackgroundColor ? Styles.MenuNavbar : Styles.MenuNavbar2} page={currentPage}/>
                :
                <SideDotNavbar links={pages} breakpoints={[sideNavBreakpoint1, sideNavBreakpoint2, sideNavBreakpoint3]} scroll={scrollPage}/> 
            }
            <HomepageHeader headerRef={headerRef} scroll={scrollToView}/>       
            
            <AboutMe aboutMeRef={aboutMeRef} scrollIdentifier="AboutMe" style={Styles.AboutMe} animate={showAboutMe}/>

            <Skills skillsRef={skillsRef} scrollIdentifier="Skills" style={Styles.Skills} animate={showSkills}/>

            <Experience experienceRef={experienceRef} scrollIdentifier="Experiences" style={Styles.Experience} slideLeft={slideLeftExperience} slideRight={slideRightExperience} slideLeft2={slideLeftExperience2}/>

            <button ref={topButtonRef} className={backgroundColor === 'white' ? `${Styles.TopButton} ${Styles.White}` : `${Styles.TopButton} ${Styles.Black}`} onClick={() => scrollToTop()}>
                <FontAwesomeIcon icon={faChevronUp} className={Styles.TopButtonIcon}/>
            </button>
        </div>
    )
}

export default Homepage;
