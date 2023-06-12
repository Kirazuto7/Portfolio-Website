import Styles from '../../Styles/Experience.module.css';
import Animations from '../../Styles/Animations.module.css';
import HStack from '../SubComponents/HStack';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { baseURL } from '../../Exports';
import AngledRight from '../SubComponents/AngledRight';

function Experience({style, scrollIdentifier, slideLeft = false, slideRight = false, slideLeft2 = false, experienceRef}) {

    useEffect(() => {
        let title = document.getElementById("ExperienceTitle");
        let underline = document.getElementById("ExperienceSeparator");
        let { width } = title.getBoundingClientRect();
        underline.style.width = `${width}px`
    }, [])

    const displayExperiences = () => {
        const experiences = [
            {name: "JetSweat", src: `${baseURL}/jetsweat.jpeg`, label: "Previously Worked At", date: "May 2022 - Aug.2022", position: "iOS Mobile Developer Intern",
             website: "https://jetsweatfitness.com/",
             details: [
                <dd>Analyzed and debugged code to fix an issue where live classes disappeared 1 minute after the start time.</dd>,
                <dd>Constructed a radiating indicator and banner for live videos to notify users when they are currently streaming.</dd>,
                <dd>Programmed the ability for users to view future and previous weeks of scheduled live classes in Swift.</dd>,
                <dd>Collaborated together with a UX designer to implement styling changes based on designs in Figma files.</dd>
             ]},
            {name: "CUNY Hunter College", src: `${baseURL}/huntercollege.jpeg`, label: "Graduated From", date: "Jan. 2020 - May 2023", position: "B.A. Computer Science", 
             website: "https://hunter.cuny.edu/",
             details: [
                <dd>Graduated with a cumulative <b>GPA of 3.90</b> achieving <b>Summa Cum Laude</b> and departmental honors</dd>,
                <dd>Focus Study Minor in Japanese up to Advanced Japanese 1</dd>,
                <dd>Developed teamwork skills participating in group projects and hackathon(s) among student peers</dd>,
                <dd>Learned several data structures and algorithms in which I further practice doing Leetcode and in my project(s)</dd>
             ]},
        ]

        return experiences.map((experience, index) => {
            if(index % 2 === 0){
                return(
                    <div key={experience.name} className={ slideLeft ? `${Styles.Experience} ${Animations.LeftSlide}` : `${Styles.Hidden}`}>
                        <section className={Styles.Body}>
                            <div className={Styles.BodyContent}>
                                <h3 className={Styles.Label}>{experience.label}</h3>
                                <h4 className={Styles.ExperienceName}>{experience.name}</h4>
                                <div style={{'display':'flex', 'flexDirection':'right', 'justifyContent': 'space-between'}}>
                                    <div style={{'fontWeight':'600'}}>{experience.position}</div>
                                    <div style={{'whiteSpace': 'nowrap'}}>{experience.date}</div>
                                </div>
                                <dl className={Styles.Details}>
                                {
                                    experience.details.map((detail, index) => {
                                        return(
                                            <React.Fragment key={index}>{detail}</React.Fragment>
                                        )
                                    })
                                }
                                </dl>
                            </div>
                            <img loading="lazy" className={Styles.ExperienceImage} src={experience.src} alt={experience.name} onClick={() => window.open(experience.website,'_blank')}/>
                        </section>
                    </div>
                )
            }
            else {
                return(
                    <div key={experience.name} className={ slideRight ? `${Styles.Experience} ${Animations.RightSlide}` : `${Styles.Hidden}`}>
                        <section className={Styles.Body}>
                            <img loading="lazy" className={Styles.ExperienceImage} src={experience.src} alt={experience.name} onClick={() => window.open(experience.website,'_blank')}/>
                            <div className={Styles.BodyContent}>
                                <h3 className={Styles.Label}>{experience.label}</h3>
                                <h4 className={Styles.ExperienceName}>{experience.name}</h4>
                                <div style={{'display':'flex', 'flexDirection':'right', 'justifyContent': 'space-between'}}>
                                    <div style={{'fontWeight':'600'}}>{experience.position}</div>
                                    <div style={{'whiteSpace': 'nowrap'}}>{experience.date}</div>
                                </div>
                                <dl className={Styles.Details}>
                                {
                                    experience.details.map((detail, index) => {
                                        return(
                                            <React.Fragment key={index}>{detail}</React.Fragment>
                                        )
                                    })
                                }
                                </dl>
                            </div>
                        </section>
                    </div>
                )
            }
        })

    };

    const displayCertificates = () => {
        const baseCertificatesURL = `${baseURL}/certificates`
        const certificates = [
            { name: "PUPPLE", src: `${baseCertificatesURL}/pupplecertificate.png`,link: "https://drive.google.com/file/d/1VErro4fP8KpJ2Ba4haJi3TuyHBMm85oq/view"},
            { name: "INTERMEDIATE SWE", src: `${baseCertificatesURL}/swecertificate.png`, link: "https://drive.google.com/file/d/1N7-3xudSHRH9v8e2lkkNE-vmqoX4RaOC/view"},
            { name: "IOS", src: `${baseCertificatesURL}/ioscertificate.png`, link: "https://drive.google.com/file/d/1JDgMH8B0uZgu0Bjo2iWZhmSErDbtlQuS/view"},
            { name: "ANDROID", src: `${baseCertificatesURL}/androidcertificate.png`, link: "https://drive.google.com/file/d/1HZEkoU-_nvpHKCTXecE9nODRUh376d20/view"}
        ]
        return certificates.map((certificate, index) => {
            return(
                <div id={`Certificate${index}`} className={Styles.CertificateWrapper} key={index} onClick={() => window.open(certificate.link,'_blank')}>
                    <img loading="lazy" className={Styles.Certificate} src ={certificate.src} alt={certificate.link}/>
                    <div className={Styles.CertificateLabel}>{certificate.name}</div>
                </div>
            )
            
        })
    }

    const scrollToCertificate = (next = false) => {
        let element = document.getElementById(`CertificateStack`);
        let { width } = element.getBoundingClientRect();

        if(next) {
            element.scrollBy({
                left: width/2.75,
                behavior: 'smooth'
            });
        }
        else {
            element.scrollBy({
                left: -width/2.75,
                behavior: 'smooth'
            });
        }
    }

    return(
        <section className={style}>
        <AngledRight angleID={"HomeBreakpoint3"} top={"-60px"}/>
        <div ref={experienceRef} id={scrollIdentifier} className={`${Styles.Container}`}>
            <h2 id="ExperienceTitle" className={Styles.Title}>Experiences</h2>
            <div id="ExperienceSeparator" className={Styles.Separator}/>
            <div className={Styles.ExperiencesContainer}>{displayExperiences()}</div>

            <div className={slideLeft2 ? `${Styles.Wrapper} ${Animations.LeftSlide}` : `${Styles.Hidden}`}>
                <button className={Styles.HStackLeftButton} onClick={() => scrollToCertificate(false)}><FontAwesomeIcon icon={faChevronLeft} className={Styles.HStackChevron}/></button>
                <HStack id="CertificateStack" style={Styles.HStack}
                header={<header className={Styles.Label}>Certificates</header>}
                items={displayCertificates()}
                />
                <button className={Styles.HStackRightButton} onClick={() => scrollToCertificate(true)}><FontAwesomeIcon icon={faChevronRight} className={Styles.HStackChevron}/></button>
            </div>
        </div>
        </section>
    )
}

export default Experience;

/*             <div className={slideLeft2 ? `${Styles.Hidden}` : `${Styles.InvisBlock}`}/>
*/