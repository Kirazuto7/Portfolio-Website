import Styles from '../../Styles/Resume.module.css';

function ResumeProjects() {
    return(
        <section className={Styles.Section}>
            <div className={Styles.SectionLabel}>PROJECTS</div>
            <div className={Styles.SubSections}>
                <section>
                    <div className={Styles.RowContainer}> 
                        <a href="https://github.com/csci-499-sp23/team-6-sp23-redux" target="_blank" rel="noreferrer" className={`${Styles.SectionTitleWrapper} ${Styles.Link}`}> <div className={Styles.SectionTitle}>Easy Hangout</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Full Stack Developer</div> </a>
                        <div className={Styles.SectionDate}>Mar. 2023 - May 2023</div>
                    </div>
                    <div style={{'fontStyle': 'italic'}}>(Deployed Site: <a href="https://easy-hangout-68597.web.app/" target="_blank" rel="noreferrer" className={Styles.Link}>https://easy-hangout-68597.web.app/</a>)</div>
                    <ul>
                        <li>Produced a React Javascript app in a team of 5 for users to easily discover new places to hangout nearby.</li>
                        <li>Created a swipeable stacked deck of cards with a modal display of information and travel directions utilizing Google Maps API for users to learn more about and save new hangout locations.</li>
                        <li>Deployed cloud functions utilizing Firebase and Express backend to access data from the Yelp Fusion API.</li>
                        <li>Queried real-time data from a Firestore database utilizing an event listener to retrieve pertinent user info.</li>
                        <li>Designed the app to be responsive on both mobile and web browsers for all routes using Media Query.</li>
                    </ul>
                </section>

                <section>
                    <div className={Styles.RowContainer}> 
                        <a href="https://github.com/PuppyTinder/puppy-tinder" target="_blank" rel="noreferrer" className={`${Styles.SectionTitleWrapper} ${Styles.Link}`}> <div className={Styles.SectionTitle}>Pupple</div> <div className={Styles.VSeparator}/> <div className={Styles.SectionAttribute}>Mobile Developer</div> </a>
                        <div className={Styles.SectionDate}>Apr. 2022 - May 2022</div>
                    </div>
                    <div style={{'fontStyle': 'italic'}}>(Achieved Local Demo Day 1<sup>st</sup> Place, Awarded <a href="https://drive.google.com/file/d/1VErro4fP8KpJ2Ba4haJi3TuyHBMm85oq/view" target="_blank" rel="noreferrer" className={Styles.Link}>National Demo Day 2<sup>nd</sup> Place</a>)</div>
                    <ul>
                        <li>Developed an iOS Swift app in a team of 3 to help dog owners find a playdate in a Tinder-esque style.</li>
                        <li>Implemented a swipeable deck of profile cards for users to like/dislike potential playmates for their dogs utilizing the Koloda library.</li>
                        <li>Enabled users to sign up and edit their profile info via storing and parsing data in a Back4App database.</li>
                        <li>Coded a real time messaging system for matched users to communicate privately via Parse Live Query.</li>
                    </ul>
                </section>  
            </div>
        </section>
    )
};

export default ResumeProjects;