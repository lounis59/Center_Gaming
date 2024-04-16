import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JEUX } from './Liste_Jeux';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.backgroundJeux()
  }
  title = 'Center_Gaming';
  background:string = ""
  backgroundJeux(){
    const listeJeux = JEUX
    const imageAleatoire = listeJeux[Math.floor(Math.random()*listeJeux.length)].image[0]
    this.background = imageAleatoire
    console.log(imageAleatoire)
  }
  sizeSeach($event : Event,element : HTMLElement,logo:HTMLElement){
    if($event.target instanceof HTMLInputElement)return
    // const logo = element.querySelector('svg')
    const input = element.querySelector('input')
    if(element.style.width === ""){
    element.style.width = '100%'
    element.style.borderRadius = '30px'
    element.style.transition = 'width 0.5s'
    if(input){
      input.style.display = 'block'
      input.style.height = '95%'
      
    }
    if(logo){
      logo.style.display = 'none'

    }
  }else{
    element.style.borderRadius = ''
    element.style.width = ''
    element.style.transition = 'border-radius 1s'
    if(logo){
      logo.style.display = ""
    }
    if(input){

      input.style.display = ''
    }
  }

  }
 
}
