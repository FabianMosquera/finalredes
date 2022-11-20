export class CallEndpoint {
    getRequest(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(err => console.log("UD es bien mk"))
    }
}