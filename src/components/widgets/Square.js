import { Component } from 'react'
import './Square.scss'

export default class Square extends Component {
    render() {
        return (
            <div className={'Square ' + this.props.className}>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
