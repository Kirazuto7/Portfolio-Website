import Styles from '../../Styles/Resume.module.css';

function ResumeRelevantExperience() {
    return(
        <section className={Styles.Section}>
            <h2 className={Styles.SectionLabel}>RELEVANT EXPERIENCE</h2>
            <div className={Styles.SubSections}>

                <div className={Styles.WorkSectionContainer}>
                <img className={Styles.WorkImage} src={"https://media.licdn.com/dms/image/C4D0BAQERjkKDyj41fg/company-logo_100_100/0/1631344918920?e=1721865600&v=beta&t=gBiEacPFBG_OucJFx6ntTHuIePE-kpU0U4Zt2u434FA"} alt="NYSITS"/>
                <section style={{width: '100%'}}>
                    <div className={Styles.RowContainer}> 
                        <div className={`${Styles.SectionTitleWrapper}`}> <div className={Styles.SectionTitle}>NYS Information Office of Technology Services</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Software Engineer (ITS 2 Programming)</div> </div>
                        <div className={Styles.SectionDate}>June 2024 - Present</div>
                    </div>
                    <ul>
                        <li>TBD</li>
                    </ul>
                </section>
                </div>
                
                <div className={Styles.WorkSectionContainer}>
                <img className={Styles.WorkImage} src={"https://media.licdn.com/dms/image/C4D0BAQExLUwL6tQ17g/company-logo_100_100/0/1630557970910/concordeeducation_logo?e=1721865600&v=beta&t=TlAhfwlA8bJ5Ivni1-MY1wH6EGaO_n5efq2IAViUPVA"} alt="ConcordeEdu"/>
                <section style={{width: '100%'}}>
                    <div className={Styles.RowContainer}> 
                        <div className={`${Styles.SectionTitleWrapper}`}> <div className={Styles.SectionTitle}>Concorde Education</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Coding Instructor</div> </div>
                        <div className={Styles.SectionDate}>March 2024 - May 2024</div>
                    </div>
                    <ul>
                        <li>Educate children from grades (6-8) on how to develop a video game utilizing Scratch.</li>
                        <li>Introduce essential Computer Science concepts to children such as conditional statements, looping, and more.</li>
                    </ul>
                </section>
                </div>

                <div className={Styles.WorkSectionContainer}>
                <img className={Styles.WorkImage} src={"https://media.licdn.com/dms/image/C4E0BAQFjHB1GpokNsw/company-logo_100_100/0/1630571038395/jetsweat_logo?e=1721865600&v=beta&t=oiUfTHZ4SpZVWQ-cPBfnWjTrcddke5qY8-ONJXe0Vf0"} alt="JetSweat"/>
                <section style={{width: '100%'}}>
                    <div className={Styles.RowContainer}> 
                        <div className={`${Styles.SectionTitleWrapper}`}> <div className={Styles.SectionTitle}>JetSweat</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>iOS Developer Intern</div> </div>
                        <div className={Styles.SectionDate}>May 2022 - Aug. 2022</div>
                    </div>
                    <ul>
                        <li>Analyzed and debugged code to fix an issue where live classes disappeared 1 minute after the start time.</li>
                        <li>Constructed a radiating indicator and banner for live videos to notify users when they are currently streaming.</li>
                        <li>Programmed the ability for users to view future and previous weeks of scheduled live classes in Swift.</li>
                        <li>Collaborated together with a UX designer to implement styling changes based on designs in Figma files.</li>
                    </ul>
                </section> 
                </div> 
            </div>
        </section>
    )
};

export default ResumeRelevantExperience;