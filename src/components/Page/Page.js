import { Component } from 'react'
import './Page.scss'

export default class Page extends Component {
    render() {
        return (
            <div className="Page">
				<div className="feed">
					{this.props.children}
				</div>
			</div>
        )
    }
}
