import Styles from '../../Styles/Resume.module.css';

function ResumeEducation() {
    return(
        <section className={Styles.Section}>
            <h2 className={Styles.SectionLabel}>EDUCATION</h2>

            <div className={Styles.SubSections}>
                <section>
                    <div className={Styles.RowContainer}> 
                        <div className={Styles.SectionTitleWrapper}> <div className={Styles.SectionTitle}>Hunter College</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>New York, NY</div> </div>
                        <div className={Styles.SectionDate}>Jan. 2020 - May 2023</div>
                    </div>
                    <div className={Styles.RowContainer}>
                        <div>B.A. w/ Honors in Computer Science</div>
                        <div><span style={{'fontWeight': 'bold'}}>GPA:</span> 3.90</div>
                    </div>
                    <div className={Styles.EducationList}> <span style={{'fontWeight': 'bold'}}>Relevant Coursework: </span> Web Dev, Intro to APIs, Database Management, Data Structures, Computer Architecture, Operating Systems, Computer Theory, iOS Dev, Capstone</div>
                </section>

                <section>
                    <div className={Styles.RowContainer}> 
                        <div className={Styles.SectionTitleWrapper}> <div className={Styles.SectionTitle}>CodePath</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Cohort</div> </div>
                        <div className={Styles.SectionDate}>Sep. 2021 - Aug. 2022</div>
                    </div>
                    <div className={Styles.EducationList}> <span style={{'fontWeight': 'bold'}}>Certifications: </span> 
                        <a className={Styles.Link} href="https://drive.google.com/file/d/1N7-3xudSHRH9v8e2lkkNE-vmqoX4RaOC/view" target="_blank" rel="noreferrer">CodePath Certificate in Intermediate Software Engineering (Summer 2022)</a>,
                        <a className={Styles.Link} href="https://drive.google.com/file/d/1JDgMH8B0uZgu0Bjo2iWZhmSErDbtlQuS/view" target="_blank" rel="noreferrer"> CodePath Certificate in iOS Development (Spring 2022)</a>,
                        <a className={Styles.Link} href="https://drive.google.com/file/d/1HZEkoU-_nvpHKCTXecE9nODRUh376d20/view" target="_blank" rel="noreferrer"> CodePath Certificate in Android Development (Fall 2021)</a>
                    </div>
                </section>
                
                <section>
                    <div className={Styles.RowContainer}> 
                        <div className={Styles.SectionTitleWrapper}> <div className={Styles.SectionTitle}>Project Basta</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Cohort</div> </div>
                        <div className={Styles.SectionDate}>Mar. 2020 - July 2022</div>
                    </div>
                    <div className={Styles.EducationList}> Selected to participate in a rigorous 10-week career prep program designed to support first generation college students in landing a great entry level job; spend 50+ hours networking and preparing for interviews.</div>
                </section>

                <section>
                    <div className={Styles.RowContainer}> 
                        <div className={Styles.SectionTitleWrapper}> <div className={Styles.SectionTitle}>NYU Tandon School of Engineering</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>New York, NY</div> </div>
                        <div className={Styles.SectionDate}>Jan. 2013 - Dec. 2015</div>
                    </div>
                    <div className={Styles.RowContainer}>
                        <div>B.S. in Computer Engineering</div>
                    </div>
                </section>

            </div>
        </section>
    )
}

export default ResumeEducation;