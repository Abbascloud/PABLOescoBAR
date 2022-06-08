import classes from "./styles/ourTeanStyles.module.css";
import { TeamSlider } from "../teamSlider";

export const OurTeam = () => {
  return (
    <div className={`${classes.ourTeam}`}>
      <h1 className={`${classes.ourTeam__header}`}>Наша команда</h1>
      <div className={`${classes.ourTeam__wrapper}`}>
        <div className={`${classes.ourTeam__text}`}>
          <h3 className={`${classes.ourTeam__title}`}>О майских жуках</h3>
          <p className={`${classes.ourTeam__content}`}>
            Представители рода характеризуются довольно крупными размерами до
            31,5 мм, выпуклым продолговато-овальным или более широким овальным
            телом, чёрной или красно-бурой окраски, большей частью с
            красно-бурыми или жёлто-бурыми надкрыльями, иногда со слабым
            зеленоватым отливом на голове и переднеспинке, на боках 1—5 брюшных
            стернитов с белыми треугольными пятнами[2] из мелких густых
            волосков, большей частью большими и резкими, реже — маленькими и не
            резкими. Тело в густой небольшой или мелкой пунктировке и мелких
            прилегающих волосках или волосовидных чешуйках беловатой, желтоватой
            или сероватой окраски, всегда более или менее густых (у недавно
            вышедших из куколки экземпляров), иногда очень густых и скрывающих
            основной фон; голова и переднеспинка обычно покрыты более длинными
            торчащими волосками, большей частью сгущёнными в продольные полосы;
            подкрылья также нередко несут рассеянные более длинные торчащие
            волоски. Последний членик челюстных щупиков удлинённый, к вершине
            заострённый, слегка изогнутый, сверху со вдавлением. Усики
            10-члениковые с удлинённым 3-м члеником, у самца с крупной сильно
            изогнутой булавой, состоящей из 7 одинаковых пластинок. Щиток
            большой, полуовальный, гладкий, блестящий, иногда в более или менее
            густой пунктировке и мелких волосках или чешуйках. Надкрылья
            удлиненно-овальные, с 5 узкими довольно сильными или слабыми
            ребрами, в промежутках в густом мелком пунктире и морщинках. Пигидий
            большой, наклонный, треугольный или притуплённый, вытянутый в
            отросток. У самцов последний всегда лучше развит, длинный, у самки
            всегда короче. Грудь в густых и длинных жёлтых волосках. Брюшко,
            кроме обычных мелких прилегающих волосков и чешуек, покрыто
            многочисленными или редкими длинными торчащими волосками, иногда без
            них. Ноги покрыты волосками, на бёдрах более длинными. Передние
            голени снаружи с 2, реже с 3 зубцами.
          </p>
        </div>
        <div className={`${classes.ourTeam__slider}`}>
          <TeamSlider />
        </div>
      </div>
    </div>
  );
};