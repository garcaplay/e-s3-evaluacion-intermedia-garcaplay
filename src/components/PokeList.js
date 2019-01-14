import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {
    render() {
        const {pokeArray} = this.props;
        return (
            <ul className="Cards_list">
                <Pokemon pokeArray = {pokeArray}/>
            </ul>
        );
    }
  }
  
  export default PokeList;