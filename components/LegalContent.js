function Block({ block }) {
  if (block.type === "ul") {
    return (
      <ul className="legal-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{block.text}</p>;
}

export default function LegalContent({ intro, sections }) {
  return (
    <div className="legal">
      {intro && (
        <div className="legal-intro">
          {intro.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      )}
      {sections.map((section) => (
        <section className="legal-section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.blocks.map((block, i) => (
            <Block block={block} key={i} />
          ))}
        </section>
      ))}
    </div>
  );
}
