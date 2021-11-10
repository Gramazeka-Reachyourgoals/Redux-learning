const initialState = []

// reducer - function that takes state and action for change it, as argue
export default function tracks(state = initialState, action) {
	if (action.type === 'ADD_TRACK'){
		return [
			...state,
			action.payload
		]
	} else if (action.type === 'DELETE_TRACK'){
		return state
	}
	return state
}