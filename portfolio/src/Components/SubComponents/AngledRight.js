import Styles from '../../Styles/Angled.module.css';

export default function AngledRight({style, top = '0'}) {
    return(
        <>
        <div className={`${Styles.AngledRight} ${style}`} style={{'top':`${top}`}}/>
        </>
    )
}

