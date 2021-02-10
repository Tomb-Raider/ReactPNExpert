import { render } from '@testing-library/react'
import { Component } from 'react'
import './LeftMenu.scss'

class Entry extends Component {
    render() {
        const isSelected = this.props.selected ? 'selected' : ''
        const iconName = this.props.icon ? this.props.icon : 'not_interested'

        return (
            <div
                className={'waves-effect waves-dark Entry ' + isSelected}
            >
                <i className="material-icons left">{iconName}</i>
                <p className={this.props.short ? 'short' : ''}>{this.props.title || '<no title>'}</p>
            </div>
        )
    }
}

export default class LeftMenu extends Component {
    entries = {
        account: {
            icon: 'account_circle',
        },
        news: {
            icon: 'dashboard',
        },
        activities: {
            icon: 'date_range',
        },
        users: {
            icon: 'supervisor_account',
        },
        about: {
            icon: 'favorite_border',
        },
        settings: {
            icon: 'settings',
        },
    }

    state = {
        selected: 'account',
    }

    render() {
        return (
            <div className="LeftMenu">
                {
                    Object.keys(this.entries).map(key => {
                        return (
                            <Entry
                                key={key}
                                title={key}
                                selected={this.state.selected == key}
                                icon={this.entries[key].icon}
                                short={!this.props.isDrawerOpen}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
