import Styles from '../../Styles/VStack.module.css';
import PropTypes from 'prop-types';

function VStack({items = [], header = <></>, style, stackStyle, alignItems = 'center', alignContent = 'center', justifyContent = 'center'}) {
    return(
        <div className={`${Styles.Container} ${style}`}>
            {header}
        <div style={{'alignContent':{alignContent}, 'alignItems': {alignItems}, 'justifyContent': {justifyContent}}} className={`${Styles.Stack} ${stackStyle}`}>
            {items}
        </div>
        </div>
        
    )
}

VStack.propTypes = {
    items: PropTypes.arrayOf(PropTypes.element).isRequired,
    header: PropTypes.element,
    alignItems: PropTypes.string,
    justifyContent: PropTypes.string,
    alignContent: PropTypes.string,
    style: PropTypes.string,
    stackStyle: PropTypes.string
}

export default VStack;