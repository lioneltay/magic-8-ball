import React from "react"
import styled, { keyframes, css } from "styled-components"
import { Spring } from "react-spring"
import { getAnswer } from "./api"

function wait(ms: number): Promise<void> {
  return new Promise(res => setTimeout(res, ms))
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Ball = styled.div<{ shaking: boolean }>`
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

  animation: ${({ shaking }) =>
    shaking
      ? css`
          ${shake} 1000ms
        `
      : "none"};
`

const shake = keyframes`
 10%, 90% { transform: translateX(-2px); }
 20%, 80% { transform: translateX(4px); }
 30%, 50%, 70% { transform: translateX(-8px); }
 40%, 60% { transform: translateX(8px); }
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
  margin-bottom: 15px;
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
  answering: boolean
}

class App extends React.Component {
  state: State = {
    answer: "Shake me",
    answering: false,
  }

  getAnswer = async () => {
    this.setState({ answering: true })

    // Wait atleast 1 second before showing the answer (pretend like the ball is thinking)
    const [answer] = await Promise.all([getAnswer(), wait(1000)])

    this.setState({ answer, answering: false })
  }

  render() {
    return (
      <Container>
        <Title>Magic 🎱 Ball</Title>
        <Caption>Ask a question then shake the ball.</Caption>

        <Ball shaking={this.state.answering}>
          <Display>
            <Spring
              from={{ opacity: 1 }}
              to={{ opacity: this.state.answering ? 0 : 1 }}
            >
              {style => <Answer style={style}>{this.state.answer}</Answer>}
            </Spring>
          </Display>
        </Ball>

        <Button disabled={this.state.answering} onClick={this.getAnswer}>
          Shake
        </Button>
      </Container>
    )
  }
}

export default App
