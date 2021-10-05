
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import dataJson from './data.json';
import SelectedBeast from './selectedBeast.js';
import './App.css';
import HornedBeasts from './HornedBeasts.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data: dataJson,
      selectedBeast: {},
      filteredData: dataJson
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

  handleSelect = (event) => {
    let updatedNumbers = this.state.data.filter(beast => {
      if(event.target.value === "all") {
        return beast; 
      } else if (event.target.value === '9000'){
        return beast.horns === 100;
      } else {
        return beast.horns === parseInt(event.target.value)
      }
    });

    this.setState({
      filteredData: updatedNumbers,
    });
  }

  render() {
    return (
      <>
        <h1>This is the App Page</h1>
          <Header />
          <Main 
            toggleModal={this.toggleModal}
            data={this.state.data}
            filteredData={this.state.filteredData}
            handleSelect={this.handleSelect}
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


