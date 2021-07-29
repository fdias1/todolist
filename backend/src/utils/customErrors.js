class GeneralApiError extends Error {
    costructor(message) {
        this.message = message
    }

    getStatusCode() {
        if (this instanceof BadRequest) {return 400}
        else if (this instanceof Unauthorized) {return 401} 
        else if (this instanceof NotFound) {return 404}
        else {return 500}
    }
}

class BadRequest extends GeneralApiError {}
class Unauthorized extends GeneralApiError {}
class NotFound extends GeneralApiError {}

module.exports = {
    GeneralApiError,
    BadRequest,
    Unauthorized,
    NotFound
}