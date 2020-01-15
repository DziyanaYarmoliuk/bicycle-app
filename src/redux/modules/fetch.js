import SearchQuery from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider/SearchQuery'
import _ from 'lodash'
import { SETTINGS } from '../../constants/base'

/**
 * Get full request
 *
 * @param {string} endpoint
 * @param {object} options
 * @param {object} customParams
 *
 * @return {Promise<{response: {response: Response, json: any}} | {error: (*|string)}>}
 */
async function callApiEndpoint(endpoint, options, customParams = {})
{
	const { returnRequest, cacheResponse, saveAuth } = customParams

	// Complete url address
	const fullUrl = (endpoint.indexOf('http') === -1)
		? (SETTINGS.API_URL + endpoint)
		: endpoint

	// Default request headers
	const defaultOptions = {
		method:  'GET',
		headers: {
			'Accept':       '*/*',
			'Content-Type': 'application/json',
		},
	}

	// Merge default headers with custom headers
	const requestOptions = _.merge(defaultOptions, options)

	if (requestOptions.body) {
		if (['get', 'head'].includes(requestOptions.method.toLowerCase())) {
			delete requestOptions.body
		} else {
			requestOptions.body = JSON.stringify(requestOptions.body)
		}
	}

	// Request
	const response = await fetch(fullUrl, requestOptions)

	let body = null

	try {
		const isJson = (response && response.headers && response.headers.get('content-type') || '')
			.includes('json')

		if (isJson) {
			body = await response.json()
		} else {
			const isBlob = (
							   response
							   && response.headers
							   && response.headers.get('content-disposition') || ''
						   ).length > 0

			body = isBlob
				? await response.blob()
				: await response.text()
		}
	} catch (e) {
		//
	}

	const result = {
		result: body,
		error:  !response.ok,
		response,
	}

	return result
}

/**
 * Make request and preprocessing response
 *
 * @param {string} endpoint
 * @param {SearchQuery|object} options
 *
 * @return {IterableIterator<Promise<{response: {response: Response, json: any}}|{error: (*|string)}>|*>}
 */
export function* callApi(endpoint, options)
{
	const dataProvider = (options instanceof SearchQuery)
		? options
		: DataProvider.buildQuery().addRequestOptions(options)

	// Remove end slash if exist and add get params
	const resultEndpoint = endpoint.replace(/\/$/, '') + dataProvider.buildUrlParams()
	const customParams   = dataProvider.getCustomParams()

	const result = yield callApiEndpoint(resultEndpoint, dataProvider.getRequestOptions(), customParams)

	return result
}
