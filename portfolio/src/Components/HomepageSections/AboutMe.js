import Styles from '../../Styles/AboutMe.module.css';

function AboutMe({style}) {
    return(
        <>
        <div className={`${Styles.Container} ${style}`}>
            <div className={Styles.Title}>About Me</div>
            <div className={Styles.Separator}/>

            <section className={Styles.Body}>

                <div className={Styles.LeftSection}>
                    <p className={Styles.Description}>
                        I am a Software Developer and recent graduate from Hunter College with a 3.9 GPA Bachelor's Degree in Computer Science. 
                        I am passionate about app development for both web and mobile applications, but I am also open to other opportunities in Software Engineering. 
                        My experiences consist of, but not limited to, creating full-stack applications written in Swift, Javascript (React), and Java utilizing databases such as Cloud Firestore, Back4App, CoreData, MySQL, and more.
                        <br/><br/>
                        Previously as an iOS Developer intern I practiced agile scrum meetings with team members, learned to analyze and debug code written by other developers, and collaborated with a designer to implement requested updates.
                        Furthermore, my work experience in retail has given me the experience to work on a team and develop key communication skills to effectively complete assignments and satisfy company demands.
                        <br/><br/>
                        Aside from programming, I also enjoy studying foreign languages, traveling, exploring new restaurants, socializing, cooking, and exercising.
                    </p>
                </div>

                <div className={Styles.RightSection}>
                    <img src="pictures/aboutme_photo.jpg" className={Styles.Image} alt="selfie"/> 
                </div>

            </section>
        </div>
        </>
    )
}

export default AboutMe;