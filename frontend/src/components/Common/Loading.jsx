import React from 'react';


const Loading = ({ isLoading }) => (

    <div>
        {isLoading && 
            <div>loading...</div>
        }
    </div>

)

export default Loading



