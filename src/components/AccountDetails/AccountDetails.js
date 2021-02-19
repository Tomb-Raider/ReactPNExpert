import { Component } from 'react'
import './AccountDetails.scss'

export default class AccountDetails extends Component {
    render() {
        const icon = this.props.icon || 'none'
        const upper = this.props.upper || 'Upper'
        const lower = this.props.lower || 'Lower'

        return (
            <div className={'AccountDetails ' + (!this.props.isDrawerOpen ? 'short' : '')}>
                <img src={icon} />
                <div className="titles">
                    <div className="upper">{upper}</div>
                    <div className="lower">{lower}</div>
                </div>
            </div>
        )
    }
}
