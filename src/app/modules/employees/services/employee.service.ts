import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Employee } from '../../../core/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlEmployee = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<{employees: Employee[]}>(this.urlEmployee).pipe(
      map(response => response.employees)
    );
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.urlEmployee}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.urlEmployee, employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.urlEmployee}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlEmployee}/${id}`);
  }
}
