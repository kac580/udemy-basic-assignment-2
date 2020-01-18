import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-assignment2';
  username = '';

  onUpdateUserName(event:any){
    this.username = event.target.value;
  }

  onCreateUserName(){
    this.username
  }

}

