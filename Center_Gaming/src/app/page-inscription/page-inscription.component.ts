import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-page-inscription',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './page-inscription.component.html',
  styleUrl: './page-inscription.component.css'
})
export class PageInscriptionComponent {
  private url = "http://localhost:8085/user";
  errorEmail = "";
  errorPassword = "";
  errorPasswordBis = "";
  
  constructor(){
    
  }
  submit(form:HTMLFormElement){

    console.log(this.url);
    this.errorEmail = "";
    this.errorPassword = "";
    this.errorPasswordBis = "";
    const formData = new FormData(form);
    fetch(this.url,{
      method:"POST",
      body:formData
    }).then((response)=>{
      
        response.json().then((data)=>{
          if(data.status === 201)
          {

          }
          else
          {
            console.log(data.data.violations);
            
            for (const error of data.data.violations) 
            {
              switch(error.propertyPath)
              {
                case "email": 
                  this.errorEmail = error.message;
                  break;
                case "password":
                  this.errorPassword = error.message;
                  break;
                case "passwordBis":
                  this.errorPasswordBis = error.message;
              }
                
            }
          }
        })
      
    }).catch(e=>{console.log(e);
    })
  }

}
