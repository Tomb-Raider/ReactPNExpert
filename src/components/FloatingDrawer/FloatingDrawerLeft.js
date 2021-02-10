import { React, Component } from 'react'
import './FloatingDrawerLeft.scss'

export default class FloatingDrawerLeft extends Component {
    state = {
        open: true
    }

    // toggleButton = React.createRef()

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         open: true
    //     }
    // }

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

        return (
            <div className={'FloatingDrawerLeft ' + isClosed}>
                <Header isDrawerOpen={this.state.open} />
                <div className="controls">
                    <p></p>
                    <button
                        className="btn-flat waves-effect waves-dark text-black"
                        onClick={this.toggle}
                        // ref={this.toggleButton}
                    >
                        <i className="material-icons">menu</i>
                    </button>
                </div>
                <Content isDrawerOpen={this.state.open} />
            </div>
        )
    }
}
