import React from "react"
import styled from "styled-components"
import { getAnswer } from "./api"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Ball = styled.div`
  background: black;
  height: 350px;
  width: 350px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    #777,
    #555 15%,
    #333 35%,
    #000
  );

  display: flex;
  justify-content: center;
  align-items: center;
`

const Display = styled.div`
  width: 35%;
  height: 35%;
  border-radius: 50%;

  background: #00001a;
  box-shadow: 0 0 8px #999 inset;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
`

const Answer = styled.div`
  color: white;
  text-align: center;
`

const Title = styled.div`
  font-size: 50px;
  margin-bottom: 10px;
`

const Caption = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  color: palevioletred;
  margin-bottom: 10px;
`

const Button = styled.button<{ disabled: boolean }>`
  margin-top: 20px;
  padding: 10px 20px;
  background: none;
  border-radius: 5px;
  border: 1px solid ${({ disabled }) => (disabled ? "grey" : "palevioletred")};
  color: ${({ disabled }) => (disabled ? "grey" : "palevioletred")};
  font-size: 30px;
`

type State = {
  answer: string
}

class App extends React.Component {
  state: State = {
    answer: "Shake me",
  }

  render() {
    return (
      <Container>
        <Title>Magic 🎱 Ball</Title>
        <Caption>Ask a question then shake the ball.</Caption>

        <Ball>
          <Display>
            <Answer>{this.state.answer}</Answer>
          </Display>
        </Ball>

        <Button
          disabled={false}
          onClick={() => {
            getAnswer().then(answer => this.setState({ answer }))
          }}
        >
          Shake
        </Button>
      </Container>
    )
  }
}

export default App
