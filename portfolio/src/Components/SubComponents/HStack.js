import Styles from '../../Styles/HStack.module.css';
import PropTypes from 'prop-types';

function HStack({items = [], header = <></>, style, alignItems = 'center', alignContent = 'center', justifyContent = 'center'}) {
    return(
        <div className={`${Styles.Container}`}>
            {header}
        <div style={{'alignContent':{alignContent}, 'alignItems': {alignItems}, 'justifyContent': {justifyContent}}} className={`${Styles.Stack} ${style}`}>
            {items}
        </div>
        </div>
        
    )
}

HStack.propTypes = {
    items: PropTypes.arrayOf(PropTypes.element).isRequired,
    header: PropTypes.element,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    alignContent: PropTypes.string,
    style: PropTypes.string
}

export default HStack;