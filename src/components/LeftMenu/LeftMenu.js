import { Component } from 'react'
import './LeftMenu.scss'
import M from 'materialize-css'
import {PAGES, getCollapsableHeaders} from '../../pages'
import {withRouter} from 'react-router-dom'
import {PropTypes} from 'prop-types'

class Entry extends Component {
    render() {
        const isSelected = this.props.selected ? 'selected' : ''
        const iconName = this.props.icon ? this.props.icon : 'not_interested'
        const isCollapser = this.props.collapser ? 'collapser' : ''
        const isOpen = this.props.open && isCollapser ? 'open' : ''

        const level = this.props.level || 0
        const indent = this.props.short ? 0 : 168 - level * 20

        return (
            <div
                className={`waves-effect waves-dark Entry ${isSelected} ${isCollapser} ${isOpen}`}
                onClick={this.props.onClick}
            >
                <i className="material-icons left">{iconName}</i>
                <p className={this.props.short ? 'short' : ''} style={{ width: indent + 'px' }}>{this.props.title || '<no title>'}</p>
            </div>
        )
    }
}

class LeftMenu extends Component {
    static propTypes = {
        // match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }

    toastToDo = (select) => {
        M.toast({ html: "Скоро мы и это сделаем :)" })
    }

    // gets filled in the
    // constructor
    state = {}

    constructor(props) {
        super(props)

        const collapsable_headers = getCollapsableHeaders()

        for (let it of collapsable_headers) {
            // true if open
            this.state[it] = false
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

    collectEntries(declaration, prefix = '', level = 0) {
        // if a child is selected, then
        // the parent is selected as well
        let selected = false

        const entries = Object.keys(declaration).map(key => {
            const location = this.props.location.pathname
            const full_key = prefix + '/' + key
            const that = declaration[key]

            // make selected bubble up
            selected = selected || location == full_key

            if (typeof that.action != 'object') {
                return (
                    <Entry
                        key={full_key}
                        title={that.title}
                        selected={location == full_key}
                        icon={that.icon}
                        short={!this.props.isDrawerOpen}
                        onClick={ () => this.props.history.push(full_key) }
                        level={level}
                    />
                )
            }

            const [innerOptions, innerSelected] = this.collectEntries(that.action, full_key, level + 1)

            selected = selected || innerSelected

            return (
                <div key={full_key}>
                    <Entry
                        title={that.title}
                        selected={location == full_key || innerSelected}
                        icon={that.icon}
                        short={!this.props.isDrawerOpen}
                        onClick={ () => { this.toggleCollectable(full_key) } }
                        collapser
                        open={this.state[full_key]}
                        level={level}
                    />
                    <div className={'collapsable ' + (this.state[full_key] ? 'open' : '')}>
                        {innerOptions}
                    </div>
                </div>
            )
        })

        return [entries, selected]
    }

    render() {
        const [entries, _] = this.collectEntries(PAGES)

        return (
            <div className="LeftMenu">
                {entries}
            </div>
        )
    }
}

export default withRouter(LeftMenu)
