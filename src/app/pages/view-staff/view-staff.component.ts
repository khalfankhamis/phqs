import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent  implements OnInit{

  editForm!:FormGroup;

  constructor(private route:ActivatedRoute,private staffService:StaffService,private router:Router){}

  ngOnInit(): void {

    this.route.params.subscribe((paramsValue:any)=>{ //paramsValue is any value you want to declare
      console.log("the values are=>",paramsValue);

      const force_number=paramsValue.force_number;

      this.fetchStudentById(force_number);

    })

    this.formControl();
    
  }

  fetchStudentById(force_number:String){
    this.staffService.getById(force_number).subscribe((response:any)=>{
      this.editForm.get('force_number')?.setValue(response.force_number)
      this.editForm.get('rank')?.setValue(response.rank)
      this.editForm.get('first_name')?.setValue(response.first_name)
      this.editForm.get('middle_name')?.setValue(response.middle_name)
      this.editForm.get('last_name')?.setValue(response.last_name)
      this.editForm.get('gender')?.setValue(response.gender)
      this.editForm.get('check_number')?.setValue(response.check_number)
      this.editForm.get('education_level')?.setValue(response.education_level)
      this.editForm.get('date_of_birthday')?.setValue(response.date_of_birthday)
      this.editForm.get('region_name')?.setValue(response.region_name)



    })
  }


  formControl(){
    this.editForm=new FormGroup({
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

  onSave(){
    const values=this.editForm.value;
    this.staffService.add(values).subscribe((response)=>{
      this.router.navigateByUrl('/list-staff')

    })
  }

}
