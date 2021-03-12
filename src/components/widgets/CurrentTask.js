import { Component } from 'react'
import './CurrentTask.scss'
import FloatingBlock from './FloatingBlock'
import InfoRows from '../widgets/InfoRows'
import Square from '../widgets/Square'

import defaultIcon from '../../images/task.svg'

export default class CurrentTask extends Component {
    getDateInfoRows = () => {
        const dateMain = this.props.dateMain || 'Когда-то'

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
                        <img src={defaultIcon} />
                    </FloatingBlock>
                </Square>

                <InfoRows main={actionMain} sub={actionSub} className="action" />

                {/* TODO: move to a component */}
                <div className="checkbox"></div>
            </div>
        )
    }
}
