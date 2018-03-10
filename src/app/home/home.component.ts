import{Component, OnInit} from '@angular/core'
import { Router, RouterLink, Params } from '@angular/router';
import { IBook } from './book.interface';
import { HomeService } from './home.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
    books:IBook[];
    date = new Date();
    errorMessage:string;

    constructor(private _homeService:HomeService){}

    ngOnInit(){
        this._homeService.getBooks()
            .subscribe(books => this.books = books,
                error => this.errorMessage=<any>error);
    }
}