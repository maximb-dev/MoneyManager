/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar-mini");

    sidebarToggle.addEventListener("click", (e) => {
      e.preventDefault();
      sidebar.classList.toggle("sidebar-open");
      sidebar.classList.toggle("sidebar-collapse");
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const register = document.querySelector('.menu-item_register'),
      login = document.querySelector('.menu-item_login'),
      logout = document.querySelector('.menu-item_logout');

    register.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('register').open()

    })

    login.addEventListener('click', (e) => {
      e.preventDefault();
      App.getModal('login').open()
    })

    logout.addEventListener('click', (e) => {
      User.logout(response =>
        App.setState('init')
      );
    })

  }
}