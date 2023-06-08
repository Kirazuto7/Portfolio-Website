import Styles from '../../Styles/Projects.module.css';

export default function ImageComponent({project, index}) {

    return(
        <div className={Styles.ImageContainer}>
            <div id={`${project.name}Spinner`} className={Styles.PlaceHolderImage} alt={"spinner"}><div className={Styles.Loading}>Loading...</div><div className={Styles.Spinner}/></div>
            {
                index === 0 ?
                <img value={project.name} id={`${project.name}Image`} loading="eager" className={Styles.Image} key={project.src} src={project.src} alt={project.name}/>
                :
                <img value={project.name} id={`${project.name}Image`} loading="lazy" className={Styles.Image} key={project.src} src={project.src} alt={project.name}/>
            }
        </div>
    )
};