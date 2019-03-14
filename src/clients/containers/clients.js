import React, { Component } from "react";
import GridClients from "../components/grid-clients";
import Routes from "../../utils/containers/routes";
class Clients extends Component {
  state = {
    clients: null,
    routes: [{ name: "Clientes", active: true }]
  };

  componentWillMount() {
    fetch("http://localhost:8080/clients")
      .then(response => response.json())
      .then(clients => this.setState({ clients }));
  }

  render() {
    console.log(this.state.clients);
    return (
      <div>
        <Routes name={this.state.routes} />
        <GridClients clientes={this.state.clients} />
      </div>
    );
  }
}

export default Clients;
