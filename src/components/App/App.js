import { Component } from 'react'
import logo from '../../images/logo.svg'
import './App.scss'
import LeftFloatingDrawer from '../FloatingDrawer/LeftFloatingDrawer'
import RightFloatingDrawer from '../FloatingDrawer/RightFloatingDrawer'
import LogoWithTitle from '../LogoWithTitle/LogoWithTitle'
import LeftMenu from '../LeftMenu/LeftMenu'
import ActivitiesList from '../ActivitiesList/ActivitiesList'
import AccountDetailsContainer from '../AccountDetails/AccountDetailsContainer'

export default function App() {
	return (
		<div className="App">
			<LeftFloatingDrawer
				header={LogoWithTitle}
				content={LeftMenu}
			/>

			<RightFloatingDrawer
				header={props => <AccountDetailsContainer isDrawerOpen={props.isDrawerOpen} />}
				content={ActivitiesList}
				toggleIcon="segment"
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
