import React, {Component} from 'react';
import axios from 'axios';


export default class GetUserList extends Component {

	constructor(props) {
		super(props);

		this.state = {}
		this.getUsersFromAPI = this.getUsersFromAPI.bind(this);
	}


	getUsersFromAPI() {
		axios.get('/api/users/?format=json')
			.then((response) => {
				this.setState(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	componentDidMount() {

		setInterval(() => {
			this.getUsersFromAPI();	
		}, 1000)
	}

	render() {
		let usuarios = this.state.results || [];

		return(
			<div>
				<p>Usuários: {this.state.count}</p>

				<h2>Lista de usuários:</h2>
				<ul>
					{usuarios.map((usuario) => <li>{usuario.username}</li>)}
				</ul>

			</div>
		)
	}
}