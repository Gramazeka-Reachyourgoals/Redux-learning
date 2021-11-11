let mockApiData = [
	{
		id: 1,
		name: 'Metallica'
	},
	{
		id: 2,
		name: 'Horny'
	},
	{
		id: 3,
		name: 'Bum bam'
	},
	{
		id: 4,
		name: 'Holyywood'
	},
]

// getTracks function is action creator
const getTracks = () => dispatch => {
	setTimeout(() => {
		console.log(`I've got tracks`)
		dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
	}, 2000)
}

export default getTracks