import { Component , OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Games Arena';
  allGames : any;
  api_rate_limit : any;
   p: number = 1;

   key: string = 'title'; 
  reverse: boolean = false;
  cogportGame : any;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  allGamesTitle : string[] = [] ;

  constructor( private _appService : AppService){

  }

  ngOnInit(){
        this.getAllGameGenres();
    }

  getAllGameGenres(){
   this._appService  
      .getAllGameGenres()
      .subscribe(
       p => {
         this.allGames = p.filter(x => x.title);
          this.api_rate_limit = p[0].api_rate_limit 
          this.allGamesTitle = this.allGames.map(game => game.title);
        },
       e => {console.log(e) , alert("Something went wrong!")},
       () => { });
  }

  
}