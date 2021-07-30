import * as React from 'react';
import { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

/* CLASS REACT EXAMPLE */
class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			blogs: []
			
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/blogs')
			let blogs = await r.json();
			this.setState({ blogs });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<>
			    <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="btn btn-info" href="/api/blogs" role="button">Database</a>

  </nav>

			<div className="container my-5">
				<h1 className="text-success text-center">recent movies blog</h1>
				<div className='card'>{this.state.blogs.map((blog) => {
					return <>
					<div className="card-body">

					<h3 className="card-title">{blog.title} 
					</h3>
					<p className="card-text">{blog.content}</p>
					</div>
					</>
					})}
					</div>
			</div>
			</>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	blogs: Array<any>
}

export default App;

// import React from "react";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// // import Details from "./views/Details";
// // import Admin from "./views/Admin";
// import Home from "../pages/Home";
// // import Compose from "./views/Compose";

// const App = (props: AppProps) => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         {/* <Route exact path="/compose">
//           <Compose />
//         </Route>
//         <Route exact path="/details/:id">
//           <Details />
//         </Route>
//         <Route exact path="/admin/:id">
//           <Admin />
//         </Route> */}
//       </Switch>
//     </BrowserRouter>
//   );
// };

// interface AppProps {}

// export default App;