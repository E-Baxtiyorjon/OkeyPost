

const Prices = () => {
  const topServices = [
    {
      id: 1,
      image: '/Иллюстрация.png',
      title: 'Ваш личный адрес для покупок',
      desc: 'На нашем складе в Англии бесплатно и безгранично',
      price: 'Бесплатно'
    },
    {
      id: 2,
      image: '/Иллюстрация (1).png',
      title: 'Объединение нескольких посылок в одну',
      desc: 'Экономьте на доставке, собирая все покупки в одну коробку',
      price: '£0.00'
    },
    {
      id: 3,
      image: '/Иллюстрация (4).png',
      title: 'Усиленная упаковка по запросу',
      desc: 'Надежно упакуем хрупкие вещи, технику и электронику',
      price: '£5.00'
    },
    {
      id: 4,
      image: '/Иллюстрация (5).png',
      title: 'Хранение входящих посылок 30 дней',
      desc: 'Бесплатный срок хранения ваших покупок на складе',
      price: 'Бесплатно'
    }
  ];

  const warehouseServices = [
    { title: 'Консолидация', price: '£0.00 / 1 трек' },
    { title: 'Заполнение декларации', price: '£1.00' },
    { title: 'Дополнительная упаковка', price: '£3.50' },
    { title: 'Упаковка крупных предметов', price: '£10.00' },
    { title: 'Заполнение декларации', price: '£1.01' },
    { title: 'Разделение заказа', price: '£2.00' }
  ];

  const fullWidthServices = [
    {
      title: 'Сборка исходящей посылки вне очереди или экспресс-сборка',
      desc: 'Ускоренная обработка вашей заявки',
      price: '£5.00'
    },
    {
      title: 'Фото содержимого входящей посылки',
      desc: 'Сделаем 3-5 качественных фото ваших товаров',
      price: '£2.00 / 1 фото'
    },
    {
      title: 'Возврат вещей в магазин',
      desc: 'В случае если товар не подошел и вы хотите вернуть его продавцу',
      price: '£10 + почтовые расходы'
    },
    {
      title: 'Проверка техники на работоспособность',
      desc: 'Включим и проверим базовые функции устройства',
      price: '£10'
    }
  ];

  return (
    <div className="prices-page-container">
      <div className="prices-hero-banner">
        <p className="hero-tag">Главная / Цены</p>
        <h1 className="hero-title">Услуги доставки из Великобритании</h1>
      </div>

      <div className="top-services-grid">
        {topServices.map((item) => (
          <div key={item.id} className="top-service-card">
            <div className="service-img-box">
              <img src={item.image} alt={item.title} />
            </div>
            <h3 className="service-title">{item.title}</h3>
            <p className="service-desc">{item.desc}</p>
            <span className="service-price-badge">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="calc-block">
        <h2 className="section-heading">Онлайн-калькулятор стоимости доставки товара</h2>
        <p className="section-subtext">
          Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки.
        </p>
        <div className="calc-inputs-grid">
          <div className="calc-field">
            <label>Страна:</label>
            <select><option>Россия</option></select>
          </div>
          <div className="calc-field">
            <label>Город:</label>
            <input type="text" defaultValue="Москва" />
          </div>
          <div className="calc-field">
            <label>Индекс:</label>
            <input type="text" placeholder="Введите индекс" />
          </div>
          <div className="calc-field">
            <label>Вес посылки:</label>
            <input type="text" defaultValue="0.5 кг" />
          </div>
        </div>
        <button className="primary-btn calc-btn">Рассчитать</button>
      </div>

      <div className="shipping-options-block">
        <h2 className="section-heading">Варианты доставки:</h2>
        <div className="shipping-list">
          <div className="shipping-card">
            <div className="shipping-info">
              <strong>ПОЧТА РОССИИ</strong>
            </div>
            <div className="shipping-meta">
              <span>Сроки: <strong>10-14 дней</strong></span>
              <span>Стоимость: <strong>от £12.50</strong></span>
              <span>Итого: <strong className="highlight-price">£12.50</strong></span>
            </div>
          </div>
          <div className="shipping-card">
            <div className="shipping-info">
              <strong>EMS ПОЧТА РОССИИ</strong>
            </div>
            <div className="shipping-meta">
              <span>Сроки: <strong>9-12 дней</strong></span>
              <span>Стоимость: <strong>от £16.00</strong></span>
              <span>Итого: <strong className="highlight-price">£16.00</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="warehouse-block">
        <h2 className="section-heading">Услуги склада</h2>
        
        <div className="two-col-grid">
          {warehouseServices.map((srv, idx) => (
            <div key={idx} className="simple-price-card">
              <span>{srv.title}</span>
              <strong>{srv.price}</strong>
            </div>
          ))}
        </div>

        <div className="full-width-list">
          {fullWidthServices.map((srv, idx) => (
            <div key={idx} className="full-price-card">
              <div>
                <h4>{srv.title}</h4>
                <p>{srv.desc}</p>
              </div>
              <strong>{srv.price}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="operator-banner">
        <div className="op-text-side">
          <h2>Попробуйте заказывать с оператором прямо сейчас.</h2>
          <p>Пришлите ссылку на товар, его купят и доставят на наш склад в кратчайшие сроки.</p>
          <div className="op-input-box">
            <input type="text" placeholder="Введите ссылку на товар" />
            <button className="primary-btn">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;