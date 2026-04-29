import style from './style.module.scss';

const MakeOrderView = () => {
  return (
    <div className={style.makeOrder}>
      <h2 className={style.headline}>Как сделать заказ</h2>

      {conditions.map((item, idx) => (
        <div key={idx} className={style.infoBlocks}>
          <h3 className={style.title}>{item.title}</h3>

          {item.subtitle && <p className={style.subtitle}>{item.subtitle}</p>}

          {item.points && item.points.length > 0 && (
            <ul className={style.list}>
              {item.points.map((point, index) => (
                <li key={index} className={style.item}>
                  {point}
                </li>
              ))}
            </ul>
          )}

          {item.description && <p className={style.description}>{item.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default MakeOrderView;


type TConditions = {
  title: string, 
  subtitle: string,
  points?: string[],
  description?: string
}
const conditions: TConditions[] = [
  {
    title: 'Как сделать заказ',
    subtitle: 'Вы можете вернут товар в течение 14 дней после получения',
    points: ['товар alkdfjlkd', 'второй пункт', 'третий пункт'],
  },
  {
    title: 'Возврат денег',
    subtitle: 'Вы можете вернут товар в течение 14 дней после получения',
    points: ['товар dlfjd', 'второй пункт', 'третий пункт'],
  },
  {
    title: 'Возврат товара',
    subtitle: 'Вы можете вернут товар в течение 14 дней после получения',
    points: ['товар akdfj', 'второй пункт', 'третий пункт'],
  },
  {
    title: 'Когда возврат невозможен',
    subtitle: 'Вы можете вернут товар в течение 14 дней после получения',
    points: ['товар dskfljk', 'второй пункт', 'третий пункт'],
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, non! Impedit porro seddeserunt magnam voluptatibus ad molestias assumenda rerum omnis dolore tenetur minima exipsam labore officiis saepe, repellendus non adipisci dolor. Eligendi nobis, tenetur magnam cumque distinctio voluptates aliquam dolores saepe sit optio repudiandae eius voluptatibus tempora accusamus nam totam dolor laborum, consequuntur ipsa culpa consectetur libero numquam in. Et voluptate maxime itaque in porro quasi tempore id nemo dolores minima labore odit eius impedit, architecto totam pariatur, amet eveniet vitae nulla autem ex sunt dolorum dolor corporis? Illo at iusto corporis eligendi quod in. Rem, culpa libero.  Настоящая политика описывает, какие данные могут собираться и обрабатываться при использовании маркетплейса Tap.kg (далее — «Сервис»), в каких целях они используются и какие у пользователя есть возможности. Документ является рабочим шаблоном и подлежит согласованию с юристом перед публикацией в юрисдикции вашей деятельности.',
  },
];
