import Styles from '../Styles/Resume.module.css';
import ResumeEducation from './ResumeSections/ResumeEducation';
import ResumeProjects from './ResumeSections/ResumeProjects';
import ResumeRelevantExperience from './ResumeSections/ResumeRelevantExperience';
import ResumeOtherExperience from './ResumeSections/ResumeOtherExperience';
import { baseURL, skills } from '../Exports';
import { useEffect } from 'react';

function Resume({title = ""}) {

    useEffect(() => {
        document.title = title;
    }, [title])

    const loadSkills = () => {
        let numRows = Math.ceil(skills.length / 2)
        let rows = []
        let i = 0
        let x = 0
        while(x < numRows) {
            let row = [skills.slice(i, i+2)]
            rows.push(row)
            i+=2;
            x++;
        }

        return(
            <section className={Styles.SkillsTable}>
                {
                    rows.map((row, index) => {
                        return(
                            <section className={Styles.SkillRow} key={index}>
                                 <div className={Styles.Skill} > 
                                        <div className={Styles.SkillImageWrapper}> <img loading="lazy" className={Styles.SkillImage} src={row[0][0].src} alt={row[0][0].name}></img> </div>
                                        <div className={Styles.SkillName}>{row[0][0].name}</div>
                                </div>
                                {
                                    row[0][1] !== undefined &&
                                    <div className={Styles.Skill}> 
                                        <div className={Styles.SkillImageWrapper}> <img className={Styles.SkillImage} src={row[0][1].src} alt={row[0][1].name}></img> </div>
                                        <div className={Styles.SkillName}>{row[0][1].name}</div>
                                    </div>
                                }
                               
                           
                            </section>
                        )
                    })
                }
            </section>
        )
    }

    return(
        <div className={Styles.Container}>
            
            <div className={Styles.LeftContainer}>
                <img loading="lazy" className={Styles.Photo} src={`${baseURL}/profile_photo.png`} alt="profile"></img>
                <div className={Styles.JobTitle}>Software Developer</div>
                <div className={Styles.HSeparator}></div>

                <section className={Styles.SkillsContainer}>
                <div className={Styles.SkillsLabel}>Skills</div>
                {loadSkills()}
                </section>
            </div>

            <div className={Styles.RightContainer}> 
                <h2 className={Styles.Title}>Jordan Sukhnandan</h2>
                <section className={Styles.SubTitleRow}>
                    <div className={Styles.SubTitle}>(917)-324-5326</div>
                    <div className={Styles.VSeparator}></div>
                    <div className={Styles.SubTitle}>jordansukhnyc@gmail.com</div>
                    <div className={Styles.VSeparator}></div>
                    <a href="https://www.linkedin.com/in/jordansukhnandan/" target="_blank" rel="noreferrer" className={`${Styles.Link} ${Styles.SubTitle}`}>LinkedIn</a>
                    <div className={Styles.VSeparator}></div>
                    <a href="https://github.com/Kirazuto7" target="_blank" rel="noreferrer" className={`${Styles.Link} ${Styles.SubTitle}`}>Github</a>
                    <div className={Styles.VSeparator}></div>
                    <div className={Styles.SubTitle}>New York, NY</div>
                </section>

                <section className={Styles.ResumeSections}>
                    <ResumeEducation/>
                    <ResumeProjects/>
                    <ResumeRelevantExperience/>
                    <ResumeOtherExperience/>
                </section>
            </div>

        </div>
    )
}

export default Resume;