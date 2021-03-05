import { connect } from 'react-redux'
import FloatingDrawer from './FloatingDrawer'
import {right_drawer} from '../../reducers/drawers'

const mapStateToProps = (state) => {
    return {
        open: state.drawers.right.open,
        side: 'right'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => dispatch(right_drawer.toggleAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FloatingDrawer)
