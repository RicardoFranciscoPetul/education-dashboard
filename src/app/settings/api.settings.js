import { Enviroment } from './environment';

class ApiSettings {
    constructor(){
        this.API_URL = Enviroment.apiUrl;
        this.ENDPOINT_COURSES = this.API_URL + Enviroment.endpointUnauthorized.courses
        this.ENDPOINT_LESSONS = this.API_URL + Enviroment.endpointUnauthorized.lessons
    }
}

export default new ApiSettings();