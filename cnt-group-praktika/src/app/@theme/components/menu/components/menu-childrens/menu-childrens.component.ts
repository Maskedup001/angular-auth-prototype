import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-childrens',
  templateUrl: './menu-childrens.component.html',
  styleUrls: ['./menu-childrens.component.css']
})
export class MenuChildrensComponent implements OnInit {
  @Input() sidebarHidden: boolean = true;
  @Input() parentItem: MenuItem | null = null;
  menuChildrenItems: MenuItem[] | null = null;

  constructor(
    public menuService: MenuService, 
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.parentItem) {
      this.menuChildrenItems = this.menuService.getChildrenItems(this.parentItem);
    } else {
      this.menuService.currentItem$.subscribe(currentItem => {
        if (currentItem) {
          this.menuChildrenItems = this.menuService.getChildrenItems(currentItem);
        }
      });
    }
  }

  // ПОЛНОСТЬЮ ИСПРАВЛЕННЫЙ МЕТОД
  navigateTo(item: MenuItem, event: Event) {
    event.stopPropagation();

    // Список "пустых" путей, которые не должны вызывать роутер
    const ignoredPaths = ['NULL', 'dashboard', 'statistics', ''];

    if (!item.itemLink || ignoredPaths.includes(item.itemLink)) {
      console.log('Клик по категории (без перехода):', item.itemName);
      this.toggleSubMenu(item);
      return; // Прерываем выполнение, чтобы не было ошибки NG04002
    }

    // Если путь валидный, выполняем переход
    const link = item.itemLink.startsWith('/') ? item.itemLink : '/' + item.itemLink;
    
    this.router.navigateByUrl(link).catch(err => {
      console.warn('Маршрут не найден в системе:', item.itemLink);
    });
  }

  toggleSubMenu(item: MenuItem) {
    item.showSubMenu = !item.showSubMenu;
    if (item.showSubMenu) {
      item.subMenuItems = this.menuService.getChildrenItems(item);
    } else {
      item.subMenuItems = null;
    }
  }

  getSafeHtml(icon: string | null): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon || '');
  }
}