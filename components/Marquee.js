const words = [
  "Community-led growth",
  "The Delia Model™",
  "No-nonsense growth systems",
  "Built with intention",
];

export default function Marquee() {
  const track = [...words, ...words];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track.map((word, i) => (
          <span className="marquee-item" key={`${word}-${i}`}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
