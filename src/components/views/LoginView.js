import React, { Component } from 'react'
import './LoginView.scss'
import FloatingBlock from '../widgets/FloatingBlock'
import M from 'materialize-css'
import {call} from '../../api'

export default class LoginView extends Component {
    state = {
        wantsToLogin: true,
        isWaiting: false,
    }

    toggleLoginRegister = () => {
        this.setState(oldState => {
            return {
                ...oldState,
                wantsToLogin: !oldState.wantsToLogin,
            }
        })
    }

    startWaiting = () => {
        this.setState(oldState => {
            return {
                ...oldState,
                isWaiting: true,
            }
        })
    }

    stopWaiting = () => {
        this.setState(oldState => {
            return {
                ...oldState,
                isWaiting: false,
            }
        })
    }

    toastErrors = (errors) => {
        for (let each of errors) {
            M.toast({ html: `${each}` })
        }
    }

    showNotifications = (data) => {
        this.toastErrors(data.non_field_errors || [])
        this.toastErrors(data.username || [])
        this.toastErrors(data.password || [])
        this.toastErrors(data.password1 || [])
        this.toastErrors(data.password2 || [])
        this.toastErrors(data.email || [])

        if (data.detail) {
            M.toast({ html: data.detail })
        }
    }

    authenticate = (token) => {
        call('user').authenticate(token).get()
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.props.authenticate(token, {
                    firstName: data.first_name || null,
                    lasName: data.last_name || null,
                    avatar: null,
                    location: 'Санкт-Петербург',
                })
            })
            .catch(error => {
                console.log(error)
                M.toast({ html: 'Ошибка :(' })
            })
    }

    logIn = (username, password) => {
        this.startWaiting()

        call('login').post({
            username: username,
            password: password,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.showNotifications(data)

                if (data.key) {
                    this.authenticate(data.key)
                }
            })
            .catch(error => {
                console.log(error)
                M.toast({ html: 'Ошибка :(' })
            })
            .finally(_ => {
                this.stopWaiting()
            })
    }

    loginUsername = React.createRef()
    loginPassword = React.createRef()

    getLoginPopup = () => {
        const disabled = this.state.isWaiting

        return (
            <FloatingBlock color="white" className="popup">
                <p className="title">ВОЙТИ</p>

                <form>
                    <div className="input-field">
                        <label htmlFor="loginUsername">Логин</label>
                        <input type="text" id="loginUsername" ref={this.loginUsername} disabled={disabled} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="loginPassword">Пароль</label>
                        <input
                            type="password"
                            id="loginPassword"
                            ref={this.loginPassword}
                            disabled={disabled}
                            onKeyDown={ e => {
                                if (e.key == 'Enter') {
                                    this.logIn(this.loginUsername.current.value, this.loginPassword.current.value)
                                }
                            }}
                        />
                    </div>
                </form>

                <button
                    className="btn-large waves-effect waves-dark"
                    disabled={disabled}
                    onClick={ _ => this.logIn(this.loginUsername.current.value, this.loginPassword.current.value) }
                >
                    ВХОД
                </button>

                <p className="comment">Нет аккаунта?</p>

                <button
                    className="btn-flat waves-effect waves-dark secondary-option"
                    disabled={disabled}
                    onClick={this.toggleLoginRegister}
                >
                    Регистрация
                </button>
            </FloatingBlock>
        )
    }

    register = (username, email, password, password2) => {
        this.startWaiting()

        call('registration').post({
            username: username,
            email: email,
            password1: password,
            password2: password2,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.showNotifications(data)

                if (data.detail) {
                    this.toggleLoginRegister()
                }
            })
            .catch(error => {
                console.log(error)
                M.toast({ html: 'Ошибка :(' })
            })
            .finally(_ => {
                this.stopWaiting()
            })
    }

    registerUsername = React.createRef()
    registerEmail = React.createRef()
    registerPassword = React.createRef()
    registerPassword2 = React.createRef()

    getRegisterPopup = () => {
        const disabled = this.state.isWaiting

        return (
            <FloatingBlock color="white" className="popup">
                <p className="title">РЕГИСТРАЦИЯ</p>

                <form>
                    <div className="input-field">
                        <label htmlFor="registerUsername">Логин</label>
                        <input type="text" id="registerUsername" ref={this.registerUsername} disabled={disabled} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="registerEmail">Email</label>
                        <input type="text" id="registerEmail" ref={this.registerEmail} disabled={disabled} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="registerPassword">Пароль</label>
                        <input type="password" id="registerPassword" ref={this.registerPassword} disabled={disabled} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="registerPassword2">Пароль еще раз</label>
                        <input
                            type="password"
                            id="registerPassword2"
                            ref={this.registerPassword2}
                            disabled={disabled}
                            onKeyDown={ e => {
                                if (e.key == 'Enter') {
                                    this.register(
                                        this.registerUsername.current.value,
                                        this.registerEmail.current.value,
                                        this.registerPassword.current.value,
                                        this.registerPassword2.current.value
                                    )
                                }
                            }}
                        />
                    </div>
                </form>

                <button
                    className="btn-large waves-effect waves-dark"
                    disabled={disabled}
                    onClick={ _ => this.register(this.registerUsername.current.value, this.registerPassword.current.value, this.registerPassword2.current.value) }
                >ЗАРЕГИСТРИРОВАТЬСЯ
                </button>

                <p className="comment">Уже есть аккаунт?</p>

                <button
                    className="btn-flat waves-effect waves-dark secondary-option"
                    disabled={disabled}
                    onClick={this.toggleLoginRegister}
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
