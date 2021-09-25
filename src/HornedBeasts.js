import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


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
      <div className="m-1" id="container"> 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image_url} alt="A Horned Beast" />
        <Card.Body className="bootstrapCard">
         <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
              {this.props.description}
          </Card.Text>
          <Button onClick={this.onLike}>Like</Button>
        </Card.Body>
      </Card>
        {/* <h2 className="title">{this.props.title}</h2>
        <p className="description">{this.props.description}</p> */}
        <p>Amount of Times Favorited: {this.state.clickOnBeast} {(this.state.isFav) ? '❤️' : ''}</p>
      </div>
    );
  }

}

export default HornedBeasts;
