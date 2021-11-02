const initialState = [
	'My home playlist',
	'My work playlist'
]

// reducer - function that takes state and action for change it, as argue
export default function playlist(state = initialState, action) {
	if (action.type === 'ADD_PLAYLIST'){
		return state
	} else if (action.type === 'DELETE_PLAYLIST'){
		return state
	}
	return state
}