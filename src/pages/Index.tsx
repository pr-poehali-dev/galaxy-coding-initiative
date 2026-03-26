export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">RETRO*DINER</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Афиша</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              НАСТОЯЩИЙ
              <br />
              АМЕРИКАНСКИЙ <span>ВКУС</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Дайнер в духе 70-х — хрустящие бургеры, густые милкшейки и атмосфера, в которой хочется остаться навсегда.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Забронировать стол
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/d39a123a-75f1-4b51-9b04-4afde5174c2d/files/667a5d36-376e-4f27-a13b-3409f21adbbd.jpg")`,
            }}
          >
            <div className="sticker">
              ОТКРЫТО
              <br />
              ДО 02:00
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #РЕТРОВАЙБ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              С 1974
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * БУРГЕРЫ КАК В ДЕТСТВЕ * КРАФТОВЫЕ КОКТЕЙЛИ * ТОЛЬКО РЕТРО ВАЙБ * ОТКРЫТЫ ДО 2:00 * МИЛКШЕЙКИ НА ЛЮБОЙ ВКУС *
            БУРГЕРЫ КАК В ДЕТСТВЕ * КРАФТОВЫЕ КОКТЕЙЛИ * ТОЛЬКО РЕТРО ВАЙБ * ОТКРЫТЫ ДО 2:00 * МИЛКШЕЙКИ НА ЛЮБОЙ ВКУС
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР ШЕФА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Классический бургер"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Биг Ретро</h3>
                  <span className="price">690 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двойная котлета смэш, фирменный соус «Золотые 70-е», маринованный лук и хрустящий бекон на бриоши.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Новинка
              </span>
              <img
                src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Клаб сэндвич"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Диско Клаб</h3>
                  <span className="price">550 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Тройной клаб с индейкой, авокадо, беконом и домашним айоли.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Милкшейк"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Винтажный Шейк</h3>
                  <span className="price">390 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Густой молочный коктейль с натуральным мороженым — клубника, шоколад или ваниль.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАЙ­БЧЕ­К ПРОЙДЕН.</h2>
            <p className="vibe-text">
              Мы не просто кормим — мы переносим тебя в 1974-й. Виниловые пластинки на стенах, неоновые вывески и кожаные диваны. Каждый уголок создан для твоего идеального вечера. Резерв не обязателен — просто приходи.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @RETRO.DINER
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Дайнер 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Дайнер 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Дайнер 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Дайнер 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">RETRO*DINER</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Твоё место для настоящего американского вкуса и лоу-фай атмосферы. Открыты с 2024, но ощущается как 1974.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт–Чт: 12:00 – 23:00</li>
            <li>Пт–Сб: 12:00 – 02:00</li>
            <li>Вс: 11:00 – 22:00</li>
            <li>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2024 RETRO DINER</span>
          <span>ВКУС ЗОЛОТЫХ 70-Х</span>
          <span>VK / TG / IG</span>
        </div>
      </footer>
    </>
  );
}
