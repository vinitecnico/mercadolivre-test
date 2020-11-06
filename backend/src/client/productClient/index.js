const {getApiAsync } = require('../api')

const getByTerm = async (term) => {
    return getApiAsync(`/sites/MLB/search?q=${term}`)
}

module.exports = {getByTerm}