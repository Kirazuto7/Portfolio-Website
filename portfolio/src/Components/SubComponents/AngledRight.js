import Styles from '../../Styles/Angled.module.css';

export default function AngledRight({style, top = '-60px', angleID}) {
    return(
        <>
        <div id={angleID} className={`${Styles.AngledRight} ${style}`} style={{'top':`${top}`}}/>
        </>
    )
}

