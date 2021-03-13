import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import AppContainer from './components/App/AppContainer'
import reportWebVitals from './reportWebVitals'
import M from 'materialize-css'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AppContainer />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

M.AutoInit()

window.store = store

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
