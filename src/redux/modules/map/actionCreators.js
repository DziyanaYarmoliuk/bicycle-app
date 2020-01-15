import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { MAP_ACTIONS } from './actionTypes'

export const MapActions = {
	listMarkers: RequestActionHelper.getActionCreatorFetch(MAP_ACTIONS.LIST_MARKERS),
}
