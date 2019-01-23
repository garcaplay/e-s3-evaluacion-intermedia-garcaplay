import React, { Component, Fragment } from 'react';
import TypeList from './TypeList';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const {poke} = this.props;    
        return (
            <Fragment>
                <div className="Poke_img-box"><img src={poke.url} alt={poke.name} className="Poke_img"></img></div>
                    <div className="Poke_name-box">
                    <h2 className="Poke_name">{poke.name}</h2>
                    </div>
                    <TypeList poke = {poke} />
            </Fragment>
        );
    }
}

Pokemon.propTypes = {
    poke: PropTypes.object,
}
  
export default Pokemon;