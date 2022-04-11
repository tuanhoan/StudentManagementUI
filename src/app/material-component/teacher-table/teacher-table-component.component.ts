import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MapTeacherSubjectTeamServiceService } from "src/app/Services/map-teacher-subject-team-service.service";
import { TeacherServiceService } from "src/app/Services/teacher-service.service";

@Component({
  selector: "app-teacher-table-component",
  templateUrl: "./teacher-table-component.component.html",
  styleUrls: ["./teacher-table-component.component.scss"],
})
export class TeacherTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['Name', 'Class', 'Subject', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
];
