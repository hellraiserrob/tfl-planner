
export function getUrl(url) {
    
    return fetch(url).then((response) => {
        
        
        if (response.status >= 400) {
            // console.log('response code shows error')
            throw new Error(response)
            // return response.json()
            
        }
        return response.json()

    })

}