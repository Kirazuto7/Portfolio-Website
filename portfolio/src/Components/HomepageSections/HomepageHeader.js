import Styles from '../../Styles/Homepage.module.css';
import Animations from '../../Styles/Animations.module.css';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { baseURL } from '../../Exports';

function HomepageHeader({scroll = () => {}, visited = false}) {
    const [exists, setExists] = useState(false);
    const buttonRef = useRef();
    useEffect(() => {
        let experienceButton = buttonRef.current;
        let { width } = experienceButton.getBoundingClientRect();
        let buttonGroup = document.getElementById('HomepageButtonGroup');
        let buttons = buttonGroup.children;
        for(let i = 0; i < buttons.length; ++i) {
            buttons[i].style.width = `${width}px`;
        }
    }, [])
    
    useEffect(() => {
        let details = [
            "New York, NY",
            "917-324-5326",
            "jordansukhnyc@gmail.com"
        ]
        let visitedPage = sessionStorage.getItem('visited');
        let delay = visitedPage === 'true' ? 1000 : 3000;

        const typeLetters = (element, message, delay) => {
            let i = 0;
            let interval = setInterval(() => {
                element.innerHTML += message.charAt(i);
                i++;
    
                if (i > message.length-1) {
                    clearInterval(interval)
                    return true;
                }
            }, delay);
        }
        let timeout;
        if(!exists){
        timeout = setTimeout(() => {
            let elements = document.getElementsByClassName(Styles.HeaderDetail);
            [].forEach.call(elements, function(element, index) {    
                let timer = setTimeout(function() {
                    let finished = typeLetters(element, details[index], 100);

                    if(finished) {
                        clearTimeout(timer)
                    }
                }, index * 1000)
                
            });
        }, delay)
    }
        return () => {
            clearTimeout(timeout)
            setExists(true)
        }
    }, [exists])
   
    return(
        <div id={"Header"} className={Styles.HeaderContainer}>
            <h1 className={visited ? `${Styles.Hidden}`: `${Styles.Welcome} ${Animations.Expand}`}>Welcome</h1>
            <header className={visited ? `${Styles.Header} ${Animations.Appear}` : `${Styles.HeaderDelay} ${Animations.DelayedAppear}`}>
                <div className={Styles.HeaderInfo}>
                    <div className={visited ? `${Animations.Shine}` : `${Animations.DelayedShine}`}/>
                    <section className={Styles.Title}>
                        <div className={Styles.Name}>Jordan Sukhnandan</div>
                        <div className={Styles.Position}>Software Developer (Mobile | Fullstack Web)</div>
                    </section>
                    
                    <div className={Styles.DetailsContainer}>
                        <div className={Styles.DetailContainer}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <div className={Styles.HeaderDetail}>&nbsp;</div>
                        </div>
                
                        <div className={Styles.DetailContainer}>
                            <FontAwesomeIcon icon={faPhoneVolume} />
                            <a className={`${Styles.HeaderDetail} ${Styles.ContactLink}`} href="tel:9173245326"> </a>
                        </div>

                        <div className={Styles.DetailContainer}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a className={`${Styles.HeaderDetail} ${Styles.ContactLink}`} href="mailto:jordansukhnyc@gmail.com"> </a>
                        </div>
                    </div>

                    <div id="HomepageButtonGroup" className={Styles.ButtonGroup}>
                        <button id="AboutMeButton" className={Styles.Button} onClick={(e) => scroll(e)} value={"AboutMe"}>About Me</button>
                        <button id="SkillsButton" className={Styles.Button} onClick={(e) => scroll(e)} value={"Skills"}>Skills</button>
                        <button ref={buttonRef} id="ExperienceButton" className={`${Styles.Button} ${Styles.ButtonWidth}`} onClick={(e) => scroll(e)} value={"Experiences"}>Experiences</button>
                    </div>
                </div>
                <img loading="lazy" className={Styles.ProfilePhoto} src={`${baseURL}/profile_photo.png`} alt="profile"></img>
            </header>
        </div>
    )
};

export default HomepageHeader;