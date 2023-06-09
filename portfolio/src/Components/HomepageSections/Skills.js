import Styles from '../../Styles/Skills.module.css';
import Animations from '../../Styles/Animations.module.css';
import { skills } from '../../Exports';

function Skills({style, scrollIdentifier, animate = false}) {
    
    const createSkillTable = () => {
        return (
            <section className={Styles.BodySection}>
            {skills
                .map((skill) => {
                    return(
                            <div className={ animate ? `${Styles.SkillContainer} ${Animations.RotateFadeIn}` : `${Styles.Hidden}`} key={skill.name}>
                                <div className={Styles.SkillWrapper}>
                                    <img loading="lazy" className={Styles.SkillImage} src={skill.src} alt={skill.name}/> 
                                    <div className={Styles.SkillName}>{skill.name}</div>
                                </div>
                            </div>
                    )
                })
            }
            </section>
        )
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
