import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { MAP_ACTIONS } from './actionTypes'

const ACTIONS = {
	...MAP_ACTIONS,
	[MAP_ACTIONS.LIST_MARKERS]: [MAP_ACTIONS.LIST_MARKERS, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))
