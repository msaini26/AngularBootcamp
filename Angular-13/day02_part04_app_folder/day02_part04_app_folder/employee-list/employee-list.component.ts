import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList$!: Observable<any>;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.employeeList$ = this.http.get('http://localhost:3000/employees');
  }

}
