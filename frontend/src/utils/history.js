/**
 * local storage history 
 */

export function getHistory() {

    const history = window.localStorage.getItem('history')

    return (history === null) ? [] : JSON.parse(history)
}

export function clearHistory() {
    window.localStorage.removeItem('history')
}



function checkItem(check) {

    const history = getHistory()
    let checked = false

    history.forEach((item) => {

        if (JSON.stringify(item) === JSON.stringify(check)) {
            checked = true
        }

    })

    return checked

}


export function addHistory(item) {

    const exists = checkItem(item)

    if (!exists) {

        let history = getHistory()

        history.push(item)

        localStorage.setItem('history', JSON.stringify(history))

    }
    else {
        console.log('i already exist in the history')
    }
}




export function clearItem(index) {

    const history = getHistory()

    const reducedHistory = history.filter((item, i) => {
        return i !== index
    })

    localStorage.setItem('history', JSON.stringify(reducedHistory))

}