const imageMap = {
  community: "/brand/icons/community.webp",
  celebration: "/brand/icons/celebration.webp",
  creativity: "/brand/icons/creativity.webp",
  communication: "/brand/icons/communication.webp",
  care: "/brand/icons/care.webp",
};

export default function ValueIcon({ name, className = "icon" }) {
  const src = imageMap[name];
  if (!src) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={className} />
  );
}
