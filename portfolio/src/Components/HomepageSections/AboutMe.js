import Styles from '../../Styles/AboutMe.module.css';
import Animations from '../../Styles/Animations.module.css';
import { baseURL } from '../../Exports';
import { useEffect } from 'react';
import AngledRight from '../SubComponents/AngledRight';

function AboutMe({style, scrollIdentifier, animate = false, aboutMeRef}) {

    useEffect(() => {
        let title = document.getElementById("AboutMeTitle");
        let underline = document.getElementById("AboutMeSeparator");
        let { width } = title.getBoundingClientRect();
        underline.style.width = `${width}px`
    }, [])

    return(
        <section className={style}>
        <AngledRight angleID={"HomeBreakpoint1"} top="-60px"/>
        <div ref={aboutMeRef} id={scrollIdentifier} className={`${Styles.Container}`}>
            <h2 id="AboutMeTitle" className={Styles.Title}>About Me</h2>
            <div id="AboutMeSeparator" className={Styles.Separator}/>

            <section className={animate ? `${Styles.Body} ${Animations.FadeIn}` : `${Styles.Body} ${Styles.Hidden}`}>

                <div className={Styles.LeftSection}>  
                    <p className={Styles.Description}>
                    I am a Software Developer and recent graduate from Hunter College with a <b>3.9 GPA</b> Bachelor's Degree in Computer Science. 
                    I am passionate about app development for both web and mobile applications, but I am also open to other opportunities in Software Engineering. 
                    My experiences consist of, but are not limited to, creating full-stack applications written in Swift, Javascript, and Java utilizing databases such as Cloud Firestore, Back4App, CoreData, MySQL, and more.
                    <br/><br/>
                    Previously as an iOS Developer intern I practiced agile scrum meetings with team members, learned to analyze and debug code written by other developers, and collaborated with a designer to implement requested updates.
                    Furthermore, my work experience in retail has given me the experience to work on a team and develop key communication skills to effectively complete assignments and satisfy company demands.
                    <br/><br/>
                    Aside from programming, I also enjoy studying foreign languages, traveling, hiking, exploring restaurants, socializing, cooking, and exercising.
                    </p>
                </div>

                <div className={Styles.RightSection}>
                    <img loading="lazy" src={`${baseURL}/aboutme_photo.jpg`} className={Styles.Image} alt="selfie"/> 
                </div>

            </section>
        </div>
        </section>
    )
}

export default AboutMe;