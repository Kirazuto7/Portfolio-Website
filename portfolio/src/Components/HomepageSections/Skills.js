import Styles from '../../Styles/Skills.module.css';

function Skills({style, scrollIdentifier}) {

    const sections = ["Languages", "Frameworks & Databases", "Tools"];
    const languages = [
        {name: "Swift", src: "/Portfolio-Website/pictures/skills/swift.png"},
        {name: "C++", src: "/Portfolio-Website/pictures/skills/c++.png"},
        {name: "Javascript", src: "/Portfolio-Website/pictures/skills/javascript.png"},
        {name: "Python", src: "/Portfolio-Website/pictures/skills/python.png"},
        {name: "Java", src: "/Portfolio-Website/pictures/skills/java.png"},
        {name: "C#", src: "/Portfolio-Website/pictures/skills/csharp.jpeg"}
    ]

    const frameworkDBs = [
        {name: "UIKit", src: "/Portfolio-Website/pictures/skills/uikit.png"},
        {name: "React", src: "/Portfolio-Website/logo192.png"},
        {name: "Firebase", src: "/Portfolio-Website/pictures/skills/google-firestore.png"},
        {name: "MySQL", src: "/Portfolio-Website/pictures/skills/mysql.png"},
        {name: "ExpressJS", src: "/Portfolio-Website/pictures/skills/express.png"}
    ]

    const tools = [
        {name: "VS Code", src: "/Portfolio-Website/pictures/skills/vscode.png"},
        {name: "XCode", src: "/Portfolio-Website/pictures/skills/xcode.jpeg"},
        {name: "Github", src: "/Portfolio-Website/pictures/skills/github.png"},
        {name: "Ubuntu", src: "/Portfolio-Website/pictures/skills/ubuntu.png"},
        {name: "Android", src: "/Portfolio-Website/pictures/skills/androidstudio.jpeg"},
        {name: "Unreal", src: "/Portfolio-Website/pictures/skills/unrealengine.png"}
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
