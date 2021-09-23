import React from 'react';
// import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'


class HornedBeasts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickOnBeast: 0,
      isFav: false
    };
  }



  onLike =() => {
    console.log('add button pressed');
    this.setState({ clickOnBeast: this.state.clickOnBeast + 1, isFav: true});
  }
  

  render(){
    return(
      <>
        <h2 className="title">{this.props.title}</h2>
        <img src={this.props.image_url} alt="A Horned Beast"/>
        <p className="description">{this.props.description}</p>
        <p className="horns">{this.props.horns}</p>
        <p>Amount of Times Favorited: {this.state.clickOnBeast} {(this.state.isFav) ? '❤️' : ''}</p>
        <button onClick={this.onLike}>Like</button>
      </>
    );
  }

}

export default HornedBeasts;



