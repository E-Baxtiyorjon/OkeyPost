

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      image: '/Иллюстрация (1).png',
      title: 'ВЫ ВЫБИРАЕТЕ ТОВАР',
      description: 'в интернет-магазинах Великобритании и указываете адрес склада OkeyPost'
    },
    {
      id: 2,
      image: '/Иллюстрация (3).png',
      title: 'ПОКУПКИ ПРИХОДЯТ НА СКЛАД',
      description: 'и появляются в вашем личном кабинете на нашем сайте'
    },
    {
      id: 3,
      image: '/Иллюстрация (4).png',
      title: 'ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ',
      description: 'в надежной упаковке, по выгодной цене и очень быстро'
    },
    {
      id: 4,
      image: '/Иллюстрация (5).png',
      title: 'ЗАБИРАЕТЕ СВОЮ ПОСЫЛКУ',
      description: 'в пункте выдачи или в процессе доставки курьером'
    }
  ];

  return (
    <section className="steps-container">
      <h2 className="steps-title">
        4 простых шага для ваших<br />покупок в Великобритании
      </h2>

      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-image-wrapper">
              <img src={step.image} alt={step.title} className="step-image" />
            </div>
            <h3 className="step-card-title">{step.title}</h3>
            <p className="step-card-desc">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="steps-footer-box">
        <p className="steps-footer-text">
          Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас:
        </p>
        <button className="primary-btn">Быстрая покупка</button>
      </div>

      <div className="banner-card">
        <div className="banner-image-box">
          <img src="/Иллюстрация (6).png" alt="Virtual Tour" className="banner-image" />
        </div>
        <div className="banner-content">
          <h2 className="banner-title">
            Виртуальный тур по нашему складу в реальном времени
          </h2>
          <p className="banner-desc">
            Вы можете всегда посмотреть на нашу слаженную работу на складе
          </p>
          <button className="primary-btn">Попробовать</button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;