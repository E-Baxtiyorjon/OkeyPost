

const Sales = () => {
  const salesList = [
    {
      id: 1,
      image: '/фон.png',
      title: 'Abercrombie & Fitch',
      desc: 'Цены от £7.99 (2000₽) + скидка 20% на весь ассортимент по промокоду',
      promo: 'CLEARANCE',
      linkText: 'Только онлайн распродажа →'
    },
    {
      id: 2,
      image: '/фон (1).png',
      title: 'Timberland',
      desc: 'NEW! Скидка 20% на ВСЕ по промокоду',
      promo: '20OFF',
      linkText: 'Только онлайн распродажа →'
    },
    {
      id: 3,
      image: '/фон (3).png',
      title: 'Polo Ralph Lauren',
      desc: 'Скидки до 50% на выборочный ассортимент',
      promo: 'NO CODE',
      linkText: 'Только онлайн распродажа →'
    },
    {
      id: 4,
      image: '/фон (4).png',
      title: 'Hollister Co.',
      desc: 'Цены от £7.99 + дополнительная скидка 15% по промокоду',
      promo: '15OFF',
      linkText: 'Только онлайн распродажа →'
    },
    {
      id: 5,
      image: '/Куртка.png',
      title: 'Michael Kors',
      desc: 'Распродажа до 60% на сумки и аксессуары',
      promo: 'MKSALE',
      linkText: 'В магазин →'
    },
    {
      id: 6,
      image: '/Футболка.png',
      title: 'Asos / Off-White',
      desc: 'Black Friday Early Access! Скидки до 70%',
      promo: 'BLACK30',
      linkText: 'Только онлайн распродажа →'
    },
    {
      id: 7,
      image: '/Иллюстрация.png',
      title: 'Victoria\'s Secret',
      desc: 'Pajamas & Robes от £29.99! Трусики от £5',
      promo: 'NO CODE',
      linkText: 'В магазин →'
    },
    {
      id: 8,
      image: '/Иллюстрация (1).png',
      title: 'Levi\'s',
      desc: 'Джинсы от £29.99! Скидка 30% на всё',
      promo: 'LEVI30',
      linkText: 'В магазин →'
    },
    {
      id: 9,
      image: '/Иллюстрация (2).png',
      title: 'UGG + UGG boots',
      desc: 'Распродажа угг от £49.99',
      promo: 'UGGSALE',
      linkText: 'Только онлайн распродажа →'
    },
    {
      id: 10,
      image: '/Иллюстрация (3).png',
      title: 'New Balance',
      desc: 'Кроссовки со скидкой до 50%',
      promo: 'NBSALE',
      linkText: 'Только онлайн распродажа →'
    }
  ];

  return (
    <div className="sales-page-container">
      {/* Hero Banner */}
      <div className="sales-hero-banner">
        <p className="hero-tag">Главное / Распродажи</p>
        <h1 className="hero-title">Распродажи</h1>
        <p className="hero-subtitle">ранний доступ к распродажам в магазинах Великобритании</p>
        <button className="primary-btn">Быстрая покупка</button>
      </div>

      {/* Main Title */}
      <div className="sales-header-block">
        <h2 className="sales-main-heading">
          Black Friday Early Access<br />
          ранний доступ к распродажам в магазинах Великобритании!
        </h2>
      </div>

      {/* Grid Cards */}
      <div className="sales-grid">
        {salesList.map((item) => (
          <div key={item.id} className="sales-card">
            <div className="sales-card-img-box">
              <img src={item.image} alt={item.title} className="sales-card-img" />
            </div>
            <div className="sales-card-content">
              <h3 className="sales-card-title">{item.title}</h3>
              <p className="sales-card-desc">{item.desc}</p>
              <a href="#" className="sales-card-link">{item.linkText}</a>
            </div>
          </div>
        ))}
      </div>

      {/* Questions Banner */}
      <div className="questions-banner">
        <h2 className="questions-title">Остались вопросы? Спросите нас в соцсетях!</h2>
        <div className="questions-socials">
          <a href="#" className="q-icon"><img src="/Иконка.png" alt="WhatsApp" /></a>
          <a href="#" className="q-icon"><img src="/Иконка (1).png" alt="Viber" /></a>
          <a href="#" className="q-icon"><img src="/Иконка (2).png" alt="Chat" /></a>
        </div>
      </div>
    </div>
  );
};

export default Sales;