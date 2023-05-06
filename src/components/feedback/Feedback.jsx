import { Component } from "react";

export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      handleClick = (e) => {
        const option = e.target.innerText;
        return this.setState(prevState => { return {[option]: prevState[option] + 1}})  
    }

      render () {
        const options = Object.keys(this.state);

        return (
            <>
            <h2>Please leave feedback</h2>
            <ul>
                {options.map(option => <li key={option}>
            <button onClick={this.handleClick}>{option}</button>
        </li>)}
            </ul>
            <h2>Statistics</h2>
            <ul>
                {options.map(option => <li key={option}>
            <span>{option}: {this.state[option]}</span>
        </li>)}
            </ul>
            </>
        )
      }
}
