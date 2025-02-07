import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit{
  employeeForm: FormGroup
  employeeId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      age: [0, Validators.required]
    })
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.employeeId = +id;
        this.employeeService.getEmployee(this.employeeId).subscribe((employee) => {
          this.employeeForm.patchValue(employee);
        });
      }
    });
  }

  saveEmployee(): void {
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      if (this.employeeId) {
        this.employeeService.updateEmployee(this.employeeId, employee).subscribe(() => {
          this.router.navigate(['/employees']);
        });
      } else {
        this.employeeService.createEmployee(employee).subscribe(() => {
          this.router.navigate(['/employees']);
        });
      }
    }
  }
}

