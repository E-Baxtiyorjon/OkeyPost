

const Blog = () => {
  const posts = [
    {
      id: 1,
      image: '/blog-1.jpg',
      title: 'Интернет-магазин одежды ASOS: заказы из Англии',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 2,
      image: '/blog-2.jpg',
      title: 'Overstock: брендовые товары с огромными скидками',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 3,
      image: '/blog-3.jpg',
      title: 'Skechers с эффектом памяти стопы',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 4,
      image: '/blog-4.jpg',
      title: '16 лучших подарков с Amazon к 2022 году',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 5,
      image: '/blog-5.jpg',
      title: 'Target — американский супермаркет с ценами от 300 рублей!',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 6,
      image: '/blog-6.jpg',
      title: 'Английский магазин RIPNDIP. Покупаем с максимальной выгодой',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 7,
      image: '/blog-7.jpg',
      title: 'Nasty Gal: стильная и недорогая одежда из Великобритании',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 8,
      image: '/blog-8.jpg',
      title: 'Lookfantastic — покупаем косметику от 500 рублей',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 9,
      image: '/blog-9.jpg',
      title: 'Как купить кроссовки Balenciaga со скидкой 20000 рублей?',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 10,
      image: '/blog-10.jpg',
      title: 'ТОП-7 стильных сумок Louis Vuitton',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 11,
      image: '/blog-11.jpg',
      title: '10 косметических продуктов, которые стоит купить',
      date: '22.10.2021',
      readTime: '3 мин'
    },
    {
      id: 12,
      image: '/blog-12.jpg',
      title: 'Vans — кеды, которые подходят абсолютно каждому',
      date: '22.10.2021',
      readTime: '3 мин'
    }
  ];

  return (
    <div className="blog-page-container">
      <div className="blog-hero-banner">
        <p className="hero-tag">Главная / Блог</p>
        <h1 className="hero-title">Блог</h1>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-img-box">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-card-body">
              <h3 className="blog-card-title">{post.title}</h3>
              <div className="blog-card-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>Читать: {post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="blog-social-banner">
        <h2>Остались вопросы? Спросите нас в соцсетях!</h2>
        <div className="social-links-row">
          <a href="#" className="social-btn">VK</a>
          <a href="#" className="social-btn">Telegram</a>
          <a href="#" className="social-btn">WhatsApp</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;