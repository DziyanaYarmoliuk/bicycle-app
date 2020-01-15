import { MapActions } from './modules/map/actionCreators'
import { MapStateSelectors } from './modules/map/actionSelectors'

export const StateSelector = {
	map: MapStateSelectors,
}

export const DispatchSelector = {
	map: MapActions,
}
