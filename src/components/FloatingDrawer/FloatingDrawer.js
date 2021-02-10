import { React, Component } from 'react'
import './FloatingDrawer.scss'

export default class FloatingDrawer extends Component {
    state = {
        open: true
    }

    toggle = () => {
        this.setState(old => {
            return {
                open: !old.open
            }
        })
    }

    render() {
        const Header = this.props.header || (_ => <div></div>)
        const Content = this.props.content || (_ => <div></div>)

        const isClosed = this.state.open ? '' : 'closed'

        const side = this.props.side == 'right' ? 'Right' : 'Left'

        const toggleIcon = this.props.toggleIcon || 'menu'

        return (
            <div className={`FloatingDrawer${side} ${isClosed}`}>
                <Header isDrawerOpen={this.state.open} />
                <div className="controls">
                    <p></p>
                    <button
                        className="btn-flat waves-effect waves-dark text-black"
                        onClick={this.toggle}
                    >
                        <i className="material-icons">{toggleIcon}</i>
                    </button>
                </div>
                <Content isDrawerOpen={this.state.open} />
            </div>
        )
    }
}
