import { Injectable } from "@angular/core"; 
import { UserRegister } from "../models/user.model";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserRegister[] = [
    {userId: '1', userLogin: 'user1', userPassword: 'root', userEnabled: '1', userFirstName: 'Иван', userLastName: 'Иванов', userPatronymic: 'Иванович', userCreateDate: '2024-06-05 12:00:00', userBirthday: '2000-06-09'},
    {userId: '2', userLogin: 'user2', userPassword: 'root', userEnabled: '2', userFirstName: 'Иван', userLastName: 'Иванов', userPatronymic: 'Иванович', userCreateDate: '2024-06-05 12:00:00', userBirthday: '2000-06-09'},
    {userId: '3', userLogin: 'user3', userPassword: 'root', userEnabled: '3', userFirstName: 'Иван', userLastName: 'Иванов', userPatronymic: 'Иванович', userCreateDate: '2024-06-05 12:00:00', userBirthday: '2000-06-09'}
  ];

  roles: { [key: string]: string[] } = {
    '1': ['admin', 'student'],
    '2': ['student'],
    '3': ['admin']
  };

  constructor() {}

  // --- МЕТОДЫ ДЛЯ ИБ-ОПТИМИЗАЦИИ (ОБНОВЛЕННЫЕ) ---

  /**
   * Проверка: залогинен ли пользователь.
   * ТЕПЕРЬ ПРОВЕРЯЕТ И localStorage, И sessionStorage (для разработки)
   */
  isLoggedIn(): boolean {
    // Ищем токен в localStorage (для постоянного входа) ИЛИ в sessionStorage (для временного теста через F12)
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    // Если нашли что-то, что не равно null или пустой строке -> значит авторизован
    return !!token && token.length > 0;
  }

  /**
   * Метод для выхода (очистка данных и редирект)
   */
  logout(): void {
    // Для безопасности чистим оба хранилища
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    
    // Здесь можешь добавить: this.router.navigate(['/mainPage']); если передашь Router в конструктор
  }

  // --- ТВОИ ОРИГИНАЛЬНЫЕ МЕТОДЫ (БЕЗ ИЗМЕНЕНИЙ) ---

  getUserRoles(userId: string | number): Observable<string[]> {
    return of(this.roles[userId] || []);
  }

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