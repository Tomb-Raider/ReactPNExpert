import { connect } from 'react-redux'
import ExpandingDrawer from './ExpandingDrawer'
import {left_drawer, right_drawer} from '../../reducers/drawers'

const mapStateToProps = (state) => {
    return {
        open: state.drawers.right.open,
        side: 'right',
        innerWidth: state.temporary.windowSize.width,
        innerHeight: state.temporary.windowSize.height,
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

export default connect(mapStateToProps, mapDispatchToProps)(ExpandingDrawer)
