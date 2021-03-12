import { Component } from 'react'
import './LoginView.scss'
import FloatingBlock from '../widgets/FloatingBlock'

export default class LoginView extends Component {
    state = {
        wantsToLogin: true,
    }

    toggleState = () => {
        this.setState(oldState => {
            return {
                ...oldState,
                wantsToLogin: !oldState.wantsToLogin,
            }
        })
    }

    getLoginPopup = () => {
        return (
            <FloatingBlock color="white" className="popup">
                <p className="title">ВОЙТИ</p>

                <form>
                    <div className="input-field">
                        <label htmlFor="loginUsername">Логин</label>
                        <input type="text" id="loginUsername" />
                    </div>

                    <div className="input-field">
                        <label htmlFor="loginPassword">Пароль</label>
                        <input type="password" id="loginPassword" />
                    </div>
                </form>

                <button className="btn-large waves-effect waves-dark">ВХОД</button>

                <p className="comment">Нет аккаунта?</p>

                <button
                    className="btn-flat waves-effect waves-dark secondary-option"
                    onClick={this.toggleState}
                >
                    Регистрация
                </button>
            </FloatingBlock>
        )
    }

    getRegisterPopup = () => {
        return (
            <FloatingBlock color="white" className="popup">
                <p className="title">РЕГИСТРАЦИЯ</p>

                <form>
                    <div className="input-field">
                        <label htmlFor="registerUsername">Логин</label>
                        <input type="text" id="registerUsername" />
                    </div>

                    <div className="input-field">
                        <label htmlFor="registerPassword">Пароль</label>
                        <input type="password" id="registerPassword" />
                    </div>

                    <div className="input-field">
                        <label htmlFor="registerPassword2">Пароль еще раз</label>
                        <input type="password" id="registerPassword2" />
                    </div>
                </form>

                <button className="btn-large waves-effect waves-dark">ЗАРЕГИСТРИРОВАТЬСЯ</button>

                <p className="comment">Уже есть аккаунт?</p>

                <button
                    className="btn-flat waves-effect waves-dark secondary-option"
                    onClick={this.toggleState}
                >
                    Вход
                </button>
            </FloatingBlock>
        )
    }

    getPopup = () => {
        if (this.state.wantsToLogin) {
            return this.getLoginPopup()
        }

        return this.getRegisterPopup()
    }

    render() {
        const popup = this.getPopup()

        return (
            <div className="LoginView">
                {popup}
			</div>
        )
    }
}
