import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit{
  addForm!:FormGroup;

  ngOnInit(): void {
    this.formControl()
  }

  constructor(private route:Router,private staffService:StaffService){}

  formControl(){
    this.addForm=new FormGroup({
      force_number:new FormControl(null,[Validators.required]),
      rank:new FormControl(null,[Validators.required]),
      first_name:new FormControl(null,[Validators.required]),
      middle_name:new FormControl(null,[Validators.required]),
      last_name:new FormControl(null,[Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      check_number:new FormControl(null,[Validators.required]),
      education_level:new FormControl(null,[Validators.required]),
      date_of_birthday:new FormControl(null,[Validators.required]),
      region_name:new FormControl(null,[Validators.required]),

    })
  }

  education=[
    {
    name:"Form IV"
  },
  {
    name:"Form VI"
  },{
    name:"CERTIFICATE"
  },{
    name:"DIPLOMA"
  },{
    name:"DEGREEE"
  },{
    name:"MASTER"
  },{
    name:"PHD"
  }   
]

rank=[
  {
    name:"PC"
  },
  {
    name:"CPL"
  },{
    name:"SGT"
  },{
    name:"SSGT"
  },{
    name:"RSM"
  },{
    name:"AINSP"
  },{
    name:"INSP"
  },{
    name:"ASP"
  },{
    name:"SP"
  },{
    name:"SSP"
  },{
    name:"ACP"
  },
  {
    name:"SACP"
  },{
    name:"CP"
  },{
    name:"DGP"
  },{
    name:"IGP"
  },

]

onSave(){
  const values=this.addForm.value;
  this.staffService.add(values).subscribe(()=>{
    console.log("The values are =>",values);
    this.route.navigateByUrl("list-staff")
  })
}

}
