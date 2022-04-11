import { Component } from "@angular/core";
import { MapTeacherSubjectTeamServiceService } from "src/app/Services/map-teacher-subject-team-service.service";
import { TeacherServiceService } from "src/app/Services/teacher-service.service";

@Component({
  selector: "app-teacher-component",
  templateUrl: "./teacher-component.component.html",
  styleUrls: ["./teacher-component.component.scss"],
})
export class TeacherComponent {
  constructor( private mapTeacherSubjectTeamService:MapTeacherSubjectTeamServiceService,
    private teacherService: TeacherServiceService) {}
  result:any = [];
  teachers:any = [];

  ngOnInit(): void {
    this.teacherService.getAll().subscribe(data=>{
      this.teachers = data;
      console.log(this.teachers);
    })

  }

  GetData(Id:number){
    this.mapTeacherSubjectTeamService.getByTeacherId(Id).subscribe(data=>{
      this.result = data;
      console.log(this.result);
    })
  }

}
