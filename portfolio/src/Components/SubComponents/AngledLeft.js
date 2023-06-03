import Styles from '../../Styles/Angled.module.css';

export default function AngledLeft({style, top = '0'}) {
    return(
        <>
        <div className={`${Styles.AngledLeft} ${style}`} style={{'top':`${top}`}}/>
        </>
    )
};