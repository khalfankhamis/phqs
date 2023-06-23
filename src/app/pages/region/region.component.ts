import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  addForm!:FormGroup;

  ngOnInit(): void {
    this.formControl();
  }



  formControl(){
    this.addForm=new FormGroup(({
      region_name:new FormControl(null,Validators.required)
    }))

  }
  onSave(){}
   

}
