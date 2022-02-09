
import axios, { AxiosRequestConfig, Method } from 'axios';

export class Request {
    protected baseURL: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    public async fetchRequest( method: Method, data?: object) {
        const options: AxiosRequestConfig = {
            url: this.baseURL,
            data,
            method,
            
        };

        const request = await axios(options);
        return request.data;
    }
}