import { Component } from 'react'
import './CurrentTask.scss'
import FloatingBlock from './FloatingBlock'

export default class CurrentTask extends Component {
    render() {
        return (
            <div className="CurrentTask">
                <p className="flow-text">После еды</p>

                <FloatingBlock color="white">
                    Test
                </FloatingBlock>

                <p className="flow-text">Принять лекарства</p>

                {/* TODO: move to a component */}
                <div className="checkbox"></div>
            </div>
        )
    }
}
