import React from 'react';
import ReactDOM from 'react-dom';
import sampleText from './SampleText.js';
import Header from './Header.js';
import axios from 'axios';

// const Paragraph = ({ task: taskDescription }) {
class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task,
    };
  }

  componentWillMount() {
    // Get the task info from the API
    console.log(this.state)
    axios.get(`/tasks/${this.state.task.id}`).then(result => {
      this.setState((prevState, props) => {
        console.log('Successfully fetched!', result);
        return {task: result.data};
      });
    });
  }

  render() {
    return (
      <div class="ui main text container">
        <h1 class="ui header">Task Title: {`this.state.task.title`}</h1>
        <Header userIsLoggedIn={true} />
        <a href={`/tasks/${this.state.task.id}`} className="button">
          Apply!
        </a>
      </div>
    );
  }
}

export default TaskDetails;
