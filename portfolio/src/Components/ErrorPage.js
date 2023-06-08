import Styles from '../Styles/ErrorPage.module.css';
import { useEffect } from 'react';

export default function ErrorPage({title}) {

    useEffect(() => {
        document.title = title || "";
    }, [title])

    return(
        <>
        <div className={Styles.Background}/>
        <div className={Styles.Container}>
            <img className={Styles.SideImage} src={"/pictures/alien.png"} alt="alien"/>
            <img className={Styles.Image} src={"/pictures/404.png"} alt="404 Error"/>
            <h1 className={Styles.ErrorText}>404 - PAGE NOT FOUND</h1>
            <button className={Styles.Button}><a href="/" className={Styles.ButtonLink}>Home</a></button>
        </div>
        </>
    )
};