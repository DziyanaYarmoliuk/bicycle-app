import React, { Component } from 'react'
import {
    Text,
    View,
} from 'react-native'
import MapView, {
    Marker,
    PROVIDER_GOOGLE,
} from 'react-native-maps'
import { CustomCallout } from '../components'
import { markers } from './data'
import { styles } from './styles'

class Map extends Component
{
    state = {
        region:  {
            latitude:       53.901366,
            longitude:      27.557350,
            latitudeDelta:  0.13,
            longitudeDelta: 0.13,
        },
        details: [],
    }

    /**
     * On press callout event
     *
     * @param {array} details
     *
     * @return {undefined}
     */
    onPressCallout = details => {
        this.setState({details})
    }

    /**
     * Render details info
     *
     * @returns {boolean|*}
     */
    renderDetails = () => {
        const {details} = this.state

        return details.length > 0 && (
            <View style={styles.calloutDetails}>
                {details.map((item, i) => {
                    return (
                        <View
                            key={i}
                            style={styles.row}
                        >
                            <View style={styles.rowItem}>
                                <Text>
                                    {i}:
                                </Text>
                            </View>

                            <View style={styles.rowItem}>
                                <Text>
                                    battery: {item.battery}
                                </Text>
                            </View>

                            <View style={styles.rowItem}>
                                <Text>
                                    reservation: {item.reservation}
                                </Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }

    render()
    {
        const {region} = this.state

        return (
            <View style={styles.container}>
                <MapView
                    ref={r => {
                        this.map = r
                    }}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={region}
                    onPress={e => {
                        e.preventDefault()

                        this.setState({details: []})
                    }}
                >
                    {markers.map(marker => {
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

                {
                    this.renderDetails()
                }
            </View>
        )
    }
}

export { Map }
