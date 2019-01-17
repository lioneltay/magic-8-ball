import React, { Component } from "react"
import { getAnswer } from "./api"

type State = {
  answer: string
}

class App extends Component {
  state: State = {
    answer: "",
  }

  componentDidMount() {
    getAnswer().then(answer => this.setState({ answer }))
  }

  render() {
    return (
      <div>
        <h1>Clean Slate</h1>
        <div>{this.state.answer}</div>
      </div>
    )
  }
}

export default App
