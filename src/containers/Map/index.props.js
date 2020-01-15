import {
	DispatchSelector,
	StateSelector,
} from '../../redux/selectors'

const mapStateToProps = state => ({
	markersState: StateSelector.map.listMarkers(state),
})

const mapDispatchToProps = {
	getMarkers: DispatchSelector.map.listMarkers,
}

export {
	mapStateToProps,
	mapDispatchToProps,
}
