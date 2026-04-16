const MakeOrder = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Возврат товара</h2>

      {conditions.map((item, idx) => (
        <section key={idx} className="mb-6">
          <h3 className="text-xl font-semibold">{item.title}</h3>

          {item.subtitle && <p className="text-gray-600 italic">{item.subtitle}</p>}

          {item.points && (
            <ul className="list-disc ml-5 mt-2">
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          {item.description && <p className="mt-3 text-sm">{item.description}</p>}
        </section>
      ))}
    </div>
  );
};

export default MakeOrder;

const conditions = [
  {
    title: 'Условия возврата',
    subtitle: 'Вы можете вернут товар в течение 14 дней после получения',
    points: ['товар долдфылвоа', 'экинчи пункт', 'үчүнчү пункт'],
  },
  {
    title: 'Возврат денег',
    subtitle: 'Вы можете вернут товар в течение 14 дней после получения',
    points: ['товар долдфылвоа', 'экинчи пункт', 'үчүнчү пункт'],
  },
  {
    title: 'Возврат товара',
    subtitle: 'Вы можете вернут товар в течение 14 дней после получения',
    points: ['товар долдфылвоа', 'экинчи пункт', 'үчүнчү пункт'],
  },
  {
    title: 'Когда возврат невозможен',
    subtitle: 'Вы можете вернут товар в течение 14 дней после получения',
    points: ['товар долдфылвоа', 'экинчи пункт', 'үчүнчү пункт'],
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, non! Impedit porro seddeserunt magnam voluptatibus ad molestias assumenda rerum omnis dolore tenetur minima exipsam labore officiis saepe, repellendus non adipisci dolor. Eligendi nobis, tenetur magnam cumque distinctio voluptates aliquam dolores saepe sit optio repudiandae eius voluptatibus tempora accusamus nam totam dolor laborum, consequuntur ipsa culpa consectetur libero numquam in. Et voluptate maxime itaque in porro quasi tempore id nemo dolores minima labore odit eius impedit, architecto totam pariatur, amet eveniet vitae nulla autem ex sunt dolorum dolor corporis? Illo at iusto corporis eligendi quod in. Rem, culpa libero.',
  },
];
