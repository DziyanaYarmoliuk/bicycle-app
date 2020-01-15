import { wp } from '@kakadu-dev/base-frontend-helpers/helpers/Responsive'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:      {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems:     'center',
    },
    map:            {
        ...StyleSheet.absoluteFillObject,
    },
})

export {
    styles,
}
