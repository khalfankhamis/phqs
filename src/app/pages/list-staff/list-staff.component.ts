import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {
  StaffList: any;


  ngOnInit(): void {
    this.getAllStudent();
  }

  constructor(private route:Router,private staffService:StaffService){}


  getAllStudent(){
    this.staffService.getAll().subscribe((response)=>{
      console.log("the value are ",response)
      this.StaffList=response
    })
  }

  ViewStaff(item:any){
    return this.route.navigateByUrl("view-staff/"+item.force_number)
  }

}
