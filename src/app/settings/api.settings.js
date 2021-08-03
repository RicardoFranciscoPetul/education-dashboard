import { Enviroment } from './environment';

class ApiSettings {
    constructor(){
        this.API_URL = Enviroment.apiUrl;
        this.ENDPOINT_COURSES = this.API_URL + Enviroment.endpointUnauthorized.courses
    }
}

export default new ApiSettings();