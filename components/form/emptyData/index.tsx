import style from './style.module.scss';
import { EmptyDataProps } from './type';

const EmptyData = ({
  title,
  subTitle,
  description,
  subDescription,
  action,
  icon,
}: EmptyDataProps) => {
  return (
    <section className={style.emptyContainer}>
      <div className={style.iconWrapper}>{icon}</div>
      <h2 className={style.title}>{title}</h2>
      {subTitle && <h3 className={style.subtitle}>{subTitle}</h3>}
      <div className={style.descriptionBlock}>
        {description && <p className={style.description}>{description}</p>}
        {subDescription && <p className={style.subDescription}>{subDescription}</p>}
      </div>

      {action && <div className={style.actionWrapper}>{action}</div>}
    </section>
  );
};

export default EmptyData;
