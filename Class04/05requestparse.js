const requestParser = (req) => {
    const query = queryParser(querries);
    req.query = query;
}

function requestHandler(req, res) {
    requestParser(req);

    console.log('::log::', req.path);
    console.log('::log::', req.method);
    if (req.path === 'login') {
        console.log('>>>LOGIN PAGE');
    }else if (req.path === 'LOGIN' && req.method === 'POST') {
        console.log('>>>LOGIN SUCCESS');
    }else if (req.path === '/SEARCH' && req.querry) {
        console.log('>>>SEARCH ACTION')
        if (req.query.product) {
            console.log('>>>SEARCH PRODUCT');
        
    }