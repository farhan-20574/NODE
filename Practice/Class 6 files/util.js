function checkQuery(requestKeys, routeQuery) {
    if(!requestKeys && !routeQuery) return true;
    if(requestKeys) requestKeys = Object.keys(requestKeys);
    if (!requestKeys || !routeQuery || requestKeys.length !== routeQuery.length) return false;

    let match;
    for (let i = 0; i < requestKeys.length; i++) {
        match = false;
        for (let j = 0; j < routeQuery.length; j++) {
            if (requestKeys[i] === routeQuery[j]) {
                match = true;
                break
            }
        }
        if (!match) break;
    }
    console.log('MATCH:',match)
    return match
}

module.exports = {
    checkQuery
}
