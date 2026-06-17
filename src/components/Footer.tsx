export function Footer({
  lead,
  meta,
  links,
}: {
  lead: string;
  meta: string;
  links: string[]; // [terms, privacy, complaints]
}) {
  return (
    <footer>
      <div className="foot-grid">
        <p className="foot-lead reveal">{lead}</p>
        <p className="foot-meta reveal" data-d="1">
          {meta}
        </p>
        <div className="foot-bottom">
          <span>© 2026 Lifable</span>
          <span>
            <a href="#" data-link>
              {links[0]}
            </a>{" "}
            ·{" "}
            <a href="#" data-link>
              {links[1]}
            </a>{" "}
            ·{" "}
            <a href="#" data-link>
              {links[2]}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
