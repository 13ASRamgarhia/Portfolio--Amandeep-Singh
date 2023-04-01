import React, { useState } from 'react';
import portfolioContext from './portfolioContext';

const PortfolioState = (props) => {
    const [isLandingVisible, setIsLandingVisible] = useState(true)

    return(
        <portfolioContext.Provider value = {{ isLandingVisible, setIsLandingVisible}}>
            {props.children}
        </portfolioContext.Provider>
    )
}

export default PortfolioState;