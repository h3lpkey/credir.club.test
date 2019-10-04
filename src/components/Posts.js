import React from 'react';
import Post from "./Post";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const posts = this.props.posts;

        return (
            <div>
                <div className="posts">
                    {posts.map(post =>
                        <Post key={post.id}
                              text={post.body}
                              title={post.title}/>)}
                </div>
            </div>
        );
    }
}

export default Posts