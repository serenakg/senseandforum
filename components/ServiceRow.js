export default function ServiceRow({ number, title, description, format, price }) {
  return (
    <div className="svc-row">
      <div className="n" aria-hidden="true">
        {number}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="fmt">{format}</div>
      <div className="price">{price}</div>
    </div>
  );
}
