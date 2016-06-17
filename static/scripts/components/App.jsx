import React, {Component} from 'react';
import GetUserList from './GetUserList.jsx';
import PostUserForm from './PostUser.jsx';


const App = (props) => {
	return (
		<div>
			<h1>API RESTFull</h1>
			<PostUserForm />
			<GetUserList />
		</div>
	)
}

export default App;