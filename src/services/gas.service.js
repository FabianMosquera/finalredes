export class GasService {
    constructor(request){
        this.request = request
    }
    getData(device){
        const url = `http://industrial.api.ubidots.com/api/v1.6/devices/${device}/particulas/values?token=BBFF-Bo9qx6Gi5Ogcaz1XxgF9YHTUXHJImQ`
        return this.request.getRequest(url).then((data) => data.results);
    }
}
