module.exports = {
    request: {
        url: '/home'

    },
    response: {
        end() {
            return;
        }
    },
    creatServer(cb1) {
        cb1?.(this.request, this.response);
        return;
    }

}