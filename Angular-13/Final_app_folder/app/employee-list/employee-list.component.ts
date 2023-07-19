import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
//
interface Employee {
  username: string;
  password: string;
}
//
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
//
export class EmployeeListComponent implements OnInit {
  employeeList$!: Observable<Employee>;
  employees: Employee[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Employee[]>('http://localhost:3000/employees')
    .subscribe(data => this.employees = data);
  }
}
