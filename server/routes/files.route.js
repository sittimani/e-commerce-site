const routes = [{
    method: 'get',
    path: '/{root}/{name}',
    handler: (request, h) => {
        return h.file(`./${request.params.root}/${request.params.name}`)
    }
}, {
    method: 'get',
    path: '/baner/{param}',
    handler: {
        directory: {
            path: './baner/sub/'
        }
    }
}]

module.exports = routes