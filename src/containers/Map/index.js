import StateService from '@kakadu-dev/base-frontend-helpers/services/StateService'
import * as PropTypes from 'prop-types'
import React, { Component } from 'react'
import { View } from 'react-native'
import MapView, {
	Marker,
	PROVIDER_GOOGLE,
} from 'react-native-maps'
import { CustomCallout } from '../../components'
import { SCREENS } from '../../constants'
import { styles } from './styles'

class Map extends Component
{
	state = {
		region: {
			latitude:       53.901366,
			longitude:      27.557350,
			latitudeDelta:  0.13,
			longitudeDelta: 0.13,
		},
	}

	componentDidMount()
	{
		const { getMarkers } = this.props

		getMarkers()
	}

	/**
	 * On press callout event
	 *
	 * @param {array} details
	 *
	 * @return {undefined}
	 */
	onPressCallout = details => {
		this.props.navigation.navigate(SCREENS.DETAILS, {
			details,
		})
	}

	render()
	{
		const { region }       = this.state
		const { markersState } = this.props

		const mapService = StateService.create(markersState)

		return (
			<View style={styles.container}>
				<MapView
					ref={r => {
						this.map = r
					}}
					provider={PROVIDER_GOOGLE}
					style={styles.map}
					initialRegion={region}
					region={region}
				>
					{mapService.getList().map(marker => {
						return (
							<Marker
								key={marker.id}
								identifier={`${marker.id}`}
								coordinate={marker.coordinate}
							>
								<CustomCallout
									onPress={this.onPressCallout}
									data={marker.callout}
								/>
							</Marker>
						)
					})}
				</MapView>
			</View>
		)
	}
}

Map.propTypes = {
	markersState: PropTypes.object,
	getMarkers:   PropTypes.func,
}

Map.defaultProps = {
	markersState: {},
	getMarkers:   () => null,
}

export { Map }
