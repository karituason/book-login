import {Injectable} from '@angular/core';
import {IBook} from './book.interface';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class HomeService{

    private _productUrl ="../assets/books.json";

    constructor(private _http:Http){

    }
    getBooks():Observable<IBook[]>{
        return this._http.get(this._productUrl)
            .map((response:Response)=> <IBook[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error:Response){
        return Observable.throw(error.json().error||"Server Error");
    }
}