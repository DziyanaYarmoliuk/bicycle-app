import * as PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { Callout } from 'react-native-maps'

import { styles } from './styles'
/**
 * Render callout
 *
 * @param {object} data
 * @param {function} onPress
 *
 * @returns {*}
 * @constructor
 */
const CustomCallout = ({data, onPress}) => {
    return (
        <Callout style={styles.container} onPress={() => onPress(data.details)}>
			<Text style={styles.availText}>
				 {data.available}🚲
			</Text>
			<Text style={styles.buttonText}>
				details →
			</Text>
        </Callout>
    )
}

CustomCallout.propTypes = {
    data:    PropTypes.object,
    onPress: PropTypes.func,
}

CustomCallout.defaultProps = {
    data:    {},
    onPress: () => null,
}

export { CustomCallout }
