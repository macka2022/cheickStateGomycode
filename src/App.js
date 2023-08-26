
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'Ahmadou Diallo',
      bio: 'Web Developer',
      imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.TohZyDCFdLYcHXNYJyDjyQHaHa&pid=Api&P=0&h=180',
      profession: 'Full Stack Engineer',
      show: false,
      mountTime: 0,
    };
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountTime: prevState.mountTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession, show, mountTime } = this.state;

    return (
      <div>
        <h1>Profile App</h1>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Mounted time: {mountTime} seconds</p>
      </div>
    );
  }
}

export default App;
