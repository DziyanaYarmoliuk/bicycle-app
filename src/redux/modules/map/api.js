import { callApi } from '../fetch'

export const MapApi = {
	listMarkers: searchQuery => callApi('/list-markers', searchQuery),
}
