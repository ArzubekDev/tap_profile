import { IconStar } from '@/src/shared/ui/Icons';
import style from './style.module.scss';

const ReviewStatistics = () => {
  return (
    <div className={style.info}>
      {/* Общий рейтинг */}
      <div className={style.rating}>
        <span className={style.ratingValue}>4.3</span>
        <div className={style.stars}>
          {[1, 2, 3, 4, 5].map((el) => (
            <IconStar key={el} fill={el <= 4 ? '#FFB800' : '#C4C4C4'} />
          ))}
        </div>
        <span className={style.ratingCaption}>24 оценок</span>
      </div>
      {/* Title */}
      <h5 className={style.title}>Рейтинг формируется на основе актуальных отзывов</h5>
      {/* Прогрессбар */}
      <div className={style.statistics}>
        {stats.map((item, index) => (
          <div key={index} className={style.statRow}>
            <h6 className={style.label}>{item.label}</h6>
            <div className={style.progressBg}>
              <div className={style.progressFill} style={{ width: `${item.percent}%` }}></div>
            </div>
            <span className={style.count}>{item.count > 0 ? item.count : 0}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewStatistics;

const stats = [
  { label: '5 звезд', count: 7, percent: 80 },
  { label: '4 звезды', count: 14, percent: 45 },
  { label: '3 звезды', count: 3, percent: 10 },
  { label: '2 звезды', count: 0, percent: 65 },
  { label: '1 звезда', count: 0, percent: 65 },
];
