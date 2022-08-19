import axios from 'axios';

export default class Service {
	constructor(base) {
		this.base = base;
		this.apiUrl = process.env.API_URL;
		this.axios = axios;
	}

	getAll(params = '') {
		return this.axios.get(`${this.apiUrl}/${this.base}${params}`);
	}

	get(id) {
		return this.axios.get(`${this.apiUrl}/${this.base}/${id}`);
	}

	save(data) {
		return this.axios.post(`${this.apiUrl}/${this.base}`, data);
	}

	update(id, data) {
		return this.axios.put(`${this.apiUrl}/${this.base}/${id}`, data);
	}

	remove(id) {
		return this.axios.delete(`${this.apiUrl}/${this.base}/${id}`);
	}
}
