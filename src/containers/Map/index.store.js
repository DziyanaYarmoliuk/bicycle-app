import { connect } from 'react-redux'
import { Map } from './index'
import {
	mapDispatchToProps,
	mapStateToProps,
} from './index.props'

const MapStore = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Map)

export { MapStore }
