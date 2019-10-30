import React from 'react'


const FollowerCard = ({follower: { avatar_url, login, html_url, followers, following }}) => {
    

    return (
        <div className="cardContainer">
            <div className="profileImgContainer">
                <img src={avatar_url} /> 
            </div>
            <section className="followerInfo">
                <h1>{login}</h1>
                <h3>GitHub Profile: <a href={html_url} >{html_url}</a></h3>
            </section>
        </div>
    )
}

export default FollowerCard