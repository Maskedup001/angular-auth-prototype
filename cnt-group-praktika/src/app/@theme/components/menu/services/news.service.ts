import { Injectable } from '@angular/core';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: News[] = [
    {
      id: 1,
      title: 'Новость 1',
      description: 'Это описание первой новости. Здесь может быть подробная информация о событии.'
    },
    {
      id: 2,
      title: 'Новость 2',
      description: 'Это описание второй новости. Интересные события происходят в мире технологий.'
    },
    {
      id: 3,
      title: 'Новость 3',
      description: 'Это описание третьей новости. Важные изменения в компании и планы на будущее.'
    },
    {
      id: 4,
      title: 'Новость 4',
      description: 'Это описание четвертой новости. Новые проекты и достижения команды.'
    },
    {
      id: 5,
      title: 'Новость 5',
      description: 'Это описание пятой новости. Анонсы предстоящих мероприятий и событий.'
    },
		// {
    //   id: 6,
    //   title: 'Новость 5',
    //   description: 'Это описание пятой новости. Анонсы предстоящих мероприятий и событий.'
    // }
  ];

  constructor() { }

  // Получить все новости
  getAllNews(): News[] {
    return this.news;
  }

  // Получить новость по ID
  getNewsById(id: number): News | undefined {
    return this.news.find(item => item.id === id);
  }

  // Добавить новую новость
  addNews(news: Omit<News, 'id'>): void {
    const newId = Math.max(...this.news.map(item => item.id)) + 1;
    this.news.push({ ...news, id: newId });
  }

  // Обновить новость
  updateNews(id: number, updatedNews: Partial<News>): void {
    const index = this.news.findIndex(item => item.id === id);
    if (index !== -1) {
      this.news[index] = { ...this.news[index], ...updatedNews };
    }
  }

  // Удалить новость
  deleteNews(id: number): void {
    this.news = this.news.filter(item => item.id !== id);
  }
}