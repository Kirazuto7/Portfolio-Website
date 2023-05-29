import Styles from '../../Styles/Homepage.module.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function HomepageHeader({aboutMeScroll = () => {}, skillsScroll = () => {}}) {

    useEffect(() => {
        let details = [
            "New York, NY",
            "917-324-5326",
            "jordansukhnyc@gmail.com"
        ]

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


        let timeout = setTimeout(() => {
            let elements = document.getElementsByClassName(Styles.HeaderDetail);
            [].forEach.call(elements, function(element, index) {    
                let timer = setTimeout(function() {
                    let finished = typeLetters(element, details[index], 100);

                    if(finished) {
                        clearTimeout(timer)
                    }
                }, index * 1000)
                
            });
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return(
        <>
            <h1 className={Styles.Welcome}>Welcome</h1>
            <header className={Styles.Header}>
                <img className={Styles.ProfilePhoto} src="pictures/profile_photo.jpeg" alt="profile"></img>
                <div className={Styles.Name}>Jordan Sukhnandan</div>
                <div className={Styles.Position}>Software Developer (Mobile | Fullstack Web)</div>

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

                <div className={Styles.ButtonGroup}>
                    <button className={Styles.Button} onClick={() => aboutMeScroll()}>About Me</button>
                    <button className={Styles.Button} onClick={() => skillsScroll()}>Skills</button>
                </div>
            </header>
        </>
    )
};

export default HomepageHeader;