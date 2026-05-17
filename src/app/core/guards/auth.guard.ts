import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../domains/users/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService, 
    private router: Router
  ) {}

  canActivate(): boolean {
    // Вызываем проверку из нашего UserService
    if (this.userService.isLoggedIn()) {
      return true; // Пропуск разрешен
    } else {
      // ИБ-логика: если токена нет, не даем даже загрузить страницу
      console.warn('Доступ заблокирован: Требуется авторизация');
      this.router.navigate(['/mainPage']); 
      return false; 
    }
  }
}