import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'})
export class AppComponent {
  title = 'practicasBasicasPipes';
  name='shelodn';
  myArray=[1,2,3,4,5,6];
  PI=Math.PI;
  myNum=0.589;
  salary=3500.5;
  myDate=new Date();
  video:string='o-0ygW-B_gI';
  myVideo:string="4V9KweESFzw"

  nerd = {​​​​ 
    name: 'Sheldon', 
    alias: 'Shelly', 
    song: 'Soft Kitty', 
    skills: ['eidetic memory', 'makes people nervous'], 
    youtubeChannel: 'Fun With Flags', 
    address: {​​​​ street: 'Elm Street', 
    number: 3, 
    city: 'Pasadena' }​​​​ 
  }​​​​;
}
