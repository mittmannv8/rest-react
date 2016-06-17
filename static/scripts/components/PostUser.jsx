import React, {Component} from 'react';
import axios from 'axios';


export default class PostUserForm extends Component {

	constructor(props) {
		super(props);

		this.cadastrarUser = this.cadastrarUser.bind(this);
	}

	cadastrarUser() {
		let username = this.refs.username;
		let data_nasc = this.refs.data_nasc;
		let email = this.refs.email;
		let descricao = this.refs.descricao;

		axios.post('/api/users/', {
		    "username": username.value,
		    "email": email.value,
		    "data_nasc": data_nasc.value,
		    "descricao": descricao.value,
		})
		.then(function (response) {
			username.value = '';
			data_nasc.value = '';
			email.value = '';
			descricao.value = '';
		})
		.catch(function (error) {
			console.log(error);
		});
	}


	render() {

		return (
			<div>
				<h2>Novo usuário</h2>
				<form className="pure-form pure-form-stacked" action="#">
					<label>username: </label>
					<input type="text" ref="username" />
					<label>email: </label>
					<input type="text" ref="email" />
					<label>data de nascimento: </label>
					<input type="date" ref="data_nasc" />
					<label>descrição: </label>
					<textarea ref="descricao"></textarea>

					<button onClick={this.cadastrarUser} className="pure-button">Cadastrar</button>
				</form>
			</div>
		)
	} 
}