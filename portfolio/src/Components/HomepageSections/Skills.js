import Styles from '../../Styles/Skills.module.css';
import { baseURL } from '../../App';

function Skills({style, scrollIdentifier}) {
    const sections = ["Languages", "Frameworks & Databases", "Tools"];
    const languages = [
        {name: "Swift", src: `${baseURL}/skills/swift.png`},
        {name: "C++", src: `${baseURL}/skills/c++.png`},
        {name: "Javascript", src: `${baseURL}/skills/javascript.png`},
        {name: "Python", src: `${baseURL}/skills/python.png`},
        {name: "Java", src: `${baseURL}/skills/java.png`},
        {name: "C#", src: `${baseURL}/skills/csharp.jpeg`}
    ]

    const frameworkDBs = [
        {name: "UIKit", src: `${baseURL}/skills/uikit.png`},
        {name: "React", src: "/logo192.png"},
        {name: "Firebase", src: `${baseURL}/skills/google-firestore.png`},
        {name: "MySQL", src: `${baseURL}/skills/mysql.png`},
        {name: "ExpressJS", src: `${baseURL}/skills/express.png`}
    ]

    const tools = [
        {name: "VS Code", src: `${baseURL}/skills/vscode.png`},
        {name: "XCode", src: `${baseURL}/skills/xcode.jpeg`},
        {name: "Github", src: `${baseURL}/skills/github.png`},
        {name: "Ubuntu", src: `${baseURL}/skills/ubuntu.png`},
        {name: "Android", src: `${baseURL}/skills/androidstudio.jpeg`},
        {name: "Unreal", src: `${baseURL}/skills/unrealengine.png`}
    ]

    const createSkillTable = () => {
        return sections.map((section, index) => {
            return(
                <section className={Styles.BodySection} key={index}>
                    <h2 className={Styles.SectionName}>{section}</h2>
                    <div className={Styles.SectionRow}>
                        {
                            index === 0 ?

                            languages.map((skill) => {
                                return(
                                    <div className={Styles.SkillContainer} key={skill.name}>
                                        <div className={Styles.SkillWrapper}>
                                            <img className={Styles.SkillImage} src={skill.src} alt={skill.name}/> 
                                            <div className={Styles.SkillName}>{skill.name}</div>
                                        </div>
                                    </div>
                                )
                            })

                            :

                            index === 1 ?

                            frameworkDBs.map((skill) => {
                                return(
                                    <div className={Styles.SkillContainer} key={skill.name}>
                                        <div className={Styles.SkillWrapper}>
                                            <img className={Styles.SkillImage} src={skill.src} alt={skill.name}/> 
                                            <div className={Styles.SkillName}>{skill.name}</div>
                                        </div>
                                    </div>
                                )
                            })

                            :

                            index === 2 ?

                            tools.map((skill) => {
                                return(
                                    <div className={Styles.SkillContainer} key={skill.name}>
                                        <div className={Styles.SkillWrapper}>
                                            <img className={Styles.SkillImage} src={skill.src} alt={skill.name}/> 
                                            <div className={Styles.SkillName}>{skill.name}</div>
                                        </div>
                                    </div>
                                )
                            })

                            :

                            null
                        }
                        
                    </div>
                </section>
            )
        })
    }

    return (
        <div id={scrollIdentifier} className={`${Styles.Container} ${style}`}>
            <div className={Styles.Title}>Skills</div>
            <div className={Styles.Separator}/>
            <section className={Styles.Body}> { createSkillTable() } </section>
        </div>
    )
}

export default Skills;
