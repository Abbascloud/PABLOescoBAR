import classes from "./styles/headerStyles.module.css";
import logo from "../../img/header/logo.png";

export const Header = () => {
  return (
    <header className={`${classes.header}`}>
      <div className={`${classes.header__left}`}>
        <nav className={`${classes.header__menu}`}>
          <a
            rel="noreferrer"
            target="_blank"
            href="google.com"
            className={`${classes.header__link} ${classes.header__underline}`}
          >
            МЕНЮ
          </a>
        </nav>
        <address className={`${classes.header__adress}`}>
          <a
            className={`${classes.header__mapLink} ${classes.header__underline}`}
            rel="noreferrer"
            target="_blank"
            href="https://www.google.ru/maps/search/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0+%D0%B1%D0%B0%D1%80+%D0%BF%D0%B0%D0%B1%D0%BB%D0%BE%D1%8D%D1%81%D0%BA%D0%BE%D0%B1%D0%B0%D1%80/@55.8035742,37.590923,20z?hl=ru"
          >
            Новодмитровская ул., 2к5
          </a>

          <br />
          <a
            rel="noreferrer"
            target="_blank"
            className={`${classes.header__tel} ${classes.header__underline}`}
            href="tel:89851099339"
          >
            8 985 109 93 39
          </a>
        </address>
      </div>
      <div className={`${classes.header__center}`}>
        <img className={`${classes.header__logo}`} src={logo} alt="logo" />
      </div>
      <div className={`${classes.header__right}`}>
        <nav className={`${classes.header__nav}`}>
          <ul className={`${classes.header__navList}`}>
            <li className={`${classes.header__navListItem}`}>
              <a
                rel="noreferrer"
                target="_blank"
                href="google.com"
                className={`${classes.header__link} ${classes.header__underline}`}
              >
                БАНКЕТЫ
              </a>
            </li>
            <li className={`${classes.header__navListItem}`}>
              <a
                className={`${classes.header__link} ${classes.header__underline}`}
                rel="noreferrer"
                target="_blank"
                href="google.com"
              >
                ЗАБРОНИРОВАТЬ СТОЛ
              </a>
            </li>
          </ul>
        </nav>
        <div className={`${classes.header__workTime}`}>
          Вт, Ср, Чт, Вс 18:00-03:00 <br />
          Пт-Сб 18:00-04:30
        </div>
      </div>
    </header>
  );
};
