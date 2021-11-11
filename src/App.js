import { useRef } from 'react'
import { connect } from 'react-redux'
// connect is function decorator
import getTracks from './actions/tracks'

function App(props) {
	const trackInput = useRef()
	const searchInput = useRef()
	const { tracks, onAddTrack, onFindTrack, onGetTracks } = props // gets from connect(App) as props

	const addTrack = () => {
		onAddTrack(trackInput.current.value)
		trackInput.current.value = ''
	}

	const findTrack = () => {
		onFindTrack(searchInput.current.value)
	}

  return (
    <>
			<form onSubmit={e => e.preventDefault()}>
				<input type="text" ref={trackInput}/>
				<button
					type="submit"
					onClick={addTrack}
				>
					Add track
				</button>
			</form>
			<form onSubmit={e => e.preventDefault()}>
				<label htmlFor="search">Find a track </label>
				<input
					id='search'
					type="text"
					ref={searchInput}
					onChange={findTrack}
				/>
			</form>
			<button
				onClick={onGetTracks}
			>
				Get tracks
			</button>
			<ul>
				{tracks.map((track, index) =>
					<li key={index}>{track.name}</li>
				)}
			</ul>
    </>
  );
}

export default connect(
	state => ({
		tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
		// we can get from state modified data
	}), // 1st argue - mapStateToProps
	dispatch => ({
		// method onAddTrack will be available at props of component
		onAddTrack: (name) => {
			const payload = {
				id: Date.now().toString(),
				name
			}
			dispatch({ type: 'ADD_TRACK', payload })
		},
		onFindTrack: (name) => {
			dispatch({ type: 'FIND_TRACK', payload: name })
		},
		onGetTracks: () => {
			dispatch(getTracks()) // getTracks() is thunk/action creator
		}
	}) // 2nd argue - mapDispatchToProps
)(App);
