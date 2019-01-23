import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends Component {
    render() {
        const {pokeArray} = this.props;
        return (
            <ul className="Cards_list">
                {pokeArray.map((poke) => {
                    return(
                        <li className="Cards_list-item" key = {poke.id} id = {poke.id}>
                        <Pokemon poke = {poke}/> 
                        </li>
                    );
                })}    
            </ul>
        );
    }
}

PokeList.propTypes = {
    pokeArray: PropTypes.array,
}
  
export default PokeList;