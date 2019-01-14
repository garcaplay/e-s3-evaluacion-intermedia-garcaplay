import React, { Component, Fragment } from 'react';
import TypeList from './TypeList';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const {pokeArray} = this.props;
        console.log(pokeArray);
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
            <Fragment>
                {poke_li}
            </Fragment>
        );
    }
  }

  Pokemon.propTypes = {
      pokeArray: PropTypes.array,
  }
  
  export default Pokemon;