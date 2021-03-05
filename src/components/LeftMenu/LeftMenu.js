import { render } from '@testing-library/react'
import { Component } from 'react'
import './LeftMenu.scss'
import M from 'materialize-css'

class Entry extends Component {
    render() {
        const isSelected = this.props.selected ? 'selected' : ''
        const iconName = this.props.icon ? this.props.icon : 'not_interested'
        const isNested = this.props.nest ? 'nested' : ''
        const isCollapser = this.props.collapser ? 'collapser' : ''
        const isOpen = this.props.open && isCollapser ? 'open' : ''

        return (
            <div
                className={`waves-effect waves-dark Entry ${isSelected} ${isNested} ${isCollapser} ${isOpen}`}
                onClick={this.props.onClick}
            >
                <i className="material-icons left">{iconName}</i>
                <p className={this.props.short ? 'short' : ''}>{this.props.title || '<no title>'}</p>
            </div>
        )
    }
}

export default class LeftMenu extends Component {
    toastToDo = (select) => {
        M.toast({ html: "Скоро мы и это сделаем :)" })

        this.setState(old => {
            return {
                ...old,
                selected: select,
            }
        })
    }

    entries = {
        account: {
            icon: 'account_circle',
            title: 'Аккаунт',
            action: this.toastToDo,
        },
        news: {
            icon: 'dashboard',
            title: 'Новости',
            action: this.toastToDo,
        },
        activities: {
            icon: 'date_range',
            title: 'Активности',
            action: {
                videos: {
                    icon: 'dashboard',
                    title: 'Видео',
                    action: this.toastToDo,
                },
                surveys: {
                    icon: 'dashboard',
                    title: 'Опросы',
                    action: this.toastToDo,
                },
                diary: {
                    icon: 'dashboard',
                    title: 'Дневник',
                    action: this.toastToDo,
                },
                games: {
                    icon: 'dashboard',
                    title: 'Игры',
                    action: this.toastToDo,
                },
                map: {
                    icon: 'dashboard',
                    title: 'Карта',
                    action: this.toastToDo,
                },
                goals: {
                    icon: 'dashboard',
                    title: 'Цели',
                    action: this.toastToDo,
                },
            }
        },
        users: {
            icon: 'supervisor_account',
            title: 'Пользователи',
            action: this.toastToDo,
        },
        about: {
            icon: 'favorite_border',
            title: 'О нас',
            action: this.toastToDo,
        },
        settings: {
            icon: 'settings',
            title: 'Настройки',
            action: this.toastToDo,
        },
    }

    state = {
        selected: 'news',
    }

    constructor(props) {
        super(props)

        const collapsable_headers = []
        this.collectCollapsableHeaders(this.entries, collapsable_headers)

        for (let it of collapsable_headers) {
            // true if open
            this.state[it] = false
        }
    }

    collectCollapsableHeaders(declaration, collector, prefix = '') {
        for (let key in declaration) {
            if (typeof declaration[key].action == 'object') {
                collector.push(prefix + '_' + key)
                this.collectCollapsableHeaders(declaration[key], collector, prefix + '_' + key)
            }
        }
    }

    toggleCollectable = (target) => {
        this.setState(old => {
            const copy = {
                ...old,
            }

            copy[target] = !old[target]
            return copy
        })
    }

    collectEntries(declaration, prefix = '') {
        // if a child is selected, then
        // the parent is selected as well
        let selected = false

        const entries = Object.keys(declaration).map(key => {
            const that = declaration[key]

            // make selected bubble up
            selected = selected || this.state.selected == key

            if (typeof that.action == 'function') {
                return (
                    <Entry
                        key={key}
                        title={that.title}
                        selected={this.state.selected == key}
                        icon={that.icon}
                        short={!this.props.isDrawerOpen}
                        onClick={ () => that.action(key) }
                        nest={prefix != ''}
                    />
                )
            }

            const [innerOptions, innerSelected] = this.collectEntries(that.action, prefix + '_' + key)

            return (
                <div>
                    <Entry
                        key={key}
                        title={that.title}
                        selected={this.state.selected == key || innerSelected}
                        icon={that.icon}
                        short={!this.props.isDrawerOpen}
                        onClick={ () => { this.toggleCollectable(prefix + '_' + key) } }
                        nest={prefix != ''}
                        collapser
                        open={this.state[prefix + '_' + key]}
                    />
                    <div className={'collapsable ' + (this.state[prefix + '_' + key] ? 'open' : '')}>
                        {innerOptions}
                    </div>
                </div>
            )
        })

        return [entries, selected]
    }

    render() {
        const [entries, _] = this.collectEntries(this.entries)

        return (
            <div className="LeftMenu">
                {entries}
            </div>
        )
    }
}
