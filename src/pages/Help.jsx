import  { useState } from 'react';

const Help = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faqCategories = [
    {
      title: 'Виртуальный адрес в Великобритании',
      items: [
        { id: 101, q: 'Как получить виртуальный адрес для покупок в Англии?', a: 'После регистрации в OkeyPost вы автоматически получаете персональный адрес нашего склада в Великобритании.' },
        { id: 102, q: 'Как оформить заказ на виртуальный адрес?', a: 'В поле Shipping Address в интернет-магазине укажите адрес нашего склада с вашим личным номером Suite.' },
        { id: 103, q: 'Сколько стоит адрес?', a: 'Предоставление виртуального адреса абсолютно бесплатно.' },
        { id: 104, q: 'Что делать, если магазин не принимает карту?', a: 'Вы можете воспользоваться услугой "Покупка с оператором", и мы выкупим товар за вас.' }
      ]
    },
    {
      title: 'Покупки в магазинах Англии, скидки и промокоды',
      items: [
        { id: 201, q: 'В каких магазинах можно покупать?', a: 'Вы можете делать покупки в любых онлайн-магазинах Великобритании, отправляющих товары по UK.' },
        { id: 202, q: 'Как узнать про актуальные скидки?', a: 'Следите за разделом "Распродажи" на нашем сайте, где собраны лучшие акции.' }
      ]
    },
    {
      title: 'Доставка из Англии',
      items: [
        { id: 301, q: 'Как долго идет посылка?', a: 'В среднем доставка занимает от 7 до 14 дней в зависимости от выбранной службы.' },
        { id: 302, q: 'Как отследить местоположение посылки?', a: 'После отправки вам будет предоставлен трек-номер для отслеживания.' }
      ]
    },
    {
      title: 'Оплата',
      items: [
        { id: 401, q: 'Как оплатить услуги сервиса?', a: 'Оплатить можно банковскими картами, электронными кошельками и другими удобными способами.' }
      ]
    },
    {
      title: 'Общие вопросы',
      items: [
        { id: 501, q: 'Что делать, если посылка задерживается?', a: 'Напишите в нашу службу поддержки, и мы оперативно выясним статус вашего отправления.' }
      ]
    },
    {
      title: 'Возврат',
      items: [
        { id: 601, q: 'Как оформить возврат товара продавцу?', a: 'Свяжитесь с нами через личный кабинет, и мы поможем оформить возврат согласно правилам магазина.' }
      ]
    }
  ];

  return (
    <div className="help-page-container">
      <div className="help-hero-banner">
        <p className="hero-tag">Главная / Помощь</p>
        <h1 className="hero-title">Отвечаем на вопросы доставки</h1>
      </div>

      <div className="help-search-box">
        <input type="text" placeholder="Поиск по вопросам..." className="help-search-input" />
      </div>

      <div className="faq-sections-list">
        {faqCategories.map((cat, catIdx) => (
          <div key={catIdx} className="faq-category">
            <h2 className="faq-category-title">{cat.title}</h2>
            <div className="faq-accordion-group">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className={`faq-accordion-item ${openId === item.id ? 'active' : ''}`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="faq-accordion-header">
                    <span>{item.q}</span>
                    <span className="faq-icon">{openId === item.id ? '−' : '+'}</span>
                  </div>
                  {openId === item.id && (
                    <div className="faq-accordion-body">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;