import Styles from '../../Styles/Resume.module.css';

function ResumeRelevantExperience() {
    return(
        <section className={Styles.Section}>
            <h2 className={Styles.SectionLabel}>RELEVANT EXPERIENCE</h2>
            <div className={Styles.SubSections}>
                <section>
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
        </section>
    )
};

export default ResumeRelevantExperience;