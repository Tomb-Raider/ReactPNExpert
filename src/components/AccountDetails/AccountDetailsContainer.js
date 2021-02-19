import { connect } from 'react-redux'
import AccountDetails from './AccountDetails'

const mapStateToProps = (state) => {
    return {
        icon: state.authentication.avatar,
        upper: state.authentication.firstName + ' ' + state.authentication.lastName,
        lower: state.authentication.location,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails)
