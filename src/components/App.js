import { Component } from 'react'
import logo from './../images/logo.svg'
import './App.scss'
import './FloatingDrawerLeft'
import FloatingDrawerLeft from './FloatingDrawerLeft'
import LogoWithTitle from './LogoWithTitle'
import LeftMenu from './LeftMenu'

export default function App() {
	return (
		<div className="App">
			<FloatingDrawerLeft
				header={LogoWithTitle}
				content={LeftMenu}
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
