import { Component } from 'react'
import './MainView.scss'
import FloatingBlock from '../widgets/FloatingBlock'
import Square from '../widgets/Square'
import CurrentTask from '../widgets/CurrentTask'

import iconTask from '../../images/task.svg'
import iconJoystick2 from '../../images/joystick_2.svg'
import iconFile from '../../images/file.svg'
import iconPills from '../../images/pills.svg'
import iconVideo2 from '../../images/video_2.svg'

export default class MainView extends Component {
    render() {
        return (
            <div className="MainView">
				<div className="blocks-section">
                    <div className="white-blocks">
                        <div className="titled-blocks upper">
                            <p className="flow-text">Мероприятия</p>

                            <div className="blocks">
                                <FloatingBlock color="white" className="activity-block">
                                    <Square>
                                        <img src={iconTask} />
                                        <div className="title">Задания</div>
                                    </Square>
                                </FloatingBlock>

                                <FloatingBlock color="white" className="activity-block">
                                    <Square>
                                        <img src={iconJoystick2} />
                                        <div className="title">Игры</div>
                                    </Square>
                                </FloatingBlock>
                            </div>
                        </div>
                        <div className="titled-blocks lower">
                            <p className="flow-text">Система хранения</p>

                            <div className="blocks">
                                <FloatingBlock color="white" className="file-block">
                                    <img src={iconFile} />
                                    <div className="text-content">
                                        <div className="title">
                                            Загруженные файлы
                                        </div>
                                        <div className="stats">
                                            <div className="column">
                                                <p>15 видео</p>
                                                <p>27 фотографий</p>
                                            </div>
                                            <div className="column">
                                                <p>10 опросов</p>
                                                <p>3 документа</p>
                                            </div>
                                        </div>
                                    </div>
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

                <CurrentTask
                    dateMain="15:00 - 16:00"
                    dateSub="После еды"
                    actionMain="Принять лекарства"
                    actionSub="Сегодня принять витаминку"
                    icon={iconPills}
                    completed
                />

                <CurrentTask
                    dateMain="В течение дня"
                    actionMain="Снять видео №2"
                    actionSub="Сегодня снять видео вращения кисти"
                    icon={iconVideo2}
                />
			</div>
        )
    }
}
