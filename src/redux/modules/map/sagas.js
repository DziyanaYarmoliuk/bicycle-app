import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { MAP_ACTIONS } from './actionTypes'
import { MapApi } from './api'

/**
 * Get map markers
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|CallEffect|PutEffect<{type}>|PutEffect<{countries, type}>>}
 */
function* listMarkers(action)
{
	yield SagasHelper.defaultList(action, MapApi.listMarkers)
}

export default [
	takeLatest(MAP_ACTIONS.LIST_MARKERS, listMarkers),
]
