import Styles from '../../Styles/SegmentController.module.css';
import propTypes from 'prop-types';
import { useState } from 'react';

export default function SegmentController({items = [], onSelect = () => {}, defaultItem = ""}) {

    const [selected, setSelected] = useState(defaultItem);

    const onClick = (e) => {
        setSelected(() => (e.target.value))
        onSelect(e.target.value)
    };
    return(
        <div className={Styles.Container}> 
            {
                items.map((item, index) => {
                    return(
                        <button value={item} key={index} className={(selected === item) ? `${Styles.Button} ${Styles.SelectedButton}` : `${Styles.Button}`} onClick={onClick}>
                            {item}
                        </button>
                    )
                })
            }
        </div>
    )
};

SegmentController.propTypes = {
    items: propTypes.arrayOf(propTypes.string),
    onSelect: propTypes.func,
    defaultItem: propTypes.string
}