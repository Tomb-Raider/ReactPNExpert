import { Component } from 'react'
import './CurrentTask.scss'
import FloatingBlock from './FloatingBlock'
import InfoRows from '../widgets/InfoRows'
import Square from '../widgets/Square'

import defaultIcon from '../../images/task.svg'

class Checkbox extends Component {
    render() {
        return (
            <div className="Checkbox">
                <FloatingBlock color="white">
                    <label>
                        <input type="checkbox" disabled="disabled" checked={this.props.checked || ""} />
                        <span></span>
                    </label>
                </FloatingBlock>
            </div>
        )
    }
}

export default class CurrentTask extends Component {
    getDateInfoRows = () => {
        if (!this.props.dateMain) {
            return null
        }

        const dateMain = this.props.dateMain

        if (this.props.dateSub) {
            return <InfoRows main={dateMain} sub={this.props.dateSub} className="date" aligned />
        }

        return <InfoRows main={dateMain} className="date" aligned />
    }

    render() {
        const dateInfoRows = this.getDateInfoRows()

        const actionMain = this.props.actionMain || 'Что-то'
        const actionSub = this.props.actionSub || 'Там'

        const icon = this.props.icon || defaultIcon

        return (
            <div className="CurrentTask">
                {dateInfoRows}

                <Square className="icon">
                    <FloatingBlock color="white">
                        <img src={icon} />
                    </FloatingBlock>
                </Square>

                <InfoRows main={actionMain} sub={actionSub} className="action" />

                {/* TODO: move to a component */}
                <div className="checkbox"></div>

                <Checkbox checked={this.props.completed || false} />
            </div>
        )
    }
}
