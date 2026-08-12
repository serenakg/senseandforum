export default function ArchetypeCard({ tag, title, children }) {
  return (
    <div className="arch">
      <span className="label">{tag}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
