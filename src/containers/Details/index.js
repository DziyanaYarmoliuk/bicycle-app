import React, { Component } from 'react'
import {
	Text,
	View,
} from 'react-native'
import { styles } from './styles'

class Details extends Component
{
	render()
	{
		const {navigation} = this.props

		const details = navigation.getParam('details')

		return (
			<View style={styles.container}>
				<View style={styles.calloutDetails}>
					{details.map((item, i) => {
						return (
							<View
								key={i}
								style={styles.row}
							>
								<View style={styles.rowItem}>
									<Text>
										🚲 {i}:
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
			</View>
		)
	}
}

export { Details }
