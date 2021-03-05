import { connect } from 'react-redux'
import App from './App'

import {left_drawer, right_drawer} from '../../reducers/drawers'

const mapStateToProps = (state) => {
    return {
        leftDrawerOpen: state.drawers.left.open,
        rightDrawerOpen: state.drawers.right.open,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleLeftDrawer: _ => dispatch(left_drawer.toggleAC()),
        toggleRightDrawer: _ => dispatch(right_drawer.toggleAC()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
