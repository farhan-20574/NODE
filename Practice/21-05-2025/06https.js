module.exports = {
    request: {
        url: './home'
    },
    response: {
        end() {
            return;
        },
        createServer(cb1) {
            cb1(this.request, this.response);
        }
    }
};
