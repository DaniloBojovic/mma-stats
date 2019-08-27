import { IFighter } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class FighterService {

    private fightersUrl = 'api/fighters/fighters.json';

    constructor(private http: HttpClient) {

    }

    getFighters(): Observable<IFighter[]> {
        return this.http.get<IFighter[]>(this.fightersUrl)
            .pipe(
                //tap(data => console.log('f data: ', JSON.stringify(data))),
                tap(data => { data.filter(f => f.category === 'HW'); console.log('service HW', data.filter(f => f.category === 'HW')); }),
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse) {
        return throwError('error');
    }
}

