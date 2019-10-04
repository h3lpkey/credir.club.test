import React from 'react';
import {connect} from "react-redux";

function Post(props) {
    return (
        <div>
            <div className="post">
                <div className="content">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
                <div className="controls">
                    <img className="remove"
                         onClick={(id) => this.props.state.dispatch(id)}
                         alt=""
                         src={process.env.PUBLIC_URL + '/remove-button.svg'} />
                </div>
            </div>
        </div>
    );
}

export default Post;
