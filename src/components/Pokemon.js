import React, { Component } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

const Sprite = styled.img`
  width: 8rem;
  margin:auto;
  display:none
`;

const Card = styled.div`
    box-shadow: 0px 1px 5px rgba(0,0,0,.12),0px 1px 2px rgba(0,0,0,.24),
    transtion:all .5s linear;
    &:hover{
        box-shadow:0px 14px 28px rgba(0,0,0,.25),0px 10px 10px rgba(0,0,0,.22);
        cursor:pointer
    }

`;
const StyledLink = styled(Link)`
    text-decoration:none;
    color:black;
    &:hover{
    text-decoration:none;

    }

`

export default class Pokemon extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokeIndex: "",
    imageLoading:true,
    tooManyRequest:false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[6];
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

    this.setState({
      name: name,
      imageUrl: imageUrl,
      pokeIndex: pokemonIndex,
      tooManyRequest:false,
      imageLoading:true
    });
  }
  render() {
    return (
      <div className="col-md-3  col-sm-6 mt-4 ">
      <StyledLink to={`pokemon/${this.state.pokeIndex}`}>
        <Card className="card p-3">
        {this.state.imageLoading ? (
              <img
                src="images/loading2.gif"
                style={{ width: '5em', height: '5em' }}
                className="card-img-top rounded mx-auto d-block mt-2"
              />
            ) : null}
          <Sprite
            onLoad={() => this.setState({imageLoading:false})}
            onError={() => this.setState({tooManyRequest:true})}
            src={this.state.imageUrl}
            class="card-img-top rounded"
            alt={this.state.name.toUpperCase()}
            style={
                this.state.toManyRequests
                  ? { display: 'none' }
                  : this.state.imageLoading
                  ? null
                  : { display: 'block' }
              }
          />
          {this.state.tooManyRequest ? (<h6>Error Loading</h6>):null}
          <div className="card-header" style={{background:'palevioletred'}}>
            <h5 class="text-center text-light">{this.state.name.split(' ').map(letter=>letter.charAt(0).toUpperCase()+letter.substring(1)).join(' ')}</h5>
          </div>
        </Card>
      </StyledLink>
      </div>
    );
  }
}
