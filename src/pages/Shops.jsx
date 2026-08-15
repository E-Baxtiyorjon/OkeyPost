

const Shops = () => {
  const shopsList = [
    { id: 1, name: 'Primark', category: 'Одежда, обувь, аксессуары' },
    { id: 2, name: 'H&M', category: 'Одежда' },
    { id: 3, name: 'Mango Outlet', category: 'Распродажи' },
    { id: 4, name: 'Next', category: 'Одежда' },
    { id: 5, name: 'SportsDirect', category: 'Спорттовары' },
    { id: 6, name: 'F&F', category: 'Одежда и обувь' },
    { id: 7, name: 'George at ASDA', category: 'Одежда для всей семьи' },
    { id: 8, name: 'Accessorize', category: 'Аксессуары' },
    { id: 9, name: 'Adidas', category: 'Спорт и стиль' },
    { id: 10, name: 'Amazon', category: 'Маркетплейс' },
    { id: 11, name: 'ASOS', category: 'Мультибренд' },
    { id: 12, name: 'Boohoo', category: 'Молодежная одежда' },
    { id: 13, name: 'Crocs', category: 'Обувь' },
    { id: 14, name: 'eBay', category: 'Аукцион и маркетплейс' },
    { id: 15, name: 'Matalan', category: 'Для всей семьи' },
    { id: 16, name: 'Mothercare', category: 'Товары для детей' },
    { id: 17, name: 'Mountain Warehouse', category: 'Активный отдых' },
    { id: 18, name: 'Puma', category: 'Спортивная одежда' },
    { id: 19, name: 'Timberland', category: 'Обувь и одежда' },
    { id: 20, name: 'TK Maxx', category: 'Бренды со скидками' },
    { id: 21, name: 'BrandAlley', category: 'Закрытые распродажи' },
    { id: 22, name: 'Marks & Spencer', category: 'Универмаг' },
    { id: 23, name: 'Clarks', category: 'Обувь' },
    { id: 24, name: 'Zara', category: 'Модная одежда' },
    { id: 25, name: 'Mango', category: 'Женская и мужская одежда' },
    { id: 26, name: 'Zulily', category: 'Товары со скидками' },
    { id: 27, name: 'Panache Kids', category: 'Детская брендовая обувь' },
    { id: 28, name: 'Betterware', category: 'Товары для дома' },
    { id: 29, name: 'Tucci Store', category: 'Мужская одежда' },
    { id: 30, name: 'River Island', category: 'Модная одежда' }
  ];

  return (
    <div className="shops-page-container">
      <div className="shops-hero-banner">
        <p className="hero-tag">Главная / Популярные магазины</p>
        <h1 className="hero-title">Популярные магазины</h1>
      </div>

      <div className="shops-grid">
        {shopsList.map((shop) => (
          <div key={shop.id} className="shop-card">
            <div className="shop-logo-placeholder">
              <span className="shop-logo-text">{shop.name}</span>
            </div>
            <h3 className="shop-name">{shop.name}</h3>
            <p className="shop-category">{shop.category}</p>
          </div>
        ))}
      </div>

      <div className="shops-social-banner">
        <h2>Остались вопросы? Спросите нас в соцсетях!</h2>
        <div className="social-links-row">
          <a href="#" className="social-btn">VK</a>
          <a href="#" className="social-btn">Telegram</a>
          <a href="#" className="social-btn">WhatsApp</a>
        </div>
      </div>
    </div>
  );
};

export default Shops;