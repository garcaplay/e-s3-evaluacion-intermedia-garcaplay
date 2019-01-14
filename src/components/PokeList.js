import React, { Component } from 'react';
import TypeList from './TypeList';

class PokeList extends Component {
    render() {
        const {pokeArray} = this.props;
        const poke_li = pokeArray.map((poke, key) => {
            return(
                <li className="Cards_list-item" key = {key} id = {poke.id}>
                    <div className="Poke_img-box"><img src={poke.url} alt={poke.name} className="Poke_img"></img></div>
                    <div className="Poke_name-box">
                    <h2 className="Poke_name">{poke.name}</h2>
                    </div>
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