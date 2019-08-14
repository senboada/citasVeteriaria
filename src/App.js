import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';


class App extends Component {

  state = {
    citas : []
  }

  componentWillMount(){
    const citasLs =  localStorage.getItem('citas');
    if(citasLs){
      const citas = JSON.parse(citasLs);
      this.setState({
        citas
      })
    }
  }

  componentDidUpdate(){
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (cita) => {
    const citas = [...this.state.citas,cita];
    this.setState({
      citas
    })
  }

  borrarCita = id => {
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita => cita.id !== id);
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador de pacientes de veterinaria"/>
        <div className="row">
          <div className="col-md-6">
            <AgregarCita 
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas 
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;