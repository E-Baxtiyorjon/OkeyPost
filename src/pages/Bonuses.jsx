

const Bonuses = () => {
  const steps = [
    {
      id: 1,
      icon: '/Illustration-bonus-1.png',
      title: 'Начните рекомендовать сервис',
      desc: 'Делитесь своей уникальной реферальной ссылкой в социальных сетях, блогах или лично с друзьями.'
    },
    {
      id: 2,
      icon: '/Illustration-bonus-2.png',
      title: 'Получайте пожизненный доход',
      desc: 'Мы выплачиваем вам процент от стоимости каждой доставки зарегистрированных по вашей ссылке пользователей.'
    },
    {
      id: 3,
      icon: '/Illustration-bonus-3.png',
      title: 'Привлекайте клиентов',
      desc: 'Чем больше рефералов перейдут по вашей ссылке и отправят посылки, тем выше ваш итоговый доход.'
    },
    {
      id: 4,
      icon: '/Illustration-bonus-4.png',
      title: 'Выводите деньги',
      desc: 'Удобный вывод заработанных средств на ваш счет или банковскую карту в любое удобное время.'
    },
    {
      id: 5,
      icon: '/Illustration-bonus-5.png',
      title: 'Используйте реферальную ссылку',
      desc: 'Скопируйте ссылку в личном кабинете и отправляйте друзьям или размещайте на своих ресурсах.'
    }
  ];

  return (
    <div className="bonuses-page-container">
      <div className="bonuses-hero-banner">
        <p className="hero-tag">Главная / Бонусы</p>
        <h1 className="hero-title">Бонусы и партнёрская программа</h1>
        <p className="hero-subtitle">Экономьте на доставках и зарабатывайте вместе с нами</p>
        <button className="primary-btn hero-btn">Получить ссылку</button>
      </div>

      <div className="bonuses-section">
        <h2 className="section-heading centered-title">Зарабатывать с нами — проще простого:</h2>
        <div className="bonuses-grid">
          {steps.map((item) => (
            <div key={item.id} className="bonus-card">
              <div className="bonus-icon-box">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="bonus-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-content">
          <h2>Готовы начать зарабатывать вместе с нами?</h2>
          <p>Получите партнерскую ссылку прямо сейчас и начинайте зарабатывать.</p>
          <button className="primary-btn">Получить ссылку</button>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;