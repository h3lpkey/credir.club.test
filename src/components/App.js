import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import '../App.scss';
import Post from './Post'
import Posts from './Posts'
import PostAdd from './PostAdd'
import {connect} from "react-redux";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((result) => {
                    this.props.initPosts(result)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        return (
            <div className="App">
                <header className="header">
                    <h1 className="title">
                        Credit тестовое
                    </h1>
                </header>
                <Router>
                    <main>
                        <nav role="navigation" aria-label="main navigation">
                            <div id="navbarBasicExample" className="navbar-menu">
                                <div>
                                    <Link to="/">Posts</Link>
                                    <Link to="/post">Post</Link>
                                    <Link to="/add/post">Add</Link>
                                </div>
                            </div>
                        </nav>
                        <Switch>
                            <Route path="/add/post">
                                <PostAdd/>
                            </Route>
                            <Route path="/post">
                                <Post/>
                            </Route>
                            <Route path="/">
                                <Posts posts={this.props.posts}/>
                            </Route>
                        </Switch>
                    </main>
                </Router>
            </div>
        );
    }
}

export default connect(
    state => ({
        posts: state.posts,
    }),
    dispatch => ({
        initPosts: (posts) => dispatch({type: 'INIT_POSTS', posts: posts}),
        removePost: (id) => dispatch({type: 'REMOVE_POST', postId: id}),
    })
)(App);
