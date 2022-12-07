import React from 'react';

const Loader = () => {
    return (
        <div className="loader">
            <svg x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" fill="#fff">
                <defs>
                    <path
                        id="circlePath"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    ></path>
                </defs>
                <circle cx="100" cy="100" r="50" fill="none" stroke="none"></circle>
                <g>
                    <use xlinkHref="#circlePath" fill="none"></use>
                    <text fill="red" stroke="#fff">
                        <textPath xlinkHref="#circlePath" fill="#fff">• BITTER • CASSAVA</textPath>
                    </text>
                </g>
            </svg>
        </div>
    )
}

export default Loader;