

const Calculator = () => {
  return (
    <section className="calculator-section">
      <div className="calculator-container">
        <h2 className="calculator-title">
          OkeyPost удобная и быстрая доставка <br />
          посылок из Великобритании
        </h2>
        <p className="calculator-subtitle">
          Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши <br />
          посылки на складе, при необходимости объединим несколько доставок в одну <br />
          и отправим их к вам надежно упакованными.
        </p>

        <div className="calculator-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Страна:</label>
              <div className="input-wrapper">
                <span className="input-icon">🌐</span>
                <select defaultValue="Россия">
                  <option value="Россия">Россия</option>
                  <option value="Казахстан">Казахстан</option>
                  <option value="Узбекистан">Узбекистан</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Город:</label>
              <div className="input-wrapper">
                <span className="input-icon">🏙️</span>
                <input type="text" defaultValue="Москва" placeholder="Город" />
              </div>
            </div>

            <div className="form-group">
              <label>Индекс:</label>
              <div className="input-wrapper">
                <span className="input-icon">📮</span>
                <input type="text" placeholder="Введите индекс" />
              </div>
            </div>

            <div className="form-group">
              <label>Вес посылки:</label>
              <div className="input-wrapper">
                <span className="input-icon">⚖️</span>
                <input type="text" defaultValue="0.5" placeholder="Вес" />
              </div>
            </div>

            <div className="form-group">
              <label>Дополнительные услуги:</label>
              <div className="input-wrapper">
                <span className="input-icon">📋</span>
                <select defaultValue="">
                  <option value="" disabled hidden>Выберите услуги</option>
                  <option value="1">Страховка</option>
                  <option value="2">Упаковка</option>
                </select>
              </div>
            </div>
          </div>

          <button className="calc-btn">Рассчитать</button>
        </div>

        <div className="delivery-variants">
          <h3>Варианты доставки:</h3>

          <div className="variant-card">
            <div className="variant-brand">
              <div className="variant-logo">
                <img src="/Иконка.png" alt="Почта России" />
              </div>
              <span className="variant-name">ПОЧТА РОССИИ</span>
            </div>
            <div className="variant-info">
              <span className="info-label">Сроки:</span>
              <span className="info-value">10-14 дней</span>
            </div>
            <div className="variant-info">
              <span className="info-label">Стоимость доставки:</span>
              <span className="info-value">от £27.00 ℹ️</span>
            </div>
            <div className="variant-info">
              <span className="info-label">Итого:</span>
              <span className="info-value bold">£41.99</span>
            </div>
            <button className="expand-btn">⌄</button>
          </div>

          <div className="variant-card">
            <div className="variant-brand">
              <div className="variant-logo">
                <img src="/Иконка (1).png" alt="EMS Почта России" />
              </div>
              <span className="variant-name">EMS ПОЧТА РОССИИ</span>
            </div>
            <div className="variant-info">
              <span className="info-label">Сроки:</span>
              <span className="info-value">9-12 дней</span>
            </div>
            <div className="variant-info">
              <span className="info-label">Стоимость доставки:</span>
              <span className="info-value">от £40.00 ℹ️</span>
            </div>
            <div className="variant-info">
              <span className="info-label">Итого:</span>
              <span className="info-value bold">£54.55</span>
            </div>
            <button className="expand-btn">⌄</button>
          </div>

          <div className="variant-card">
            <div className="variant-brand">
              <div className="variant-logo">
                <img src="/Иконка (2).png" alt="Почта России мелкие пакеты" />
              </div>
              <span className="variant-name">ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ</span>
            </div>
            <div className="variant-info">
              <span className="info-label">Сроки:</span>
              <span className="info-value">10-14 дней</span>
            </div>
            <div className="variant-info">
              <span className="info-label">Стоимость доставки:</span>
              <span className="info-value">от £13.00 ℹ️</span>
            </div>
            <div className="variant-info">
              <span className="info-label">Итого:</span>
              <span className="info-value bold">£90.50</span>
            </div>
            <button className="expand-btn">⌄</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;