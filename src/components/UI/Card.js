import React from "react";

const Card = (props) => {
    return <div className="card shadow mx-auto col-8 p-5 my-4">{props.children}</div>
};

export default Card;