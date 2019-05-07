import React, { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import NavigationBar from "./NavigationBar";
import Loading from "./loading";
const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=300&limit=300";

export default class PokemonList extends Component {
  state = {
    pokemons: null,
    loading: false,
    fetched: false,
    searchKey:''
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(API_URL)
      .then(data => {
        console.log(data);
        this.setState({
          pokemons: data.data["results"]
        });
        console.log(this.state.pokemons);
        this.setState({ loading: false });
      })
      .catch(error => console.log(error));
  }

  onSearchChange=(term)=> {
    this.setState({
      searchKey:term
    });
  }

  render() {
    console.log(this.state)
    if (this.state.loading) return <Loading image="/images/loading1.gif" />
    
    let filteredPokemon = this.state.pokemons && this.state.pokemons.filter(
      pokemon=>{
        return pokemon.name.toLowerCase().indexOf(this.state.searchKey.toLowerCase()) !== -1;
      }
    )
    return (
      <React.Fragment>
        <NavigationBar onSearchChange={this.onSearchChange} />
        <div className="container w-100">
          <div className="row">
            {filteredPokemon &&
              filteredPokemon.map(pokemon => (
                <Pokemon
                  name={pokemon.name}
                  key={pokemon.name}
                  url={pokemon.url}
                />
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
