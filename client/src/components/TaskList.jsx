import React, { Component } from 'react';

export default class TaskList extends Component {
	constructor(props){
		super(props)

		this.state = {
			userInput: '',
			list: []
		}
	}

	changeUserInput(input){
		this.setState({
			userInput: input
		}, () => console.log(input))
	}

	addToList(input){
		let listArray = this.state.list
		!input=="" ? listArray.push(input) : alert("Please add a new task before submitting")
		this.setState({
			list: listArray,
			userInput: ''
		})
	}

	render() {
		return (
			<div>
				<center>
					<h1>Task Board</h1>
					<div>
						<input 
							placeholder="New task" 
							onChange={e => this.changeUserInput(e.target.value)}
							value={this.state.userInput} 
							type="text"
						/>
						<button onClick={ () => this.addToList(this.state.userInput)}>Add Task</button>
						<ul>
							{this.state.list.map( (val)=> <li>{val}</li>)}
						</ul>
					</div>
				</center>
			</div>
		)
	}
}
