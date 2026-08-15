

const Comparison = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        <h2 className="comparison-title">Насколько выгодно покупать?</h2>

        <div className="category-tabs">
          <button className="tab-arrow left">←</button>
          <div className="tabs-list">
            <button className="tab-btn active">Одежда</button>
            <button className="tab-btn">Электроника</button>
            <button className="tab-btn">Аксессуары</button>
            <button className="tab-btn">Для детей</button>
            <button className="tab-btn">Для спорта</button>
            <button className="tab-btn">Косметика</button>
          </div>
          <button className="tab-arrow right">→</button>
        </div>

        <div className="product-card">
          <div className="product-info-left">
            <h3>Columbia Barlow Pass 550 TurboDown Jacket</h3>
            <div className="price-box">
              <span className="flag">🇷🇺</span>
              <div>
                <p className="price-label">Цена в России</p>
                <p className="price-value">7891,46₽</p>
              </div>
            </div>
          </div>

          <div className="product-image-container">
            <img src="/Куртка.png" alt="Columbia Jacket" className="product-img" />
          </div>

          <div className="product-info-right">
            <h3>Доставка одежды из Великобритании от <span className="highlight">£7.79</span></h3>
            <div className="price-box">
              <span className="flag">🇬🇧</span>
              <div>
                <p className="price-label">Цена в UK</p>
                <p className="price-value green">£80.62</p>
              </div>
            </div>
          </div>
        </div>

        <div className="comparison-footer">
          <div className="side-product left-product">
            <img src="/Футболка.png" alt="T-Shirt" />
          </div>

          <button className="slider-arrow left">←</button>

          <div className="savings-info">
            <p className="delivery-time">Срок доставки примерно 10 дней</p>
            <p className="savings-text">Вы экономите до <span className="green-text">$119.56</span></p>
          </div>

          <button className="slider-arrow right">→</button>

          <div className="side-product right-product">
            <img src="/Layer 3 1.png" alt="Jeans" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;