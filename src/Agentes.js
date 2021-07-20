import React, { Component } from "react";
import axios from 'axios';
class App extends Component {
    state = {
        Agentes: []
    }
    componentDidMount() {
        axios
            .get("https://valorant-api.com/v1/agents")
            .then((response) => {
                console.log(response);
                this.setState({ Agentes: response.data.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h1>Agentes del Valorant</h1>
                <p>Esto es una api de Valorant, es un juego de accion y lo que se muestra a continuacion son los agentes que puedes elejir dentro del juego.</p>
                {this.state.Agentes.map(elemento => (
                    <>
                    <img src={elemento.displayIcon}/>
                    <p key={elemento.uuid}>{elemento.displayName}</p>
                    <p>{elemento.description}</p>
                    </>
                )
                )}
            </div>
        );
    }
}
export default App;