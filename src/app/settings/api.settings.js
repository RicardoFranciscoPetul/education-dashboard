import { Enviroment } from './environment';

class ApiSettings {
	constructor() {
		this.API_URL = Enviroment.apiUrl;
		this.ENDPOINT_COURSES =
			this.API_URL + Enviroment.endpointUnauthorized.courses;
		this.ENDPOINT_LESSONS =
			this.API_URL + Enviroment.endpointUnauthorized.lessons;
		this.ENDPOINT_CHAPTERS =
			this.API_URL + Enviroment.endpointUnauthorized.chapters;
		this.ENDPOINT_STUDENTS =
			this.API_URL + Enviroment.endpointUnauthorized.students;
	}
}

export default new ApiSettings();
