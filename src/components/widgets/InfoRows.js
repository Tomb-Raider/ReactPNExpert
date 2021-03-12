import { Component } from 'react'
import './InfoRows.scss'

export default class InfoRows extends Component {
    render() {
        const moreClassNames = this.props.className || ''
        const isAligned = this.props.aligned ? 'aligned' : ''

        if (this.props.sub) {
            return (
                <div className={`InfoRows ${isAligned} ${moreClassNames}`}>
                    <div className="main">{this.props.main}</div>
                    <div className="sub">{this.props.sub}</div>
                </div>
            )
        }

        return (
            <div className={`InfoRows ${isAligned} ${moreClassNames}`}>
                <div className="main">{this.props.main}</div>
            </div>
        )
    }
}
