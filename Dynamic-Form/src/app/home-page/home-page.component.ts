import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { fieldConfigs } from './field-configs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  dynamicForm!:FormGroup;
  fieldConfigs = fieldConfigs;


  constructor(private formBuilder:FormBuilder){}

  ngOnInit() {
    this.dynamicForm=this.formBuilder.group({
      checkbox: [false],
      comments: ['']
    });

    this.fieldConfigs.forEach(field=>{
      this.dynamicForm.addControl(field.name,this.formBuilder.control('',field.validators));
    })
  }

  
  onSubmit(){
    if(this.dynamicForm.valid){
      console.log(this.dynamicForm.value);
      alert(JSON.stringify(this.dynamicForm.value));
    }
    else{
      console.log("Invalid Form");
      alert("Invalid Form");
    }
  }

    
}

