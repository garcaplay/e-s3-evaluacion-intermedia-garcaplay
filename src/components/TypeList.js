import React, { Component } from 'react';

class TypeList extends Component {
    render() {
        const {poke} = this.props;
        const poke_li = poke.types.map((type, key) =>{
            return(
                <li className="Poke_types-item" key={key}>
                {type}
                </li>
            );
        })
        return (
            <ul>
                 {poke_li}       
            </ul>
        );
    }
  }
  
  export default TypeList;