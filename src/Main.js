import React from 'react';
import HornedBeasts from './HornedBeasts';
// import data from './data.json'
import HornForm from './HornForm.js';
import Container from 'react-bootstrap/Container';


let allNumbers = [0,1,2,3,9000];

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numbers: allNumbers,
    }
  }

  handleSelect = (selectHorns) => {
    let updatedNumbers;

    if(selectHorns === "one") {
      updatedNumbers = allNumbers.filter(number => number % 2 === 1);
    } else if (selectHorns === "two") {
      updatedNumbers = allNumbers.filter(number => number % 2 === 0);
    } else {
      updatedNumbers = allNumbers;
    }
    this.setState({
      numbers: updatedNumbers,
    });
  }
  








  render(){
    let hornedarr = [];

    this.props.data.forEach((horned,idx) => {
      hornedarr.push(
        <HornedBeasts key={idx} title={horned.title} image_url={horned.image_url} description={horned.description} toggleModal={this.props.toggleModal} />
      );
    })



    return (
      <Container>
      <HornForm onSelect={this.handleSelect}/>
      <h2>Horned Beasts and Where To Find Them</h2>
      {hornedarr}
      </Container>
    );
  }

}






export default Main;


/* <HornedBeasts title='TITLE1' imageURL ='https://images.unsplash.com/photo-1470688090067-6d429c0b2600?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'/>
<HornedBeasts title='TITLE2' imageURL ='https://images.unsplash.com/photo-1535082427395-4a20c7c7af88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'/> */