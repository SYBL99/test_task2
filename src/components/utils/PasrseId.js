function parseId(string) {
    let id = ''
    for (let i = string.length - 1; i > 0; i--) {
        if (string[i] === '/') {
            return id
        } else {
            id = string[i] + id
        }
    }
    return ''
}

export default parseId;