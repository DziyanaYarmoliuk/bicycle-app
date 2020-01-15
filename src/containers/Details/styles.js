import { wp } from '@kakadu-dev/base-frontend-helpers/helpers/Responsive'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    calloutDetails: {
        width:           wp(100) - 20,
    },
    container:      {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-start',
        alignItems:     'center',
		paddingTop: 30,
    },
    row:            {
        flexDirection: 'row',
    },
    rowItem:        {
        padding: 4,
		paddingBottom: 10,
    },
})

export {
    styles,
}
