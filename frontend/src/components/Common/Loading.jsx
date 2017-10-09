import React from 'react';
import './Loading.css'

const Loading = ({ isLoading }) => (

    <div>
        {isLoading && 
            <div className="loading">loading...</div>
        }
    </div>

)

export default Loading



