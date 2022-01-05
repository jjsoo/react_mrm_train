import React from "react";

const Home = (props: { nextHandler: () => void }) => {
    return <div>
        <h3>Home</h3>
        <div>Click start to begin</div>
        <div><button onClick={props.nextHandler}>Start</button></div>
    </div>
}

export default Home;