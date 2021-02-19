import { Component } from 'react'
import logo from '../../images/logo.svg'
import './App.scss'
import FloatingDrawer from '../FloatingDrawer/FloatingDrawer'
import LogoWithTitle from '../LogoWithTitle/LogoWithTitle'
import LeftMenu from '../LeftMenu/LeftMenu'
import ActivitiesList from '../ActivitiesList/ActivitiesList'
import AccountDetailsContainer from '../AccountDetails/AccountDetailsContainer'

export default function App() {
	return (
		<div className="App">
			<FloatingDrawer
				header={LogoWithTitle}
				content={LeftMenu}
				side="left"
				localStorageKey="left_drawer"
			/>

			<FloatingDrawer
				header={props => <AccountDetailsContainer isDrawerOpen={props.isDrawerOpen} />}
				content={ActivitiesList}
				side="right"
				toggleIcon="segment"
				localStorageKey="right_drawer"
			/>

			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}
