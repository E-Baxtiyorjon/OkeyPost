

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <p className="feature-text">Экономия <br />до 70%</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <p className="feature-text">Только подлинная <br />продукция</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <p className="feature-text">Оперативная <br />доставка</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00C896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <p className="feature-text">Огромный <br />выбор товаров</p>
          </div>
        </div>

        <div className="banner-card">
          <div className="banner-image">
            <img src="/Иллюстрация (1).png" alt="Shopping Illustration" />
          </div>
          <div className="banner-content">
            <h2 className="banner-title">
              Поручите нашим мастерам шопинга оформить <br />
              заказы в английских магазинах и освободите время <br />
              для более важных дел.
            </h2>
            <p className="banner-subtitle">
              Такой способ покупки также подойдёт, если магазин принимает только английские карты.
            </p>
            <button className="banner-btn">Попробовать</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;