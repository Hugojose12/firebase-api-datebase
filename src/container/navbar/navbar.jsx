import React, { Component } from 'react';
import Login from './components/login';

class Navbar extends Component {
    render () {
      return (
					<nav className="navbar navbar-light bg-light">
						<a className="navbar-brand" href="#">
							<img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
						</a>
						<Login />
					</nav>
			);
    }
}

export default Navbar;