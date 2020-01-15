module.exports = {
	root:    true,
	extends: '@react-native-community',
	rules:   {
		'semi':                   [
			'error',
			'never',
		],
		'camelcase':              [
			0,
		],
		'indent':                 [
			'error',
			'tab',
			{
				'SwitchCase': 1,
			},
		],
		'no-tabs':                0,
		'react/jsx-indent':       [
			1,
			'tab',
		],
		'react/jsx-indent-props': [
			1,
			'tab',
		],
		'linebreak-style':        [
			0,
			'unix',
		],
	}
}
