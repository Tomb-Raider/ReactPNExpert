import { connect } from 'react-redux'
import LoginView from './LoginView'
import {authenticateA–°} from '../../reducers/authentication'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (token, newValues) => dispatch(authenticateA–°(token, newValues))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
