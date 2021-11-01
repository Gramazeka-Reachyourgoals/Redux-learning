import { useRef } from 'react'
import { connect } from 'react-redux'
// connect is function decorator

function App(props) {
	const trackInput = useRef()
	const { testStore, onAddTrack } = props
	console.log(testStore)

	const addTrack = () => {
		onAddTrack(trackInput.current.value)
		trackInput.current.value = ''
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
			<ul>
				{testStore.map((track, index) =>
					<li key={index}>{track}</li>
				)}
			</ul>
    </>
  );
}

export default connect(
	state => ({
		testStore: state
	}), // 1st argue - mapStateToProps
	dispatch => ({
		// method onAddTrack will be available at props of component
		onAddTrack: (trackName) => {
			dispatch({ type: 'ADD_TRACK', payload: trackName })
		}
	}) // 2nd argue - mapDispatchToProps
)(App);
