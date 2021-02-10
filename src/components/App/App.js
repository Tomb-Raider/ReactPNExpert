import { Component } from 'react'
import logo from '../../images/logo.svg'
import './App.scss'
import FloatingDrawer from '../FloatingDrawer/FloatingDrawer'
import LogoWithTitle from '../LogoWithTitle/LogoWithTitle'
import LeftMenu from '../LeftMenu/LeftMenu'
import IconWith2Titles from '../IconWith2Titles/IconWith2Titles'
import nika from '../../images/nika.png'

export default function App() {
	return (
		<div className="App">
			<FloatingDrawer
				header={LogoWithTitle}
				content={LeftMenu}
				side="left"
			/>

			<FloatingDrawer
				header={_ => <IconWith2Titles icon={nika} upper="Вероника Малышева" lower="Санкт-Петербург" />}
				side="right"
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
