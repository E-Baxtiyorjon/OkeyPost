
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Получите адрес для покупок в Великобритании',
      desc: 'Используйте наш виртуальный адрес склада OkeyPost при оформлении заказов в интернет-магазинах Великобритании.',
      image: '/Иллюстрация (1).png'
    },
    {
      number: '02',
      title: 'Ищите и покупайте товары',
      desc: 'Выбирайте необходимые товары в любых магазинах UK va указав наш адрес в качестве адреса доставки (Shipping Address).',
      image: '/Иллюстрация (3).png'
    },
    {
      number: '03',
      title: 'Товары поступают на наш склад',
      desc: 'Мы получаем ваши покупки, взвешиваем, фотографируем va заносим в ваш личный кабинет.',
      image: '/Иллюстрация (4).png'
    },
    {
      number: '04',
      title: 'Объединяйте посылки и экономьте',
      desc: 'Мы бесплатно консолидируем ваши товары из разных магазинов в одну надежную коробку для экономии на доставке.',
      image: '/Иллюстрация (5).png'
    },
    {
      number: '05',
      title: 'Получайте свои покупки',
      desc: 'Выбирайте удобный способ доставки и отслеживайте трекинг посылки прямо до вашего дома или пункта выдачи.',
      image: '/Иллюстрация (2).png'
    }
  ];

  return (
    <div className="how-page-container">
      {/* Top Banner */}
      <div className="how-hero-banner">
        <p className="hero-tag">Один сервис — тысячи магазинов</p>
        <h1 className="hero-title">Научим покупать в Великобритании!</h1>
        <p className="hero-subtitle">Скидки до 70% va гибкие условия доставки</p>
        <button className="primary-btn">Получить адрес</button>
      </div>

      {/* Steps List Section */}
      <div className="how-steps-wrapper">
        <h2 className="how-title">Покупать в Великобритании очень просто</h2>
        <p className="how-subtitle">
          Выбирайте товары в английских интернет-магазинах, оформляйте доставку на наш склад — а мы быстро доставим их вам.
        </p>

        <div className="vertical-steps-list">
          {steps.map((step, idx) => (
            <div key={idx} className="vertical-step-card">
              <div className="step-card-img">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="step-card-content">
                <span className="step-num">{step.number}</span>
                <h3 className="step-heading">{step.title}</h3>
                <p className="step-text">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-action-box">
          <button className="primary-btn">Попробовать</button>
        </div>
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

export default HowItWorks;