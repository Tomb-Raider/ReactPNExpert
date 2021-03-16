const LOG_REQUESTS = true

const API_PREFIX = 'https://e3760ab9526d.ngrok.io/rest-auth/'

export class RequestBuilder {
    constructor(endpoint) {
        this.url = API_PREFIX + endpoint + '/'

        this.data = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }

    fetch = () => {
        if (LOG_REQUESTS) {
            console.log(`[FETCHING] ${this.url} with`)
            console.log(this.data)
        }
        return fetch(this.url, this.data)
    }

    authenticate = (token) => {
        this.data.headers['Authorization'] = 'Token ' + token
        return this
    }

    post = (body) => {
        this.data.method = 'POST'
        this.data.body = JSON.stringify(body)
        return this.fetch()
    }

    get = () => {
        this.data.method = 'GET'
        return this.fetch()
    }
}

export function call(endpoint) {
    return new RequestBuilder(endpoint)
}
