import { Component } from 'react'
import './IconWith2Titles.scss'

export default class IconWith2Titles extends Component {
    render() {
        const icon = this.props.icon || 'none'
        const upper = this.props.upper || 'Upper'
        const lower = this.props.lower || 'Lower'

        return (
            <div className="IconWith2Titles">
                <img src={icon} />
                <div className="titles">
                    <div className="upper">{upper}</div>
                    <div className="lower">{lower}</div>
                </div>
            </div>
        )
    }
}
