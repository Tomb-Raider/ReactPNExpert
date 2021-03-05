// taken from:
// https://usehooks.com/useWindowSize/

import {useState, useEffect} from 'react'

function getWindowSize() {
	return {
		width: window.innerWidth,
		height: window.innerHeight,
	}
}

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState(getWindowSize())

	useEffect(() => {
		const handleResize = _ => setWindowSize(getWindowSize())
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}
