import { connect } from 'react-redux'
import LoginView from './LoginView'
import {authenticateAС} from '../../reducers/authentication'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (token, newValues) => dispatch(authenticateAС(token, newValues))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
