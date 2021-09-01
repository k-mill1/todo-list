import { connect } from 'react-redux';
import { setVisibilityFilter } from './actions';
import Link from './Link';

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }    
    };
}

const LinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link)
export default LinkContainer