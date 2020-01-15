/**
 * @format
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'
import Navigation from './src/navigation'
import { store } from './src/redux'

export default () => (
	<Provider store={store}>
		<Navigation />
	</Provider>
)
