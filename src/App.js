import { connect } from 'react-redux'
// connect is function decorator

function App(props) {
	const { testStore } = props
	console.log(testStore)

  return (
    <>
			<form onSubmit={() => false}>
				<input type="text"/>
				<button
					type="submit"
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
	dispatch => ({})
)(App);
