import Styles from '../../Styles/Experience.module.css';
import HStack from '../SubComponents/HStack';
import React from 'react';

function Experience({style, scrollIdentifier}) {

    const displayExperiences = () => {
        const experiences = [
            {name: "CUNY Hunter College", src: "/Portfolio-Website/pictures/huntercollege.jpeg", label: "Graduated From", date: "Jan. 2020 - May 2023", position: "Bachelor of Arts Computer Science", 
            details: [
                "Graduated with a cumulative GPA of 3.90 achieving Summa Cum Laude and departmental honors",
                "Focus Study Minor in Japanese up to Advanced Japanese 1",
                "Developed teamwork skills participating in group projects and hackathon(s) among student peers",
                "Learned several data structures and algorithms in which I further practice doing Leetcode and in my project(s)"
            ]},
            {name: "JetSweat", src: "/Portfolio-Website/pictures/jetsweat.jpeg", label: "Recently Worked At", date: "May 2022 - Aug.2022", position: "iOS Mobile Developer Intern",
            details: [
                "Analyzed and debugged code to fix an issue where live classes disappeared 1 minute after the start time.",
                "Constructed a radiating indicator and banner for live videos to notify users when they are currently streaming.",
                "Programmed the ability for users to view future and previous weeks of scheduled live classes in Swift.",
                "Collaborated together with a UX designer to implement styling changes based on designs in Figma files."
            ]},
        ]

        return experiences.map((experience, index) => {
            if(index % 2 === 0){
                return(
                    <div key={experience.name} className={Styles.Experience}>
                        <section className={Styles.Body}>
                            <div className={Styles.BodyContent}>
                                <header className={Styles.Label}>{experience.label}</header>
                                <h2>{experience.name}</h2>
                                <div style={{'display':'flex', 'flexDirection':'right', 'justifyContent': 'space-between'}}>
                                    <div style={{'fontWeight':'600'}}>{experience.position}</div>
                                    <div>{experience.date}</div>
                                </div>
                                <dl className={Styles.Details}>
                                {
                                    experience.details.map((detail, index) => {
                                        return(
                                            <dd key={index}>{detail}</dd>
                                        )
                                    })
                                }
                                </dl>
                            </div>
                            <img className={Styles.ExperienceImage} src={experience.src} alt={experience.name}></img>
                        </section>
                    </div>
                )
            }
            else {
                return(
                    <div key={experience.name} className={Styles.Experience}>
                        <section className={Styles.Body}>
                            <img className={Styles.ExperienceImage} src={experience.src} alt={experience.name}></img>
                            <div className={Styles.BodyContent}>
                                <header className={Styles.Label}>{experience.label}</header>
                                <h2>{experience.name}</h2>
                                <div style={{'display':'flex', 'flexDirection':'right', 'justifyContent': 'space-between'}}>
                                    <div style={{'fontWeight':'600'}}>{experience.position}</div>
                                    <div>{experience.date}</div>
                                </div>
                                <dl className={Styles.Details}>
                                {
                                    experience.details.map((detail, index) => {
                                        return(
                                            <dd key={index}>{detail}</dd>
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
        const certificates = [
            { name: "PUPPLE", src: "/Portfolio-Website/pictures/certificates/pupplecertificate.png",link: "https://drive.google.com/file/d/1VErro4fP8KpJ2Ba4haJi3TuyHBMm85oq/view"},
            { name: "INTERMEDIATE SWE", src: "/Portfolio-Website/pictures/certificates/swecertificate.png", link: "https://drive.google.com/file/d/1N7-3xudSHRH9v8e2lkkNE-vmqoX4RaOC/view"},
            { name: "IOS", src: "/Portfolio-Website/pictures/certificates/ioscertificate.png", link: "https://drive.google.com/file/d/1JDgMH8B0uZgu0Bjo2iWZhmSErDbtlQuS/view"},
            { name: "ANDROID", src: "/Portfolio-Website/pictures/certificates/androidcertificate.png", link: "https://drive.google.com/file/d/1HZEkoU-_nvpHKCTXecE9nODRUh376d20/view"}
        ]
        return certificates.map((certificate, index) => {
            return(
                <div className={Styles.CertificateWrapper} key={index} onClick={() => window.open(certificate.link,'_blank')}>
                    <img className={Styles.Certificate} src ={certificate.src} alt={certificate.link}/>
                    <div className={Styles.CertificateLabel}>{certificate.name}</div>
                </div>
            )
            
        })
    }

    return(
        <div id={scrollIdentifier} className={`${Styles.Container} ${style}`}>
            <div className={Styles.Title}>Experiences</div>
            <div className={Styles.Separator}/>
            <div className={Styles.ExperiencesContainer}>{displayExperiences()}</div>

            <div className={Styles.Wrapper}>
                <HStack style={Styles.HStack}
                header={<header className={Styles.Label}>Certificates</header>}
                items={displayCertificates()}
                />
            </div>
        </div>
    )
}

export default Experience;