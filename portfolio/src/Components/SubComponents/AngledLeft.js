import Styles from '../../Styles/Angled.module.css';

export default function AngledLeft({style, top = '-60px', angleID}) {
    return(
        <>
        <div id={angleID} className={`${Styles.AngledLeft} ${style}`} style={{'top':`${top}`}}/>
        </>
    )
};