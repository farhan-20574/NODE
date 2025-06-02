class MiniExpress {

    constructor(){

    }
}


const requestParser = (req) => {
    // /login?rememberMe=true&redirect=home

    const [pathString, queryString] = req.url.split('?');

    req.path = pathString.toLowerCase();

    if(queryString) {
        // rememberMe=true&redirect=home
        const queries = queryString.split('&')
        /// { rememberMe: 'true', redirect:'home' }
        const query = queryParser(queries)
        req.query = query;
    }

}

module.exports = {
    MiniExpress
}