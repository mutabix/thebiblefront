import React, {Component} from 'react';

class File extends Component {

  // borrarPrograma() {
  //   axios.delete(ROOT_URL+"/programs/"+this.props.estudiante.id).then(response => {
  //     console.log(response);
  //     console.log('Borro programa', this.props.nombre);
  //   })
  // }

  render(){
    return (
      <div className="col-md-6 col-sm-6">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.file.name}</h4>
          <a href={this.props.file.drive_url} className="btn btn-primary cardbtn" target='_blank'>Download</a>
          </div>
          {/* <button onClick={this.borrarEstudiante.bind(this)}>Borrar</button> */}
         </div>

      </div>


    );
  }
}

export default File;
