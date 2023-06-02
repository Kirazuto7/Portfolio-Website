import Styles from '../Styles/Resume.module.css';
import ResumeEducation from './ResumeSections/ResumeEducation';
import ResumeProjects from './ResumeSections/ResumeProjects';
import ResumeRelevantExperience from './ResumeSections/ResumeRelevantExperience';
import ResumeOtherExperience from './ResumeSections/ResumeOtherExperience';

function Resume() {
    const skills = [
        {name: "Swift", src: "pictures/skills/swift.png"},
        {name: "C++", src: "pictures/skills/c++.png"},
        {name: "Javascript", src: "pictures/skills/javascript.png"},
        {name: "Python", src: "pictures/skills/python.png"},
        {name: "Java", src: "pictures/skills/java.png"},
        {name: "C#", src: "pictures/skills/csharp.jpeg"},
        {name: "UIKit", src: "pictures/skills/uikit.png"},
        {name: "React", src: "logo192.png"},
        {name: "Firebase", src: "pictures/skills/google-firestore.png"},
        {name: "MySQL", src: "pictures/skills/mysql.png"},
        {name: "ExpressJS", src: "pictures/skills/express.png"},
        {name: "VS Code", src: "pictures/skills/vscode.png"},
        {name: "XCode", src: "pictures/skills/xcode.jpeg"},
        {name: "Github", src: "pictures/skills/github.png"},
        {name: "Ubuntu", src: "pictures/skills/ubuntu.png"},
        {name: "Android", src: "pictures/skills/androidstudio.jpeg"},
        {name: "Unreal", src: "pictures/skills/unrealengine.png"}

    ]

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
                                        <div className={Styles.SkillImageWrapper}> <img className={Styles.SkillImage} src={row[0][0].src} alt={row[0][0].name}></img> </div>
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
                <img className={Styles.Photo} src="/pictures/profile_photo.jpeg" alt="profile"></img>
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