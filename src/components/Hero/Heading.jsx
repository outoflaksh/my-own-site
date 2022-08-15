import React from "react";

const Heading = () => {
    return (
        <div className="heading">
            <h2 className="subtext">
                <span>~$</span> hi. i am
            </h2>
            <h1 className="main-text">Lakshya Malik</h1>
            <h2 className="subtext" style={{ textAlign: "right" }}>
                and i craft software <span>{"//"}</span>
            </h2>
        </div>
    );
};

export default Heading;
