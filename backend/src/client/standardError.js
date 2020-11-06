class StandardError {

    constructor(status, message, typeError) {
        this.status = status
        this.message = message
        this.type = typeError
    }

}

module.exports = { StandardError }