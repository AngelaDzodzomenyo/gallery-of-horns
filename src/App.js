
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import dataJson from './data.json';
import SelectedBeast from './selectedBeast.js';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data: dataJson,
      selectedBeast: {}
    }
  }

  toggleModal = (name) => {
    console.log('clicked');
    const selectedBeast = dataJson.find(beast => beast.title === name);
    this.setState({
      selectedBeast: selectedBeast,
      showModal: true,
    })
    // (this.state.showModal) ? this.setState({ showModal: false }) : this.setState({ showModal: true });
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <h1>This is the App Page</h1>
          <Header />
          <Main 
            toggleModal={this.toggleModal}
            data={this.state.data}
            
          /> 
          <SelectedBeast 
            selectedBeast={this.state.selectedBeast}
            showModal={this.state.showModal}
            handleClose={this.handleClose}
          />
         <Footer />

      </>
    );
  }
}




export default App;


