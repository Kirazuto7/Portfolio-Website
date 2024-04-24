import Styles from '../Styles/Resume.module.css';
import ResumeEducation from './ResumeSections/ResumeEducation';
import ResumeProjects from './ResumeSections/ResumeProjects';
import ResumeRelevantExperience from './ResumeSections/ResumeRelevantExperience';
import ResumeOtherExperience from './ResumeSections/ResumeOtherExperience';
import { baseURL, skills, isPortraitMode } from '../Exports';
import { useEffect, useState } from 'react';

function Resume({title = ""}) {

    const [portraitMode, setPortraitMode] = useState(isPortraitMode());

    useEffect(() => {
        const handleOrientationChange = () => {
            setPortraitMode(isPortraitMode())
        }

        window.addEventListener("resize", handleOrientationChange);

        return () => {
            window.removeEventListener("resize", handleOrientationChange);
        }
    }, [])

    useEffect(() => {
        document.title = title;
    }, [title])

    const loadSkills = () => {
        let num = 2
        if (isPortraitMode()) {
            num = 5
        }
        let numRows = Math.ceil(skills.length / num)
        let rows = []
        let i = 0
        let x = 0
        while(x < numRows) {
            let row = [skills.slice(i, i+num)]
            rows.push(row)
            i+=num;
            x++;
        }

        return(
            <section className={Styles.SkillsTable}>
                {
                    rows.map((row, index) => {
                        return(
                            row.map((skills) => {
                                return(
                                    <section className={Styles.SkillRow} key={index}>
                                    {
                                        skills.map((skill, index) => {
                                            return(
                                                <div className={Styles.Skill} key={index}> 
                                                    <div className={Styles.SkillImageWrapper}> <img loading="lazy" className={Styles.SkillImage} src={skill.src} alt={skill.name}></img> </div>
                                                    <div className={Styles.SkillName}>{skill.name}</div>
                                                </div>
                                            )
                                        })
                                    }
                                    </section>
                                )
                            })  
                        )
                    })
                }
            </section>
        )
    }
    if(!portraitMode) {
        return(
            <div className={Styles.Container}>
                
                <div className={Styles.LeftContainer}>
                    <img loading="lazy" className={Styles.Photo} src={`${baseURL}/profile_photo.png`} alt="profile"></img>
                    <h2 className={Styles.JobTitle}>Software Developer</h2>
                    <div className={Styles.HSeparator}></div>
    
                    <section className={Styles.SkillsContainer}>
                    <h4 className={Styles.SkillsLabel}>Skills</h4>
                    {loadSkills()}
                    </section>
                </div>
    
                <div className={Styles.RightContainer}> 
                    <h1 className={Styles.Title}>Jordan Sukhnandan</h1>
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
                        <ResumeRelevantExperience/>
                        <ResumeProjects/>
                        <ResumeEducation/>
                        <ResumeOtherExperience/>
                    </section>
                </div>
    
            </div>
        )
    }// Portrait mode
    else {
        return(
            <div className={Styles.Container}>
                
                <header className={Styles.LeftContainer}>
                    <img loading="lazy" className={Styles.Photo} src={`${baseURL}/profile_photo.png`} alt="profile"></img>
                    <h1 className={Styles.Title}>Jordan Sukhnandan</h1>
                    <h2 className={Styles.JobTitle}>Software Developer</h2>
                    <section className={Styles.SubTitleRow}>
                        <div className={Styles.SubTitle}>(917)-324-5326</div>
                        <div className={Styles.VSeparator}></div>
                        <div className={Styles.SubTitle}>jordansukhnyc@gmail.com</div>
                        <div className={Styles.VSeparator}></div>
                        <div className={Styles.SubTitle}>NYC</div>
                    </section>
                    <section className={Styles.SubTitleRow}>
                        <a href="https://www.linkedin.com/in/jordansukhnandan/" target="_blank" rel="noreferrer" className={`${Styles.Link} ${Styles.SubTitle}`}>LinkedIn</a>
                        <div className={Styles.VSeparator}></div>
                        <a href="https://github.com/Kirazuto7" target="_blank" rel="noreferrer" className={`${Styles.Link} ${Styles.SubTitle}`}>Github</a>
                    </section>
                </header>
    
                <div className={Styles.RightContainer}> 
                    <section className={Styles.ResumeSections}>
                        <ResumeRelevantExperience/>
                        <ResumeProjects/>
                        <ResumeEducation/>
                        <ResumeOtherExperience/>
                        <section className={Styles.SkillsContainer}>
                            <h4 className={Styles.SkillsLabel}>Skills</h4>
                            {loadSkills()}
                        </section>
                    </section>
                </div>
    
            </div>
        )
    }
    
}

export default Resume;