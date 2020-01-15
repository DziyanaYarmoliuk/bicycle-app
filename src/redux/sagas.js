import { all } from 'redux-saga/effects'
import MapSagas from './modules/map/sagas'

export function* watcherSaga()
{
	yield all(
		[
			...MapSagas,
		],
	)
}
