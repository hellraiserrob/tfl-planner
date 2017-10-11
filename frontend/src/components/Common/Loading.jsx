import React from 'react';
import './Loading.css'

const Loading = ({ isLoading }) => (

    <div>
        {isLoading && 
            <div className="loading"><div className="bar"></div></div>
        }
    </div>

)

export default Loading



