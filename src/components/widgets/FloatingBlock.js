import { Component } from 'react'
import './FloatingBlock.scss'

export default class FloatingBlock extends Component {
    render() {
        const style = {}

        if (this.props.color) {
            style.backgroundColor = this.props.color
        }

        const moreClassNames = this.props.className || ''

        return (
            <div
                className={'FloatingBlock ' + moreClassNames}
                style={style}
            >
                {this.props.children}
            </div>
        )
    }
}
