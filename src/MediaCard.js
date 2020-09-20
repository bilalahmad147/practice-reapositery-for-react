import React from "react";

const MediaCard = ({title,body,imgUrl}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <img src={imgUrl} />
        </div>
    )
};

export default MediaCard;