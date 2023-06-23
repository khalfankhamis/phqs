import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  addForm!:FormGroup;

  ngOnInit(): void {
    this.formControl();
  }



  formControl(){
    this.addForm=new FormGroup(({
      education_level:new FormControl(null,Validators.required)
    }))

  }
  onSave(){}

}
