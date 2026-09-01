const imageMap = {
  structure: "/brand/icons/extra/build.webp",
  connection: "/brand/icons/extra/connection.webp",
  clarity: "/brand/icons/extra/inspire.webp",
  momentum: "/brand/icons/extra/forecast.webp",
};

export default function ValueIcon({ name, className = "icon" }) {
  const src = imageMap[name];
  if (!src) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={className} />
  );
}
