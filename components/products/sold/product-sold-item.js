import { dateFormat } from 'helpers/timeAgoDAYJS';

export default function ProductSoldItem({ item }) {
  return (
    <li
      // key={item._id}
      className={`text-sm rounded-card overflow-hidden font-light tracking-wide shadow-item justify-start p-2`}>
      <div className="section-main-sold grid col-gap-6 row-gap-3 items-start relative">
        <article className="w-full truncate">
          <h3 className="text-title-item text-alain-blue-500 font-medium">{item.name}</h3>
          <p className="text-description truncate text-slate-gray-500">{item.description}</p>
        </article>
        <aside>
          <div className="off-descuent">
            {item.off > 0 ? (
              <p className="text-description border border-red-200 rounded-full overflow-hidden pr-2 flex items-center text-red-300">
                <span className="off p-small pl-1 mr-2 bg-red-200 inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="#fff">
                    <path d="M16 17H5V7h11l3.55 5m-1.92-6.16C17.27 5.33 16.67 5 16 5H5c-1.1 0-2 .9-2 2v10a2 2 0 002 2h11c.67 0 1.27-.34 1.63-.85L22 12l-4.37-6.16M13.8 8L15 9.2 8.2 16 7 14.8m1.45-6.77c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42-1.42-.64-1.42-1.42.64-1.42 1.42-1.42m5.1 5.1c.78 0 1.42.64 1.42 1.42 0 .78-.64 1.42-1.42 1.42-.78 0-1.42-.64-1.42-1.42 0-.78.64-1.42 1.42-1.42z" />
                  </svg>
                </span>
                -{item.off}%
              </p>
            ) : null}
          </div>
        </aside>
      </div>
      <section
        className={`section-info-profit col-span-2 whitespace-no-wrap text-description mt-2 ${
          item.off > 0 ? 'flex flex-wrap off' : 'flex flex-wrap no-off'
        }`}>
        <p>
          Costo:&nbsp;
          <span className="text-slate-gray-500 bg-background rounded-full px-2 py-small">
            ${item.price}
          </span>
        </p>
        <p>
          Valor:&nbsp;
          {item.off > 0 && (
            <span className={`rounded-full px-2 py-small text-alain-blue-500 bg-alain-blue-100`}>
              ${item.value_off}
            </span>
          )}
          <span
            className={`rounded-full px-2 py-small ${
              item.off > 0
                ? 'text-slate-gray-500 line-through'
                : 'text-alain-blue-500 bg-alain-blue-100'
            }`}>
            ${item.value}
          </span>
        </p>
        <p>
          Ganancia:&nbsp;
          <span className="font-medium bg-green-500 text-white rounded-full px-2 py-small">
            +${item.off > 0 ? item.value_off - item.price : item.value - item.price}
          </span>
        </p>
      </section>
      <section className="grid items-center justify-start my-2 ">
        <time
          dateTime={item.sold_date}
          className="py-small pl-1 pr-3 rounded-full text-description bg-background text-slate-gray-400 flex items-center">
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {dateFormat(item.sold_date)}
        </time>
      </section>
      <button className="text-xs text-red-400 pt-4 pr-6">Cancelar venta</button>
      <style global jsx>{`
        div.section-main-sold {
          grid-template-columns: 1fr auto;
        }
        section.off > * {
          margin-bottom: 0.2rem;
        }
        section.off > *:not(:last-child) {
          margin-right: 1rem;
        }
        section.no-off > *:not(:last-child) {
          margin-right: 1rem;
          margin-bottom: 0.2rem;
        }
      `}</style>
    </li>
  );
}
