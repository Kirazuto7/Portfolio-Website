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
            <h1 className={Styles.Title}>Uh Oh!</h1>
            <h1 className={Styles.ErrorText}>404 - PAGE NOT FOUND</h1>
            <button className={Styles.Button}><a href="/" className={Styles.ButtonLink}>Home</a></button>
        </div>
        </>
    )
};