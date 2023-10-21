import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    constructor(private httpClient: HttpClient) {}

    public getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>('http://localhost:3000/users');
    }

    public searchByName(name: string): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(`http://localhost:3000/users?name_like=${name}`);
    }

    public getEmployeeById(id: string): Observable<Employee> {
        console.log("🚀 ~ file: employee.service.ts:21 ~ EmployeeService ~ getEmployeeById ~ id:", id)
        return this.httpClient.get<Employee>(`http://localhost:3000/users/${id}`);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.put<Employee>(`http://localhost:3000/users/${employee.id}`, employee);
    }

    public deleteEmployee(id: string): Observable<void> {
        return this.httpClient.delete<void>(`http://localhost:3000/users/${id}`);
    }

    //add employee
    public addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>('http://localhost:8000/users', employee);
    }
}
