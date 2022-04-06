import { Component } from 'react';
import './Display.styles.scss';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay() {
    this.setState((props) => ({ message: props.message, show: true }));
    setTimeout(() => {
      this.setState({ show: false });
    }, 1000);
  }

  render() {
    const { show, message } = { ...this.state, ...this.props };
    return <div id="display">{show && message}</div>;
  }
}

export default Display;
