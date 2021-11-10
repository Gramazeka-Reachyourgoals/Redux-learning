const initialState = ''

// reducer - function that takes state and action for change it, as argue
export default function filterTracks(state = initialState, action) {
	if (action.type === 'FIND_TRACK'){
		return action.payload
	}
	return state
}