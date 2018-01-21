
import { Injectable } from '@angular/core';
import { Http , Response}   from '@angular/http';
import { Observable } from 	'rxjs/Observable' ;
import 'rxjs/Rx' ;
import {Headers, RequestOptions} from '@angular/http';

@Injectable()
export class AppService
{
	
constructor (private http : Http){}

getAllGameGenres(): Observable<any>{  
		return this.http
		.get(` http://starlord.hackerearth.com/gamesarena`)
		.map(response => response.json());
	}  

}