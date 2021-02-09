import { Component } from 'react'
import './LogoWithTitle.scss'
import logo from '../images/logo.svg'

export default class LogoWithTitle extends Component {
    render() {
        return (
            <div className="LogoWithTitle">
                <img src={logo} />
                <p>PN EXPERT</p>
            </div>
        )
    }
}
