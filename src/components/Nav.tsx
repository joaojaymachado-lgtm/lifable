import { Link } from "react-router-dom";

export interface NavLink {
  label: string;
  /** internal route (use `to`) or same-page hash/external (use `href`). */
  to?: string;
  href?: string;
  active?: boolean;
  hideSm?: boolean;
  cta?: boolean;
}

export function Nav({ brandTo, links }: { brandTo: string; links: NavLink[] }) {
  return (
    <nav>
      <div className="brand">
        <Link to={brandTo}>
          Lifable<span className="dot">.</span>
        </Link>
      </div>
      <ul>
        {links.map((l, i) => (
          <li key={i} className={l.hideSm ? "hide-sm" : undefined}>
            {l.to ? (
              <Link to={l.to} className={navClass(l)} data-link>
                {l.label}
              </Link>
            ) : (
              <a href={l.href} className={navClass(l)} data-link>
                {l.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function navClass(l: NavLink) {
  return [l.cta ? "nav-cta" : "", l.active ? "active" : ""].filter(Boolean).join(" ") || undefined;
}
