
# ProtoType: Client-Side Auth & UI Concepts

> **Status: Archived / Educational Prototype**
> Данный проект является концептуальным прототипом (MVP) для отработки навыков Angular и основ клиентской безопасности. 

---

### 🛠 Стек технологий

* **Framework:** Angular 16+
* **Security:** Angular Route Guards
* **Storage:** LocalStorage (имитация сессии)
* **State Management:** RxJS Observables

---

### 🔐 Логика авторизации (Client-Side)

В приложении реализована механика **Client-Side Authorization**. Это учебный пример того, как работает разграничение прав доступа на уровне фронтенда.

**Механизм работы:**
* Маршрут `/administration` защищен с помощью сервиса `AuthGuard`.
* При переходе система проверяет наличие ключа `token` в `localStorage` браузера.
* Если токен отсутствует, доступ блокируется на уровне роутинга.

---

### 🧪 Тестирование механизмов защиты

Для имитации процесса авторизации используйте консоль разработчика (F12):

**1. Имитация входа (установка токена):**
```javascript
localStorage.setItem('token', 'admin_access_token_v1');

```

**2. Имитация выхода (удаление токена):**

```javascript
localStorage.removeItem('token');

```

---

### 🏗 Структура проекта

* `src/app/core/guards/auth.guard.ts` — логика проверки прав доступа.
* `src/app/pages/pages-routing.module.ts` — конфигурация защищенных путей.
* `src/app/@theme/components/menu/` — обработка навигации и состояний меню.

---

*Проект реализован в учебных целях в рамках освоения навыков разработки защищенных систем.*
