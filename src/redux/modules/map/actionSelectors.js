import { MAP_ACTIONS } from './actionTypes'

export const MapStateSelectors = {
	listMarkers: state => state.map[MAP_ACTIONS.LIST_MARKERS],
}
