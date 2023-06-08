import Styles from '../Styles/Projects.module.css';
import VStack from './SubComponents/VStack';
import SegmentController from './SubComponents/SegmentController';
import ImageComponent from './SubComponents/ImageComponent';
import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { ProjectType, projects } from '../Exports';

function Projects({title = ""}) {
    
    const [selectedProjectType, setSelectedProjectType] = useState(ProjectType.All);
    const memoizedProjects = useMemo(() => {
        return projects.filter((project) => {
            return selectedProjectType === ProjectType.All ? true : selectedProjectType === project.type
        })
    }, [selectedProjectType])

    useEffect(() => {
        document.title = title || "";
    }, [title])

    const displayProjects = () => {

        return memoizedProjects
        .map((project, index) => {
            return( <section id={project.name} className={Styles.Project} key={index}>
                    <header className={Styles.Header}>
                        <div className={Styles.LeftDivider}/>
                        <div className={Styles.Title}>{project.name}</div> 
                        <div className={Styles.RightDivider}/>
                    </header>
                    <div className={Styles.SubHeader}>
                        <div className={Styles.Date}>{project.date}</div>
                        <div className={Styles.Links}>
                            {project.website && <FontAwesomeIcon className={Styles.Website} onClick={() => window.open(project.website,'_blank')} icon={faGlobe}/>}
                            <FontAwesomeIcon className={Styles.Github} onClick={() => {window.open(project.github,'_blank')}} icon={faGithub}/>
                        </div>
                    </div>
                    <div className={Styles.Summary}>{project.summary}</div>

                    <section className={Styles.Body}>
                        <section className={Styles.BodyMain}>
                            <ImageComponent project={project} index={index}/>

                            <ul className={Styles.UserStories}>
                                {
                                    project.userStories.map((story, index) => {
                                        return(
                                            <li key={index}>{story}</li>
                                        )
                                    })
                                }
                            </ul>
                        </section>
                        <div className={Styles.TechStackList}>
                            {
                                project.techStack.map((item, index) => {
                                    return(
                                        < React.Fragment key={index}>
                                            <span>{item}</span>
                                            {
                                                index !== project.techStack.length - 1 &&
                                                <span className={Styles.VSeparator}></span>
                                            }
                                        </React.Fragment>
                                    )
                                })
                            }  
                        </div>
                    </section>
                </section>
        )
        }
        
        )
    };

    
    const dropDown = () => {
        function onSelectProject() {
            let select = document.getElementById("selectProjects");
            let selectedValue = select.options[select.selectedIndex].value;
            let element = document.getElementById(`${selectedValue}`);
            element.scrollIntoView({
                behavior: 'smooth'
            })
        }

        return(
            <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '3vh'}}>
            <form className={Styles.DropDown}>
                <label htmlFor="selectProjects"></label>
                <select className={Styles.DropDownLabel} id="selectProjects" onChange={onSelectProject}>
                    {
                        memoizedProjects
                        .map((project, index) => {
                            return(
                                <option key={index} value={project.name}>
                                    {project.name}
                                </option>
                            )
                        })
                    }
                </select>
            </form>
            <SegmentController items={ProjectType.array} onSelect={(selected) => {selectProjectType(selected)}} defaultItem={ProjectType.All}/>
            </div>
        )
    }

    const selectProjectType = (selected) => {
        setSelectedProjectType(() => (selected))
    }

    return(
        <>
        <div className={Styles.Background}/>
        <div className={Styles.Container}>
            <VStack header={dropDown()} style={Styles.VStack} stackStyle={Styles.VStackBody} items={displayProjects()}/>
        </div>
        </>
    )
}

export default Projects;