

const ReviewsSection = () => {
  const stats = [
    {
      id: 1,
      icon: '/Иконка.png',
      title: 'Больше не нужно ждать',
      desc: 'Заказывайте товары из Великобритании с доставкой от 3-х дней'
    },
    {
      id: 2,
      icon: '/Иконка (1).png',
      title: 'Быстрая обработка посылок',
      desc: 'Посылка готова к отправке в день поступления на склад'
    },
    {
      id: 3,
      icon: '/Иконка (2).png',
      title: 'SMS уведомления',
      desc: 'Отслеживайте движение вашей посылки в режиме реального времени'
    }
  ];

  const reviews = [
    {
      id: 1,
      image: '/фон.png',
      name: 'VASILIY K.',
      text: 'Один из лучших сервисов с пересылкой из Великобритании!',
      date: '12 Ноября 2021',
      city: 'Санкт-Петербург'
    },
    {
      id: 2,
      image: '/Куртка.png',
      name: 'Oksana D.',
      text: 'Очень классный сервис, быстрая доставка. Все супер!',
      date: '10 Ноября 2021',
      city: 'Москва'
    },
    {
      id: 3,
      image: '/Футболка.png',
      name: 'EKATERINA',
      text: 'Заказывала первый раз! Все пришло быстро и отлично запаковано.',
      date: '08 Ноября 2021',
      city: 'Екатеринбург'
    },
    {
      id: 4,
      image: '/фон (4).png',
      name: 'Dmitry',
      text: 'Очень быстро доставили! Огромное спасибо всей команде!',
      date: '05 Ноября 2021',
      city: 'Пермь'
    }
  ];

  return (
    <section className="reviews-section">
      <h2 className="reviews-main-title">
        120 000 довольных клиентов в России<br />уже сделали свой выбор
      </h2>
      <p className="reviews-subtitle">
        За время работы мы отправили более 500 000 посылок<br />по всей России и СНГ
      </p>

      <div className="stats-grid">
        {stats.map((item) => (
          <div key={item.id} className="stat-card">
            <img src={item.icon} alt={item.title} className="stat-icon" />
            <h3 className="stat-title">{item.title}</h3>
            <p className="stat-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="reviews-block-title">Отзывы и цитаты блогеров:</h2>

      <div className="reviews-grid">
        {reviews.map((rev) => (
          <div key={rev.id} className="review-card">
            <div className="review-img-wrapper">
              <img src={rev.image} alt={rev.name} className="review-img" />
            </div>
            <div className="review-content">
              <h4 className="review-name">{rev.name}</h4>
              <div className="review-rating">★★★★★</div>
              <p className="review-text">{rev.text}</p>
              <div className="review-meta">
                <span><strong>Дата:</strong> {rev.date}</span>
                <span><strong>Город:</strong> {rev.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="reviews-btn-wrapper">
        <button className="primary-btn">Все отзывы</button>
      </div>

      <div className="info-text-block">
        <h2 className="info-title">Ваш личный адрес в Великобритании для покупок</h2>
        <p>
          С нами покупки становятся вдвойне приятнее, ведь мы даем вам возможность покупать товары в магазинах Великобритании
          по самым выгодным ценам! Вы сами выбираете понравившиеся вещи, а мы берем на себя их доставку прямо к вам домой.
        </p>
        <p>
          Вам больше не нужно переплачивать посредникам и беспокоиться о надежности доставки — мы гарантируем сохранность ваших покупок.
        </p>
      </div>

      <div className="subscribe-banner">
        <h3 className="subscribe-title">
          Подпишитесь и будьте в курсе всех скидок и акций магазинов Великобритании!
        </h3>
        <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Введите ваш email" className="subscribe-input" />
          <button type="submit" className="primary-btn">Подписаться</button>
        </form>
      </div>
    </section>
  );
};

export default ReviewsSection;