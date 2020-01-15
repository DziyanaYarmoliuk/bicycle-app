import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { SCREENS } from '../constants'
import { Details } from '../containers/Details'
import { MapStore } from '../containers/Map/index.store'

const AppNavigator = createStackNavigator({
	[SCREENS.MAP]:     MapStore,
	[SCREENS.DETAILS]: Details,
}, {
	initialRouteName: SCREENS.MAP,
})

export default createAppContainer(AppNavigator)
