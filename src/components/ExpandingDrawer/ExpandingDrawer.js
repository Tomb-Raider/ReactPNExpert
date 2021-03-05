import { React, Component } from 'react'
import './ExpandingDrawer.scss'

export default class ExpandingDrawer extends Component {
    render() {
        const Header = this.props.header || (_ => <div></div>)
        const Content = this.props.content || (_ => <div></div>)

        const isMobile = (this.props.innerWidth < 1200) ? 'mobile' : ''
        const isClosed = (this.props.open || this.props.innerWidth < 1200) ? '' : 'closed'

        const side = this.props.side == 'right' ? 'Right' : 'Left'

        const toggleIcon = this.props.toggleIcon || 'menu'

        return (
            <div className={`ExpandingDrawer ${isClosed}`}>
                <div className={`Contents${side} ${isClosed}`}>
                    <Header isDrawerOpen={!isClosed} />
                    <div className={`controls ${isMobile}`}>
                        <p></p>
                        <button
                            className="btn-flat waves-effect waves-dark text-black"
                            onClick={this.props.toggle}
                        >
                            <i className="material-icons">{toggleIcon}</i>
                        </button>
                    </div>
                    <Content isDrawerOpen={!isClosed} />
                </div>
            </div>
        )
    }
}
