import React from "react";

class Welcome extends React.Component {

  constructor(props){
    super(props);
    this.state = {datosCargados: false}
  }

  cargarDatos(){

    fetch('https://raw.githubusercontent.com/dwn84/ADA2022-2/main/little_data')
    .then(respuesta => respuesta.json())
    .then((dataRespueta) => {
      console.log(dataRespueta)
      this.setState({datosCargados:true})
    })
    .catch(console.log)

  }

  componentDidMount(){
      this.cargarDatos();
    }


  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

  
export default Welcome;