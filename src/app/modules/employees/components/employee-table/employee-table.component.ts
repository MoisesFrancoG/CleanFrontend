import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../../../core/models/Employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
})
export class EmployeeTableComponent {
  @Input() employees: Employee[] = [];
  @Output() delete = new EventEmitter<number>();

  deleteEmployee(id: number) {
    this.delete.emit(id);
  }
}
