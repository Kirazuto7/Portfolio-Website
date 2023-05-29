import Styles from '../Styles/Projects.module.css';

function Projects() {

    const projects = [
        {name: "Pupple", role: "Mobile Developer", date: "Apr.2022 - June 2022", src: "pupple.gif",
         summary: ["Developed an Ios app with a team of 4 to help dog owners find playmates in a tinderesque style using Swift.", "Utilized the Koloda Cocoapods to implement a stackable and swipeable card interface for users to like/dislike other users.", "Incorporated a live messaging system between matched users utilizing Parse Live Query to retrieve and send messages in real time.", "Implemented an extensive sign up, profile, and filtering process to manage and store user data in the Back4App database."
        ]},
        {name: "Pupple", role: "Mobile Developer", date: "Apr.2022 - June 2022", src: "",
         summary: ["Developed an Ios app with a team of 4 to help dog owners find playmates in a tinderesque style using Swift.", "Utilized the Koloda Cocoapods to implement a stackable and swipeable card interface for users to like/dislike other users.", "Incorporated a live messaging system between matched users utilizing Parse Live Query to retrieve and send messages in real time.", "Implemented an extensive sign up, profile, and filtering process to manage and store user data in the Back4App database."
        ]}
    ]

    const displayProjects = () => {
        
    };

    return(
        <div className={Styles.Container}>
            <section className={Styles.ProjectList}>
                {displayProjects()}
            </section>
        </div>
    )
}

export default Projects;