import { wp } from '@kakadu-dev/base-frontend-helpers/helpers/Responsive'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    calloutDetails: {
        position:        'absolute',
        borderRadius:    6,
        borderWidth:     .7,
        borderColor:     'black',
        bottom:          10,
        width:           wp(100) - 20,
        padding:         10,
        left:            10,
        right:           10,
        backgroundColor: 'white',
    },
    container:      {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems:     'center',
    },
    map:            {
        ...StyleSheet.absoluteFillObject,
    },
    row:            {
        flexDirection: 'row',
    },
    rowItem:        {
        padding: 4,
    },
})

export {
    styles,
}
