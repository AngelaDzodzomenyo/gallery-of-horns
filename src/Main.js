import React from 'react';
import HornedBeasts from './HornedBeasts';
// import data from './data.json'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    let hornedarr = [];

    this.props.data.forEach((horned,idx) => {
      hornedarr.push(
        <HornedBeasts key={idx} title={horned.title} image_url={horned.image_url} description={horned.description} toggleModal={this.props.toggleModal} />
      );
    })



    return (
      <>
      <h2>Horned Beasts and Where To Find Them</h2>
      {hornedarr}
      </>
    );
  }

}

export default Main;


/* <HornedBeasts title='TITLE1' imageURL ='https://images.unsplash.com/photo-1470688090067-6d429c0b2600?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'/>
<HornedBeasts title='TITLE2' imageURL ='https://images.unsplash.com/photo-1535082427395-4a20c7c7af88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'/> */