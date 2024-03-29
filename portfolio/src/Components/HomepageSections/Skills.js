import Styles from '../../Styles/Skills.module.css';
import Animations from '../../Styles/Animations.module.css';
import { skills } from '../../Exports';
import { useEffect } from 'react';
import AngledLeft from '../SubComponents/AngledLeft';

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
                            <div className={ animate ? `${Styles.SkillContainer} ${Animations.RotateFadeIn}` : `${Styles.SkillContainer} ${Styles.Hidden}`} key={skill.name}>
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
        <section className={style}>
        <AngledLeft angleID={"HomeBreakpoint2"} top={"-150px"}/>
        <div ref={skillsRef} id={scrollIdentifier} className={`${Styles.Container}`}>
            <h2 id="SkillsTitle" className={Styles.Title}>Skills</h2>
            <div id="SkillsSeparator" className={Styles.Separator}/>
            <section className={Styles.Body}> { createSkillTable() } </section>
        </div>
        </section>
    )
}

export default Skills;
