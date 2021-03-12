import { Component } from 'react'
import './Square.scss'

export default class Square extends Component {
    render() {
        const moreClassNames = this.props.className || ''

        return (
            <div className={'Square ' + moreClassNames}>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
