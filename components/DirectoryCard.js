// Placeholder-first card. Once the bench is re-engaged, pass `name`,
// `photo`, `bio`, `rateBand`, and `availability` for a live profile —
// the card swaps from role placeholder to a real listing with no
// markup changes needed elsewhere.
export default function DirectoryCard({
  role,
  initials,
  colorIndex = 0,
  name,
  photo,
  bio,
  rateBand,
  availability,
}) {
  const isLive = Boolean(name);

  return (
    <div className={`slot c${colorIndex % 4}`}>
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={name}
          className="avatar"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div className="avatar" aria-hidden="true">
          {initials}
        </div>
      )}
      <div className="role">{isLive ? name : role}</div>
      {isLive && (
        <div className="role" style={{ fontWeight: 400, opacity: 0.75, fontSize: 12.5 }}>
          {role}
        </div>
      )}
      {bio && <p className="bio">{bio}</p>}
      {isLive && availability && <div className="status">{availability}</div>}
      {rateBand && (
        <div className="status" style={{ opacity: 0.5, marginTop: 4 }}>
          {rateBand}
        </div>
      )}
    </div>
  );
}
