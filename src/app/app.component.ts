import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public news : any;
 show = 2;
  public url ="https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-12&sortBy=publishedAt&apiKey=6f17322118574ef3a4bc748f6e44e371";
  name = 'NEws';

  constructor(private httpClient: HttpClient){
      this.getNews();
  }
  getNews(){
        this.httpClient.get(this.url).subscribe((res)=>{
            console.log(res);
            this.news = res;
            
        });
    }
   increaseShow() {
    this.show += 2; 
  } 

 
}
