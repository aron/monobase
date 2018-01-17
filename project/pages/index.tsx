import * as React from "react"

import Template from "components/Template"
import Timer from "components/Timer"
import Button from "components/Button"
import MouseLocation from "components/MouseLocation"
import CSSComponent from "components/CSSComponent"
import Colors from "components/Colors"

function Example(props) {
	return (
		<section
			style={{
				textAlign: "center",
				padding: 100
			}}
		>
			<h3
				style={{
					fontSize: 20,
					fontWeight: 700,
					margin: 0,
					paddingBottom: 40,
					lineHeight: 1
				}}
			>
				{props.title}
			</h3>
			<div style={{textAlign: "center"}}>{props.children}</div>
		</section>
	)
}

function render(project) {
	return (
		<Template project={project}>
			<span style={{textAlign: "center"}}>
				<section style={{padding: "60px"}}>
					<h1>Welcome to Monobase</h1>
					<p>A simple React based static site generator</p>
				</section>
				<Example title="Button">
					<Button />
				</Example>
				<Example title="Mouse Location">
					<MouseLocation />
				</Example>
				<Example title="Time">
					<Timer />
				</Example>
				<Example title="Enter a color name">
					<Colors />
				</Example>
				<Example title="CSS Component">
					<CSSComponent />
				</Example>
			</span>
		</Template>
	)
}

export default render
