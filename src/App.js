import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  state = {
    paises: []
  }
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name")
      .then((response) => {
        console.log(response);
        this.setState({paises: response.data})
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="form-group">
          <select name="paises" className="form-control">
            {this.state.paises.map(elemento => (
              <option key={elemento.id} value={elemento.id}>{elemento.name}</option>
            )
            )}
          </select>
        </div>
      </div>
    );
  }
}
export default App;
