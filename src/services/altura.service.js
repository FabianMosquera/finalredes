export class AlturaService {
    constructor(request) {
        this.request = request
    }
    getData(device, variable, token) {
        const url = `https://industrial.api.ubidots.com/api/v1.6/devices/${device}/${variable.toLowerCase()}/values?token=${token}`
        return this.request.getRequest(url).then((data) => data.results);
    }
}
