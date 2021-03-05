import { connect } from 'react-redux'
import ExpandingDrawer from './ExpandingDrawer'
import {left_drawer, right_drawer} from '../../reducers/drawers'

const mapStateToProps = (state) => {
    return {
        open: state.drawers.left.open,
        side: 'left',
        innerWidth: state.temporary.windowSize.width,
        innerHeight: state.temporary.windowSize.height,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => {
            if (window.innerWidth < 600) {
                dispatch(right_drawer.closeAC())
            }
            dispatch(left_drawer.toggleAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpandingDrawer)
