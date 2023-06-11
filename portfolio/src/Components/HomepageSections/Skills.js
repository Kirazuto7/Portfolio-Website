import Styles from '../../Styles/Skills.module.css';
import Animations from '../../Styles/Animations.module.css';
import { skills } from '../../Exports';
import { useEffect } from 'react';

function Skills({style, scrollIdentifier, animate = false, skillsRef}) {

    useEffect(() => {
        let title = document.getElementById("SkillsTitle");
        let underline = document.getElementById("SkillsSeparator");
        let { width } = title.getBoundingClientRect();
        underline.style.width = `${width}px`
    })
    
    const createSkillTable = () => {
        return (
            <section className={Styles.BodySection}>
            {skills
                .map((skill) => {
                    return(
                            <div className={ animate ? `${Styles.SkillContainer} ${Animations.RotateFadeIn}` : `${Styles.Hidden}`} key={skill.name}>
                                <div className={Styles.SkillWrapper}>
                                    <img loading="lazy" className={Styles.SkillImage} src={skill.src} alt={skill.name}/> 
                                    <h4 className={Styles.SkillName}>{skill.name}</h4>
                                </div>
                            </div>
                    )
                })
            }
            </section>
        )
    }

    return (
        <div ref={skillsRef} id={scrollIdentifier} className={`${Styles.Container} ${style}`}>
            <h2 id="SkillsTitle" className={Styles.Title}>Skills</h2>
            <div id="SkillsSeparator" className={Styles.Separator}/>
            <section className={Styles.Body}> { createSkillTable() } </section>
        </div>
    )
}

export default Skills;
