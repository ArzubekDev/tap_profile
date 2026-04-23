import { IconStar } from '@/src/components/Icons';
import Image from 'next/image';
import style from './style.module.scss';

const Reviews = () => {
  return (
    <section className={style.page}>
      <div className="container">
        <div className={style.pageContainer}>
          <div className={style.header}>
            <h3>
              Отзывы <span>23</span>
            </h3>
            <div className={style.rating}>
              <span className={style.span1}>4.3</span>{' '}
              <span>
                {[1, 2, 3, 4, 5].map((el) => (
                  <IconStar key={el} />
                ))}
              </span>{' '}
              <span className={style.span2}>24 оценок</span>
            </div>
          </div>
          <div className={style.reviews}>
            {review.map((el, i) => (
              <div className={style.content}>
                <div key={i} className={style.contentTop}>
                  <div className={style.profileContainer}>
                    <Image
                      className={style.image}
                      src={el.image}
                      alt={el.name}
                      width={46}
                      height={46}
                    />
                    <h5 className={style.name}>
                      {el.name} <br /> <span>{el.date}</span>
                    </h5>
                  </div>
                  <div>
                    {[1, 2, 3, 4, 5].map((el) => (
                      <IconStar key={el} />
                    ))}
                  </div>
                </div>
                <p className={style.text}>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

const review = [
  {
    image: '/images/laptop.webp',
    name: 'Анна',
    date: '22.04.2026',
    text: 'Я в восторге от этого телефона! Он не только стильный и удобный в использовании, но и имеет потрясающую камеру, которая делает фотографии настоящим произведением искусства. Батарея держит заряд долго, что особенно удобно во время активного образа жизни. Я очень доволен своим выбором и рекомендую его всем!',
  },
];
