import React from 'react';
import axios from 'axios';
import FollowerCard from './FollowerCard';


class GitHubFollowers extends React.Component {
    constructor () {
        super();
        this.state = {
           user: {},
           followers: []
        }
    }

    componentDidMount(){
       axios.get("https://api.github.com/users/JessicaGCooper")
            .then(response => {
                console.log(response);
                this.setState({
                    user: response.data
                })
                return axios.get("https://api.github.com/users/JessicaGCooper/followers")
            })
            .then (response => {
                console.log(response);
                this.setState({
                    followers: response.data
                })
            })
            .catch(error =>{
                console.log("The data was not returned:", error);
            });
    }

    componentDidUpdate(prevProps, prevState){
        //always write these inside conditionals
        if (prevState.user !== this.state.user){
            console.log("User state has changed")
        }
        if (prevState.followers !== this.state.followers){
            console.log("Followers state has changed")
        }
      }

    render (){
        return (
            <div>
                <section>
                    <h2>{this.state.user.name}</h2>
                    <h3>{this.state.user.login}</h3>
                    <div className="userImageContainer">
                        <img src={this.state.user.avatar_url} /> 
                    </div>
                </section>
                <section className="generalInfo">
                    <h4>Location: {this.state.user.location}</h4>
                </section>
                <section className="followers">
                    <h2 className="followersTitle">{this.state.user.name}'s Followers</h2>
                    {this.state.followers.map((follower) => <FollowerCard key={follower.id} follower={follower}/>)}
                </section>
            </div>
        )
    }

}

export default GitHubFollowers