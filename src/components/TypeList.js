import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypeList extends Component {
    render() {
        const {poke} = this.props;
        const poke_li = poke.types.map((type, index) =>{
            return(
                <li className="Poke_types-item" key={index}>
                <p className="item">{type}</p>
                </li>
            );
        })
        return (
            <ul className="Poke_types-list">
                 {poke_li}       
            </ul>
        );
    }
}

TypeList.propTypes = {
    poke: PropTypes.object,
}
  
export default TypeList;