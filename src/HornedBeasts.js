import React from 'react';

class HornedBeasts extends React.Component {
  render(){
    return(
      <>
        <h2 className="title">{this.props.title}</h2>
        <img src={this.props.imageURL} alt="Picture of Horned Beasts"/>
        <p className="description">{this.props.description}</p>
      </>
    );
  }

}

export default HornedBeasts;