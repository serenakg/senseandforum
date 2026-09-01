const imageMap = {
  diversity: "/brand/icons/extra/connection.webp",
  sustainability: "/brand/icons/extra/manage.webp",
  safety: "/brand/icons/extra/forecast.webp",
  "people-first": "/brand/icons/extra/build.webp",
};

export default function ValueIcon({ name, className = "icon" }) {
  const src = imageMap[name];
  if (!src) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={className} />
  );
}
