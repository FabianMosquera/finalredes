export class GasService {
    constructor(request){
        this.request = request
    }
    getData(device){
        const url = `http://industrial.api.ubidots.com/api/v1.6/devices/${device}/pulso/values?token=BBFF-cQ3lqbQHIboTMjghV8CWEmGvanIWWY`
        return this.request.getRequest(url).then((data) => data.results);
    }
}
