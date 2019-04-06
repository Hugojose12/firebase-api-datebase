import React, { Component } from 'react';
import firebase from 'firebase';

class Login extends Component {
	constructor () {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
  }

  componentDidMount () {

    console.log("Llamado del willmount")
    // Si el usuario se ha autenticado, el objeto(user) tiene información.
    // Si no, el usuario es 'null'
    firebase.auth().onAuthStateChanged(user => {
      console.log("se va a actualizar el estado de user")
      this.setState({ user });
    });
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} a iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton () {
    if (!this.state.user) {
      return (
        <button onClick={this.handleAuth} className="App-btn-login">
          Iniciar sesión con Google
        </button>
      );
    } else  {
      return (
        <div className="App-intro">
          <p className="App-intro-user">¡Hola, { this.state.user.displayName }!</p>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName} data-toggle="tooltip" data-placement="bottom" title={this.state.user.displayName}></img>

          <button onClick={this.handleLogout} type="button" class="btn btn-primary">Salir</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        { this.renderLoginButton() }
      </div>
    );
  }
}

export default Login;