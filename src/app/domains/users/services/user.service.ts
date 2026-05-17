import { Injectable } from "@angular/core"; 
import { UserRegister } from "../models/user.model";
import { Observable, of } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})
export class UserService {
  // Твои данные пользователей
  users: UserRegister[] = [
    {userId: '1', userLogin: 'user1', userPassword: 'root', userEnabled: '1', userFirstName: 'Иван', userLastName: 'Иванов', userPatronymic: 'Иванович', userCreateDate: '2024-06-05 12:00:00', userBirthday: '2000-06-09'},
    {userId: '2', userLogin: 'user2', userPassword: 'root', userEnabled: '2', userFirstName: 'Иван', userLastName: 'Иванов', userPatronymic: 'Иванович', userCreateDate: '2024-06-05 12:00:00', userBirthday: '2000-06-09'},
    {userId: '3', userLogin: 'user3', userPassword: 'root', userEnabled: '3', userFirstName: 'Иван', userLastName: 'Иванов', userPatronymic: 'Иванович', userCreateDate: '2024-06-05 12:00:00', userBirthday: '2000-06-09'}
  ];

  // Твои роли
  roles: { [key: string]: string[] } = {
    '1': ['admin', 'student'],
    '2': ['student'],
    '3': ['admin']
  };

  constructor() {}

  // --- МЕТОДЫ ДЛЯ ИБ-ОПТИМИЗАЦИИ ---

  /**
   * Проверка: залогинен ли пользователь (есть ли токен в браузере)
   */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  /**
   * Метод для выхода (удаление прав)
   */
  logout(): void {
    localStorage.removeItem('token');
    // Можно добавить редирект на главную, если нужно
  }

  // --- ТВОИ ОРИГИНАЛЬНЫЕ МЕТОДЫ ---

  getUserRoles(userId: string | number): Observable<string[]> {
    return of(this.roles[userId] || []);
  }

  // ПОЛУЧЕНИЕ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ 
  getAllRoles(): Observable<{ [key: string]: string[] }> {
    return of(this.roles);
  }

  updateUserRoles(userId: string | number, roles: string[]): Observable<any> {
    this.roles[userId] = roles;
    return of({ roles: this.roles });
  }

  getUsers(): Observable<UserRegister[]> {
    return of(this.users);
  }
}