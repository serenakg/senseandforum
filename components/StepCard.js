export default function StepCard({ number, title, children }) {
  return (
    <div className="step">
      <div className="n" aria-hidden="true">
        {number}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
