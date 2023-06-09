import Styles from '../Styles/ErrorPage.module.css';
import Animations from '../Styles/Animations.module.css';
import { useEffect } from 'react';

export default function ErrorPage({title}) {

    useEffect(() => {
        document.title = title || "";
    }, [title])

    const navigateHome = () => {
        window.location.href = "/";
    }

    return(
        <div className={Styles.ContainerWrapper}>
            <div className={`${Styles.Background} ${Animations.VerticalScroll}`}/>
            <div className={Styles.Container}>
                <img className={`${Styles.AlienImage} ${Animations.Tilt}`} src={"/pictures/alien.png"} alt="alien"/>
                <img className={Styles.ErrorImage} src={"/pictures/404.png"} alt="404 Error"/>
                <h1 className={Styles.ErrorText}>404 - PAGE UNKNOWN</h1>
                <button onClick={navigateHome} className={`${Styles.Button} ${Animations.ButtonGlow}`}><a href="/" className={Styles.ButtonLink}>Home</a></button>
            </div>
        </div>
    )
};