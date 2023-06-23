import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  addForm!:FormGroup;

  ngOnInit(): void {
    this.formControl();
  }



  formControl(){
    this.addForm=new FormGroup(({
      rank_name:new FormControl(null,Validators.required)
    }))

  }
  onSave(){}
   
}
