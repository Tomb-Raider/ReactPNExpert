import './App.scss'
import LeftExpandingDrawer from '../ExpandingDrawer/LeftExpandingDrawer'
import RightExpandingDrawer from '../ExpandingDrawer/RightExpandingDrawer'
import LogoWithTitle from '../LogoWithTitle/LogoWithTitle'
import LeftMenu from '../LeftMenu/LeftMenu'
import ActivitiesList from '../ActivitiesList/ActivitiesList'
import AccountDetailsContainer from '../AccountDetails/AccountDetailsContainer'
import Page from '../Page/Page'
import {Switch, Route} from 'react-router-dom'

import MainView from '../views/MainView'

export default function App(props) {
	let shift = ''

	if (props.leftDrawerOpen) {
		shift = 'left'
	} else if (props.rightDrawerOpen) {
		shift = 'right'
	}

	return (
		<div className="App">
			<header className={`space ${shift}`}>
				<LeftExpandingDrawer
					header={LogoWithTitle}
					content={LeftMenu}
				/>

				<div className="content">
					<div className="controls">
						<button
                            className="btn-flat waves-effect waves-dark text-black"
							onClick={props.toggleLeftDrawer}
 						>
                            <i className="material-icons">menu</i>
                        </button>
						<p></p>
						<button
                            className="btn-flat waves-effect waves-dark text-black"
							onClick={props.toggleRightDrawer}
                        >
                            <i className="material-icons">segment</i>
                        </button>
					</div>

					<Switch>
						<Route path="/account">
							<Page>
								<p className="flow-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi leo, faucibus id lectus eget, luctus gravida enim. Suspendisse libero risus, efficitur eget ipsum cursus, tincidunt semper risus. Aenean suscipit faucibus ante, elementum faucibus libero condimentum sit amet. Aliquam ante lacus, tristique in nibh in, iaculis suscipit leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus rutrum suscipit laoreet. Aliquam erat volutpat. Donec maximus quam nec auctor volutpat.

									Fusce semper ac metus eu egestas. Donec efficitur, augue nec imperdiet aliquam, odio augue efficitur libero, eu ornare felis mauris in lectus. Praesent a ex vehicula, blandit mi ac, suscipit nisl. Suspendisse pellentesque nec mauris eleifend suscipit. Vivamus eu mauris tellus. Curabitur et orci enim. Donec eget placerat sapien, at cursus leo. Nunc egestas sem vitae lobortis efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta faucibus arcu id mollis. Suspendisse lobortis ultrices condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eget porttitor urna. Sed euismod commodo quam at tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam imperdiet maximus magna, non suscipit quam tempor iaculis.

									Donec orci augue, ullamcorper vel tincidunt sit amet, dignissim nec mi. In a libero ornare, blandit diam eu, commodo nibh. Quisque dolor est, fermentum at turpis ut, accumsan pellentesque ante. Proin pulvinar turpis leo, ac condimentum velit lacinia at. Maecenas porttitor, ipsum ut consequat congue, orci dolor blandit nulla, quis mattis tellus nisl in quam. In ultrices interdum purus sit amet dictum. Cras ac nunc ligula. Ut ultrices suscipit nunc, sed consectetur mi sollicitudin id. Vivamus risus felis, tristique at condimentum id, faucibus quis eros. Nam tempor elit ut laoreet ullamcorper. Proin ornare ullamcorper quam eu placerat. Donec at commodo ex. Nullam blandit dapibus consectetur. Nam accumsan, tortor id cursus ullamcorper, nunc arcu imperdiet felis, id feugiat mauris quam a tellus.

									Duis tortor velit, consectetur ut nibh et, ullamcorper laoreet eros. Nam tellus lacus, hendrerit sed quam non, laoreet lobortis nisi. Maecenas eget leo quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec a sapien purus. Donec id facilisis velit. Pellentesque vitae enim consequat, accumsan elit at, ultricies arcu. Nullam vehicula tellus ut tortor tincidunt, non venenatis diam posuere. Nulla felis lacus, lobortis nec pharetra ac, tincidunt sit amet augue. Phasellus vehicula auctor lorem at pellentesque. Vestibulum congue nunc sed neque pulvinar porta. Vestibulum luctus enim sem, ut tincidunt erat egestas sit amet. Phasellus turpis dui, rhoncus vitae egestas in, viverra a elit. Interdum et malesuada fames ac ante ipsum primis in faucibus.

									Donec vitae enim quis lectus ultrices ultrices at vitae dui. Suspendisse a mi urna. Nulla convallis velit vel tortor interdum, eget molestie metus fermentum. Sed aliquet tempus libero, id malesuada sapien. In hac habitasse platea dictumst. Cras massa mi, condimentum non nisi sed, fermentum eleifend eros. Etiam sagittis malesuada ipsum, sit amet feugiat risus luctus eu. Proin eget nibh non ligula vehicula efficitur.
								</p>
							</Page>
						</Route>
						<Route path="/main">
							<Page>
								<MainView />
							</Page>
						</Route>
						<Route path="/">
							<Page>
								<MainView />
							</Page>
						</Route>
					</Switch>
				</div>

				<RightExpandingDrawer
					header={props => <AccountDetailsContainer isDrawerOpen={props.isDrawerOpen} />}
					content={ActivitiesList}
					toggleIcon="segment"
				/>
			</header>


			{/* <header className="App-header">
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
			</header> */}
		</div>
	)
}
