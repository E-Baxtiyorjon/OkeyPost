const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">
            Доставка товаров <br />
            из Великобритании <br />
            в Россию
          </h1>
          <p className="header-subtitle">
            Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, <br />
            чтобы покупать со скидками в UK одежду, обувь, гаджеты известных <br />
            брендов и безопасно отправлять вещи в Россию.
          </p>
          <button className="header-btn">Получить адрес в UK</button>
        </div>

        <div className="header-image">
          <img src="/Иллюстрация.png" alt="Delivery Illustration" />
        </div>
      </div>
    </header>
  );
};

export default Header;