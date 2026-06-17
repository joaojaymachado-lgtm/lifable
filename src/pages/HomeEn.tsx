import { Link } from "react-router-dom";
import { usePageEffects } from "../lib/usePageEffects";
import { Chrome, EggToast } from "../components/Chrome";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { HeroSearch } from "../components/HeroSearch";
import { DocStage } from "../components/DocStage";
import { StarSky } from "../components/StarSky";
import { HOME_SKY, EGG_EN, ROUTES } from "../content";

const QUESTIONS = [
  "I'm confused about my next step. What should I do?",
  "I have ideas, but I can't choose.",
  "Should I change careers or not?",
  "How do I get unstuck?",
];

export default function HomeEn() {
  usePageEffects({ sky: HOME_SKY, egg: EGG_EN, numberLocale: "en-US" });
  const begin = `${ROUTES.hiwEn}#planos`;

  return (
    <>
      <Chrome />
      <Nav
        brandTo={ROUTES.homeEn}
        links={[
          { label: "How it works", to: ROUTES.hiwEn, hideSm: true },
          { label: "PT", to: ROUTES.homePt, hideSm: true },
          { label: "Begin review", to: begin, cta: true },
        ]}
      />

      {/* HERO */}
      <header className="hero" id="top">
        <HeroSearch label="The questions you're actually asking" questions={QUESTIONS} />
        <h1 className="hero-headline reveal in" data-d="1">
          Understand yourself, and your <span className="em">next steps</span> in life.
        </h1>
        <p className="hero-sub reveal in" data-d="2">
          A private life review focused on helping you see who you are and what to choose next.{" "}
          <b>You already have the answer.</b> We just help you hear it.
        </p>
        <Link to={begin} className="btn reveal in" data-d="3" data-link>
          <span>Begin your review</span>
          <span className="arrow">→</span>
        </Link>
        <div className="scroll-hint">
          <span className="ln" />
          scroll
        </div>
      </header>

      {/* WHAT IT IS */}
      <section className="what tone-light" id="what">
        <div className="wrap what-grid">
          <div>
            <div className="eyebrow reveal">What it is</div>
            <h2 className="h2 reveal" data-d="1">
              Nothing external. Only <span className="em">what's already inside you.</span>
            </h2>
            <p className="lead reveal" data-d="2">
              You answer a set of questions. We organize them and reflect it back. You see what was
              already there, but hard to hear in the confusion.
            </p>
          </div>
          <DocStage tag="Your review · 10 pages" />
        </div>
      </section>

      {/* WHAT YOU PAY FOR */}
      <section className="tone-light" id="pay">
        <div className="wrap">
          <div className="eyebrow reveal">What you pay for</div>
          <div className="quote-block" style={{ marginTop: 10 }}>
            <div>
              <h2 className="h2 reveal" data-d="1">
                Organized thinking, so <span className="em">it's easier to act.</span>
              </h2>
              <p className="lead reveal" data-d="2">
                Deciding what to commit to, facing change, or making the next call on your own is
                often daunting. So you put it off, stay unsure, maybe even stop trusting yourself.
                Lifable helps.
              </p>
            </div>
            <blockquote className="pull reveal" data-d="2">
              A mixture of recognition and relief. I saw myself reflected with more clarity than I
              usually have when I'm in the middle of life.
            </blockquote>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="como tone-light" id="how">
        <StarSky />
        <div className="wrap">
          <div className="eyebrow reveal">How</div>
          <h2 className="h2 reveal" data-d="1">
            Your answers, read <span className="em">in light of thousands of others.</span>
          </h2>
          <p className="lead reveal" data-d="2">
            AI runs your answers through 11 years of data and patterns from people in our personal
            development programs. Out of the confusion, it surfaces a rare clarity: what's already
            inside you, and what matters most. Then a human organizes it into clear categories, with
            possible actions, so it's easier to move.
          </p>
          <span className="stat-anon reveal" data-d="2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Completely anonymous: beyond your answers and an email, we have no information about you.
          </span>
          <blockquote className="pull reveal" data-d="2" style={{ marginTop: 54 }}>
            Like reading something written by someone who's known me for years.
          </blockquote>
        </div>
      </section>

      {/* PROOF */}
      <section className="tone-dark" id="proof">
        <div className="wrap">
          <div className="eyebrow reveal">Proof</div>
          <h2 className="h2 reveal" data-d="1">
            Lifable's impact on <span className="em">people's lives.</span>
          </h2>
          <div className="proof-quotes">
            <div className="qcard reveal" data-d="1">
              It helped me name what I already knew but hadn't organized — what to let go of, what to
              expand, and where my compass actually is.
            </div>
            <div className="qcard reveal" data-d="2">A compass for the next 12 months.</div>
            <div className="qcard reveal" data-d="3">
              Opening a window inward. Clarity and focus, without noise.
            </div>
          </div>
          <div className="stats-block reveal">
            <div className="stats-label">From Dharma5</div>
            <div className="stats">
              <div className="stat">
                <div className="num" data-count="11" data-suffix="+">
                  <span className="em">0</span>
                </div>
                <div className="lbl">years</div>
              </div>
              <div className="stat">
                <div className="num" data-count="11000" data-suffix="+">0</div>
                <div className="lbl">in programs</div>
              </div>
              <div className="stat">
                <div className="num" data-count="500000" data-suffix="+">0</div>
                <div className="lbl">masterclass attendees</div>
              </div>
              <div className="stat">
                <div className="num">
                  <span className="em">360°</span>
                </div>
                <div className="lbl">method</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="forwho tone-dark" id="forwho">
        <div className="wrap">
          <div className="eyebrow reveal">For who</div>
          <h2 className="h2 reveal" data-d="1">
            Do it at a crossroads. <span className="em">Then do it every year.</span>
          </h2>
          <p className="lead reveal" data-d="2">
            A career shift, an ending, a new chapter. Or simply once a year, to get clear on what
            lives inside you, and what to focus on next. A practice, not a one-time fix.
          </p>
          <p className="lead reveal" data-d="2">
            Each year you reread last year's review and see how far you've moved, what shifted, what
            you finally let go of.
          </p>
          <div className="years reveal" data-d="1">
            <div className="year">
              <div className="y">Year 1</div>
              <div className="t">The crossroads. You see where you are, clearly.</div>
            </div>
            <div className="year">
              <div className="y">Year 2</div>
              <div className="t">You reread. You see how far you've moved.</div>
            </div>
            <div className="year">
              <div className="y">Year 3</div>
              <div className="t">What you finally let go of.</div>
            </div>
            <div className="year">
              <div className="y">Always</div>
              <div className="t">A practice you return to.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final tone-dark" id="final">
        <div className="orb" style={{ width: 420, height: 420, background: "var(--accent)", top: -120, left: -80 }} />
        <div className="orb" style={{ width: 340, height: 340, background: "var(--glow)", bottom: -100, right: -60 }} />
        <div className="wrap">
          <h2 className="h2 reveal">
            Ready to understand <span className="em">yourself clearly?</span>
          </h2>
          <Link to={begin} className="btn reveal" data-d="1" data-link style={{ marginTop: 42 }}>
            <span>Begin your review</span>
            <span className="arrow">→</span>
          </Link>
          <p className="tag reveal" data-d="2">
            <b>Private. Structured. Yours.</b> A practice you return to.
          </p>
        </div>
      </section>

      <Footer
        lead="Lifable — A life review focused on clarity, orientation, and intentional action. Aligning lives from the inside out."
        meta="A project by Dharma5. Between Portugal and Indonesia · Building since 2014 · Born at IPN (Coimbra University's award-winning incubator)."
        links={["Terms & Conditions", "Privacy Policy", "Complaints Book"]}
      />
      <EggToast />
    </>
  );
}
