import { Component } from 'react'
import './TasksView.scss'
import FloatingBlock from '../widgets/FloatingBlock'
import CurrentTask from '../widgets/CurrentTask'

import iconPills from '../../images/pills.svg'
import iconVideo2 from '../../images/video_2.svg'
import iconPhoto from '../../images/photo.svg'
import iconExtraTask from '../../images/extra_task.svg'

export default class TasksView extends Component {
    MONTHS = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
    ]

    getDate = (delta = 0) => {
        let today = new Date()
        today.setDate(today.getDate() + delta)

        let day = today.getDate().toString().padStart(2, '0')
        let month = this.MONTHS[today.getMonth()]
        let year = today.getFullYear()

        return day + ' ' + month + ' ' + year
    }

    render() {
        let today = this.getDate()
        let tomorrow = this.getDate(1)

        return (
            <div className="TasksView">
				<div className="blocks-section">
                    <div className="content-section">
                        <div className="current">
                            <p className="flow-text today"><b>СЕГОДНЯ</b> {today}</p>

                            <CurrentTask
                                dateMain="15:00 - 16:00"
                                dateSub="После еды"
                                actionMain="Принять лекарства"
                                actionSub="Сегодня принять витаминку"
                                icon={iconPills}
                            />

                            <CurrentTask
                                dateMain="В течение дня"
                                actionMain="Снять видео №2"
                                actionSub="Сегодня снять видео вращения кисти"
                                icon={iconVideo2}
                            />

                            <CurrentTask
                                actionMain="Фото в полный рост"
                                actionSub="Фото в полный рост с двух ракурсов"
                                icon={iconPhoto}
                            />

                            <CurrentTask
                                actionMain="Фото домашнего питомца"
                                actionSub="Фото в полный рост с двух ракурсов"
                                icon={iconExtraTask}
                            />
                        </div>

                        <div className="upcomming">
                            <p className="flow-text today"><b>ЗАВТРА</b> {tomorrow}</p>

                            <CurrentTask
                                dateMain="15:00 - 16:00"
                                dateSub="После еды"
                                actionMain="Принять лекарства"
                                actionSub="Сегодня принять витаминку"
                                icon={iconPills}
                            />

                            <CurrentTask
                                dateMain="В течение дня"
                                actionMain="Снять видео №2"
                                actionSub="Сегодня снять видео вращения кисти"
                                icon={iconVideo2}
                            />
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
			</div>
        )
    }
}
