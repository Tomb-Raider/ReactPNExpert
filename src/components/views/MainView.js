import { Component } from 'react'
import './MainView.scss'
import FloatingBlock from '../widgets/FloatingBlock'
import Square from '../widgets/Square'
import CurrentTask from '../widgets/CurrentTask'

export default class MainView extends Component {
    render() {
        return (
            <div className="MainView">
				<div className="blocks-section">
                    <div className="white-blocks">
                        <div className="titled-blocks upper">
                            <p className="flow-text">Мероприятия</p>

                            <div className="blocks">
                                <FloatingBlock color="white">
                                    <Square>
                                        Tasks
                                    </Square>
                                </FloatingBlock>

                                <FloatingBlock color="white">
                                    <Square>
                                        Games
                                    </Square>
                                </FloatingBlock>
                            </div>
                        </div>
                        <div className="titled-blocks lower">
                            <p className="flow-text">Система хранения</p>

                            <div className="blocks">
                                <FloatingBlock color="white">
                                    Files
                                </FloatingBlock>
                            </div>
                        </div>
                    </div>
                    <div className="accent-blocks">
                        <FloatingBlock className="upper">
                            Progress
                        </FloatingBlock>
                        <FloatingBlock className="lower">
                            Activity
                        </FloatingBlock>
                    </div>
                </div>

                <p className="flow-text">Текущие задачи</p>
                <CurrentTask />
			</div>
        )
    }
}
