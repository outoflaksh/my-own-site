import React from "react";

const Terminal = () => {
    const links = [
        "github.com/outoflaksh",
        "linkedin.com/in/lakshya-malik",
        "linktr.ee/lakshya",
    ];

    return (
        <div className="terminal-wrapper">
            <div className="gradient-bg"></div>
            <div className="terminal bg2">
                <p className="cmd">
                    <span>~$</span> ./neofetch
                </p>
                <div className="output">
                    <img src="./logo-ascii.png" className="ascii-logo" />
                    <div className="stats">
                        <p>Links:</p>
                        {links.map((link) => {
                            var url = "https://" + link;
                            return (
                                <li>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {link}
                                    </a>
                                </li>
                            );
                        })}
                        <br />
                        <p>Stats:</p>
                        <li>Total commits: 783</li>
                        <li>Stars earned: 36</li>
                        <li>Total Leetcode solved: 92</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
