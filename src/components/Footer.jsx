
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and Socials */}
        <div className="footer-brand">
          <img src="/Лого.png" alt="OkeyPost" className="footer-logo" />
          <div className="footer-socials">
            <a href="#" className="social-icon">
              <img src="/Иконка.png" alt="WhatsApp" />
            </a>
            <a href="#" className="social-icon">
              <img src="/Иконка (1).png" alt="Viber" />
            </a>
            <a href="#" className="social-icon highlighted">
              <img src="/Иконка (2).png" alt="Chat" />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="footer-column">
          <h4 className="footer-column-title">О компании</h4>
          <ul className="footer-links">
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Цены</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Вакансии</a></li>
            <li><a href="#">Соглашение о персональных данных</a></li>
            <li><a href="#">Условия использования</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="footer-column">
          <h4 className="footer-column-title">Полезное</h4>
          <ul className="footer-links">
            <li><a href="#">Как работает наш сервис</a></li>
            <li><a href="#">Как покупать в Великобритании</a></li>
            <li><a href="#">Ответы на частые вопросы</a></li>
            <li><a href="#">Популярные магазины</a></li>
            <li><a href="#">Черный список магазинов</a></li>
            <li><a href="#">Актуальные распродажи</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className="footer-column">
          <h4 className="footer-column-title">Спецпроекты</h4>
          <ul className="footer-links">
            <li><a href="#">50% на первую доставку</a></li>
            <li><a href="#">Скидки для постоянных клиентов</a></li>
            <li><a href="#">Реферальная программа</a></li>
            <li><a href="#">Кэшбек Mr. Rebates и Rakuten</a></li>
            <li><a href="#">Stop Fraud</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2021 Okeypost. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;