import { Component } from 'react'
import './ActivitiesList.scss'

export default class ActivitiesList extends Component {
    render() {
        const icon = this.props.icon || 'none'
        const upper = this.props.upper || 'Upper'
        const lower = this.props.lower || 'Lower'

        return (
            <div className="ActivitiesList">
                <img src={icon} />
                <div className="titles">
                    <div className="upper">{upper}</div>
                    <div className="lower">{lower}</div>
                </div>
            </div>
        )
    }
}
