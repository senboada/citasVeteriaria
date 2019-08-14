import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {
    
    eliminarCita = () => {
        const {id} = this.props.cita; 
        this.props.borrarCita(id);
    }
    
    render() {
        const {fecha,hora,nombre,propietario,sintomas} = this.props.cita; 
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{nombre}</h3>
                    <p className="card-text"> <span>Nombre del dueño:</span> {propietario}</p>
                    <p className="card-text"> <span>Fecha: </span> {fecha}</p>
                    <p className="card-text"> <span>Hora: </span> {hora}</p>
                    <p className="card-text"> <span>Sintomas:</span> </p>
                    <p className="card-text"> {sintomas} </p>

                    <button onClick={ this.eliminarCita } className="btn btn-danger"> Borrar</button>

                </div>
            </div>
        );
    }
}

Cita.propTypes = {
    cita : PropTypes.shape({
        fecha       : PropTypes.string.isRequired,
        hora        : PropTypes.string.isRequired,
        nombre      : PropTypes.string.isRequired,
        propietario : PropTypes.string.isRequired,
        sintomas    : PropTypes.string.isRequired
    }),
    borrarCita : PropTypes.func.isRequired
}

export default Cita;