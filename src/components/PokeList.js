import React, { Component } from 'react';
import TypeList from './TypeList';

class PokeList extends Component {
    render() {
        const {pokeArray} = this.props;
        const poke_li = pokeArray.map((poke, key) => {
            return(
                <li className="Cards_list-item" key = {key}>
                    <img src={poke.url} alt="" className="Poke_img"></img>
                    <h2 className="Poke_name">{poke.name}</h2>
                    
                    <TypeList poke = {poke} />
                </li>
            );
        })
        return (
            <ul className="Cards_list">
                {poke_li}
            </ul>
        );
    }
  }
  
  export default PokeList;