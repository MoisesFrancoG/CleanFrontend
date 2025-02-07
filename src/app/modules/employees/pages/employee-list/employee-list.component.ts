import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../../core/models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
      console.log(data);
    });
  }

  deleteEmployee(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.employees = this.employees.filter((employee) => employee.Id !== id);
      });
    }
  }
}
