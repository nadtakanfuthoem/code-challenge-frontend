import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

	constructor(private http: HttpClient) {}

	fetchData(): Observable<Object> {
		return this.http.get('https://4zisfqwou1.execute-api.us-east-1.amazonaws.com/dev/display')
	}
}