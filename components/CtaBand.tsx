import type { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  text: ReactNode;
  buttonHref: string;
  buttonLabel: string;
  variant?: "default" | "alt";
};

export default function CtaBand({ id, title, text, buttonHref, buttonLabel, variant = "default" }: Props) {
  const className =
    variant === "alt"
      ? "section section--cta-band section--cta-band--alt"
      : "section section--cta-band";
  return (
    <section className={className} id={id}>
      <div className="container cta-band">
        <div data-reveal="fade">
          <h2 className="cta-band__title">{title}</h2>
          <p className="cta-band__text">{text}</p>
        </div>
        <a className="btn btn--light" href={buttonHref} data-reveal="fade">
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
