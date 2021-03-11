import { Component } from 'react'
import './FloatingBlock.scss'

export default class FloatingBlock extends Component {
    render() {
        const style = {}

        if (this.props.color) {
            style['background-color'] = this.props.color
        }

        return (
            <div
                className={'FloatingBlock ' + this.props.className}
                style={style}
            >
                {this.props.children}
            </div>
        )
    }
}
