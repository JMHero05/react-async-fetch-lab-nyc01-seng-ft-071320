import React from 'react'

class App extends React.Component {
	state = {
		astronauts: []
	}

	renderAstronauts = () => {
		return this.state.astronauts.map(astronaut => <div key={astronaut.name} >{astronaut.name}</div>)
	}
	
	render() {
		return (
			<div>
				<h1>Humans Currently in Space</h1>
				{this.renderAstronauts()}
			</div>
		)
	}

	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
				astronauts: data.people
			})
		})
	}
}

export default App