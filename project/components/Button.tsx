import * as React from "react"
import {Dynamic} from "monobase"
import {pill} from "theme"

const style: React.CSSProperties = {
	...pill,
	background: "#0AF",
	color: "#FFF"
}

class Button extends React.Component<{}, {count: number}> {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	onClick = () =>
		this.setState(({count}) => ({
			count: count + 1
		}))

	render() {
		return (
			<button style={style} onClick={this.onClick}>
				Count: {this.state.count}
			</button>
		)
	}
}

export default Dynamic(Button)
