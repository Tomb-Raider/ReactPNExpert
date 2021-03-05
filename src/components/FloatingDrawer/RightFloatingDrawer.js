import { connect } from 'react-redux'
import FloatingDrawer from './FloatingDrawer'
import {left_drawer, right_drawer} from '../../reducers/drawers'

const mapStateToProps = (state) => {
    return {
        open: state.drawers.right.open,
        side: 'right'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => {
            if (window.innerWidth < 600) {
                dispatch(left_drawer.closeAC())
            }
            dispatch(right_drawer.toggleAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FloatingDrawer)
