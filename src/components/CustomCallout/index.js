import * as PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { Callout } from 'react-native-maps'

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
        <Callout onPress={() => onPress(data.details)}>
            <Text>
                available: {data.available}
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
