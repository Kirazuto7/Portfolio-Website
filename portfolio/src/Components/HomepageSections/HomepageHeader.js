import Styles from '../../Styles/Homepage.module.css';
import Animations from '../../Styles/Animations.module.css';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { baseURL, isMobile } from '../../Exports';

function HomepageHeader({scroll = () => {}, headerRef}) {
    const [exists, setExists] = useState(false);
    const buttonRef = useRef();
    const [buttonWidth, setButtonWidth] = useState(0);

    useLayoutEffect(() => {
        const handleButtonWidth = () => {
            if(!isMobile()) {
                let experienceButton = buttonRef.current;
                let { width } = experienceButton.getBoundingClientRect();
                setButtonWidth(width);            
            }
        }

        handleButtonWidth();

        window.addEventListener('resize', handleButtonWidth);

        return () => {
            window.removeEventListener('resize', handleButtonWidth);
        }
        
    }, [])

    useEffect(() => {
        let details = [
            "New York, NY",
            "917-324-5326",
            "jordansukhnyc@gmail.com"
        ]

        let delay = 3000;

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
        <div ref={headerRef} id={"Intro"} className={Styles.HeaderContainer}>
            <div className={`${Animations.Matrix}`}/>
            <header className={`${Styles.Header} ${Animations.Appear}`}>
                <div className={Styles.HeaderInfo}>
                    <section className={Styles.Title}>
                        <h1 className={Styles.Name}>Jordan Sukhnandan</h1>
                        <h2 className={Styles.Position}>Software Developer (Mobile | Fullstack Web)</h2>
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
                    {
                        isMobile() ?
                        null
                        :
                        <div id="HomepageButtonGroup" className={Styles.ButtonGroup}>
                            <button style={{'width': `${buttonWidth}px`}} id="AboutMeButton" className={Styles.Button} onClick={(e) => scroll(e)} value={"AboutMe"}>About Me</button>
                            <button style={{'width': `${buttonWidth}px`}} id="SkillsButton" className={Styles.Button} onClick={(e) => scroll(e)} value={"Skills"}>Skills</button>
                            <button style={{'width': `${buttonWidth}px`}} ref={buttonRef} id="ExperienceButton" className={`${Styles.Button} ${Styles.ButtonWidth}`} onClick={(e) => scroll(e)} value={"Experiences"}>Experiences</button>
                        </div>
                    }
                </div>
                <img loading="lazy" className={`${Styles.ProfilePhoto} ${Animations.TeleportAppear}`} src={`${baseURL}/profile_photo.png`} alt="profile"></img>
            </header>
        </div>
    )
};

export default HomepageHeader;