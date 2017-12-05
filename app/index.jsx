import React from "react"

class Test extends React.Component {
	render () {
		return (
			<div>
				<h1>Hi u {this.props.m}</h1>
			</div>
		)
	}
}

export default Test