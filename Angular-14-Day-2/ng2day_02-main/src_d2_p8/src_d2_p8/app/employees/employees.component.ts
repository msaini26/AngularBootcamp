import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
//
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees$! : Observable<any>;
  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
    this.employees$ = this.http.get("http://localhost:3000/employees");
   
  }

}
