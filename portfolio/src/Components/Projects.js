import Styles from '../Styles/Projects.module.css';
import VStack from './SubComponents/VStack';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

function Projects() {

    const projects = [
        {name: "EasyHangout", role: "Full Stack Web", date: "Mar. 2023 - May 2023", src: "/pictures/easyhangout.gif", github:"https://github.com/csci-499-sp23/team-6-sp23-redux",
         summary: "EasyHangOut is a web application designed to make finding recreational spots to hang out with friends simple and intuitive. \nThe app presents users with a series of recreational locations that they can choose to save for later in a Tinder fashion.",
         techStack: ["Javascript", "React", "Cloud Firestore", "Yelp API", "GoogleMaps API", "Express JS", "Axios"],
         website: "https://easy-hangout-68597.web.app/",
         userStories: ["Produced a React Javascript app in a team of 5 for users to easily discover new places to hangout nearby.",
                       "Created a swipeable stacked deck of cards with a modal display of information and travel directions utilizing Google Maps API for users to learn more about and save new hangout locations.",
                       "Deployed cloud functions utilizing Firebase and Express backend to access data from the Yelp Fusion API.",
                       "Queried real-time data from a Firestore database utilizing an event listener to retrieve pertinent user info.",
                       "Designed the app to be responsive on both mobile and web browsers for all routes using Media Query."]
        },
        {name: "Pupple", role: "Mobile iOS", date: "Apr. 2022 - June 2022", src: "/pictures/pupple.gif", github:"https://github.com/PuppyTinder/puppy-tinder",
         summary: "A Tinder-like app that allows dog owners to find a playmate for their dogs.",
         techStack: ["Swift", "Back4App", "UIKit", "Dog API", "Koloda", "Alamofire"],
         userStories: ["Developed an Ios app with a team of 4 to help dog owners find playmates in a tinderesque style using Swift.",
                       "Utilized the Koloda Cocoapods to implement a stackable and swipeable card interface for users to like/dislike other users.",
                       "Incorporated a live messaging system between matched users utilizing Parse Live Query to retrieve and send messages in real time.",
                       "Implemented an extensive sign up, profile, and filtering process to manage and store user data in the Back4App database."]
        },
        {name: "FitTrack", role: "Mobile Android", date: "Oct. 2021 - Dec. 2021", src: "/pictures/FinalFitTrack.gif", github:"https://github.com/FItTracker-Group/FitTrack",
         summary: "A fitness application designed to help people learn about various exercises and keep track of their weight. \nThe purpose of this app is to help create a workout community among friends or people with similar goals.",
         techStack: ["Java", "Back4App", "Parceler"],
         userStories: ["Developed an Android app with a team of 5 to inform users on how to perform exercises via categories using Java.",
                       "Designed the feed screen showcasing appropriate workouts in a recycler view parsed from information stored in Back4App utilizing parceler.",
                       "Enabled access to the internal camera from the app for users to share their progress via the bumptech.glide library.",
                       "Incorporated a search bar for users to filter specific exercises based on name/difficulty programmed via an ArrayList of filtered videos in Java."
         ]
        },
        {name: "CafesAPI", role: "Backend", date: "Apr. 2022 - May 2022", src: "/pictures/getcafes.png", github:"https://github.com/Kirazuto7/CafesAPI",
         summary: "An api containing a list of information about cafes for people to find a good place to study/work in NYC.",
         techStack: ["C#", "MySQL", "Postman"],
         userStories: ["Programmed a database containing a list of cafes for people to cowork/study.",
                       "The database contains a few HTTP methods such as GET, POST, PUT, and DELETE requests.",
                       "Stored cafe information in a MySQL database.",
                       "Created models and a controller for the program utilizing C#."
         ]
        }
    ]

    const displayProjects = () => {
        return projects.map((project, index) => {
            return(
                <section id={project.name} className={Styles.Project} key={index}>
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
                            <img className={Styles.Image} src={project.src} alt={project.name}></img>
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
        })
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
            <form className={Styles.DropDown}>
                <label htmlFor="selectProjects"></label>
                <select className={Styles.DropDownLabel} id="selectProjects" onChange={onSelectProject}>
                    {
                        projects.map((project, index) => {
                            return(
                                <option key={index} value={project.name}>
                                    {project.name}
                                </option>
                            )
                        })
                    }
                </select>
            </form>
        )
    }

    return(
        <div className={Styles.Container}>
            <VStack header={dropDown()} style={Styles.VStack} stackStyle={Styles.VStackBody} items={displayProjects()}/>
        </div>
    )
}

export default Projects;