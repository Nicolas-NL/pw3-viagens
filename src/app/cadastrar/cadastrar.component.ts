import { Component } from '@angular/core';

import { EmailValidator, FormBuilder, FormControlName, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  cadastroform: FormGroup;

  constructor(private builder : FormBuilder){
    this.cadastroform = builder.group({
      nome: ["", Validators.required,],
      usuario:["", Validators.required],
      email:["", Validators.required],
      senha:["" , Validators.required],
      confirmaSenha:["" , Validators.required],
      aceite:[false , Validators.requiredTrue]

    });

  }
  cadastrar(){
    console.log(this.cadastroform.value)

   }
}
