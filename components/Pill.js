const variantClass = {
  solid: "pill-solid",
  "solid-green": "pill-solid-green",
  ghost: "pill-ghost",
  "ghost-dark": "pill-ghost-dark",
};

export default function Pill({
  href,
  variant = "solid",
  children,
  as: As,
  ...props
}) {
  const className = `pill ${variantClass[variant] ?? variantClass.solid}`;

  if (As) {
    return (
      <As className={className} {...props}>
        {children}
      </As>
    );
  }

  return (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  );
}
