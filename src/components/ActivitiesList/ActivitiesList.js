import { Component } from 'react'
import './ActivitiesList.scss'
import M from 'materialize-css'

import iconSquareMessages from '../../images/messages_square.svg'
import iconSquareFriends from '../../images/friends_square.svg'
import iconSquareVideo1 from '../../images/video_1_square.svg'
import iconSquareSurveys from '../../images/surveys_square.svg'
import iconSquareDiary from '../../images/diary_square.svg'
import iconSquareJoystick1 from '../../images/joystick_1_square.svg'

class ActivityEntry extends Component {
    handleClick = () => {
        M.toast({ html: "А это пока что не работает :)" })
    }

    render() {
        const icon = this.props.icon || 'none'
        const upper = this.props.upper || 'Upper'
        const lower = this.props.lower || 'Lower'

        return (
            <div
                className={'waves-effect waves-dark ActivityEntry ' + (this.props.short ? 'short' : '')}
                onClick={this.handleClick}
            >
                <img src={icon} />
                <div className="titles">
                    <div className="upper">{upper}</div>
                    <div className="lower">{lower}</div>
                </div>
            </div>
        )
    }
}

export default class ActivitiesList extends Component {
    entries = {
        primary: {
            messages: {
                icon: iconSquareMessages,
                upper: 'Сообщения',
                lower: '+10'
            },
            friends: {
                icon: iconSquareFriends,
                upper: 'Друзья',
                lower: '+1'
            },
        },
        secondary: {
            videos: {
                icon: iconSquareVideo1,
                upper: 'Видео',
                lower: 'Профессионал'
            },
            surveys: {
                icon: iconSquareSurveys,
                upper: 'Опросы',
                lower: 'Любитель'
            },
            diary: {
                icon: iconSquareDiary,
                upper: 'Дневник',
                lower: 'Профессионал'
            },
            games: {
                icon: iconSquareJoystick1,
                upper: 'Игры',
                lower: 'Новичок'
            },
        },
    }

    render() {
        const primary = Object.keys(this.entries.primary).map(key =>
            <ActivityEntry
                icon={this.entries.primary[key].icon}
                upper={this.entries.primary[key].upper}
                lower={this.entries.primary[key].lower}
                key={key}
                short={!this.props.isDrawerOpen}
            />
        )

        const secondary = Object.keys(this.entries.secondary).map(key =>
            <ActivityEntry
                icon={this.entries.secondary[key].icon}
                upper={this.entries.secondary[key].upper}
                lower={this.entries.secondary[key].lower}
                key={key}
                short={!this.props.isDrawerOpen}
            />
        )

        return (
            <div className={'ActivitiesList ' + (!this.props.isDrawerOpen ? 'short' : '')}>
                <div className="primary">
                    {primary}
                </div>
                <div className="secondary">
                    {secondary}
                </div>
            </div>
        )
    }
}
