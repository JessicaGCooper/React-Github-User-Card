import React from 'react'


const FollowerCard = (props) => {
    console.log("FollowerCard:", props)

    return (
        <div className="cardContainer">
            <div className="profileImgContainer">
                <img src={props.follower.avatar_url} /> 
            </div>
            <section className="followerInfo">
                <h2>{props.follower.name}</h2>
                <h3>{props.follower.login}</h3>

                {/* location
                github url
                Followers
                Following
                Bio  */}
            </section>
        </div>
    )
}

export default FollowerCard