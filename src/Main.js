import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render(){
    return(
      <>
      <h2>Horned Beasts and Where To Find Them</h2>
      <HornedBeasts title='TITLE1' imageURL ='https://images.unsplash.com/photo-1470688090067-6d429c0b2600?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'/>
      <HornedBeasts title='TITLE2' imageURL ='https://images.unsplash.com/photo-1535082427395-4a20c7c7af88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'/>
      </>
    );
  }

}

export default Main;