import React, { Component } from "react";
import axios from "axios";
import Pokemon from './Pokemon'
import NavigationBar from "./NavigationBar";
const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=200&limit=200";

export default class PokemonList extends Component {
  state = {
    pokemons: null,
    loading: false,
    fetched: false,
  };

  componentDidMount() {
      this.setState({loading:true})
    axios
      .get(API_URL).then(
          data=>{
              console.log(data);
              this.setState({
                  pokemons:data.data['results']
              });
              console.log(this.state.pokemons);
              this.setState({loading:false})
          }
      ).catch((error)=>console.log(error))

  }


  onSearchChange(term=''){
//   var filteredItem =   this.state.pokemons.filter(pokemon=>pokemon.name.toLowerCase().includes(term.toLowerCase()))
//   this.state({pokemons:filteredItem})
  }



  render() {
      if(this.state.loading){
        return(
            <div className="loading">
                <img src="images/loading1.gif" alt=""/>
            </div>
        )
      }
    return (
        <React.Fragment>
        <NavigationBar onSearchChange = {this.onSearchChange} />
        <div className="container w-100">
            <div className="row">
                {
                    this.state.pokemons && this.state.pokemons.map(pokemon=> <Pokemon name={pokemon.name} key={pokemon.name} url={pokemon.url} />)
                }
            </div>
        </div>
        </React.Fragment>
    );

  }
}
