import React, {Component} from 'react';
import axios from 'axios';
// const ROOT_URL = "https://thebibleapp.herokuapp.com/api";
const ROOT_URL = "http://localhost:3000/api";


class Program extends Component {

  // borrarPrograma() {
  //   axios.delete(ROOT_URL+"/programs/"+this.props.estudiante.id).then(response => {
  //     console.log(response);
  //     console.log('Borro programa', this.props.nombre);
  //   })
  // }

  render(){
    return (
      <div className="col-md-3 col-sm-4 ">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.program.name}</h4>
            <p className="card-text">{this.props.program.description}</p>
          <a href={this.props.program.url} className="btn btn-primary cardbtn">URL</a>
          </div>
          {/* <button onClick={this.borrarEstudiante.bind(this)}>Borrar</button> */}
        </div>

      </div>


    );
  }
}

export default Program;
