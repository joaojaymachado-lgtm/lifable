import { usePageEffects } from "../lib/usePageEffects";
import { Chrome, EggToast } from "../components/Chrome";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { SearchIcon } from "../components/SearchIcon";
import { HIW_SKY, EGG_EN, ROUTES } from "../content";

const QUESTIONS = [
  "I'm confused about my next step in life. What should I do?",
  "I have ideas of what to do next, but I can't choose.",
  "Should I change careers or not?",
  "How do I get unstuck when I'm confused?",
];

const TESTIMONIALS = [
  "A mixture of recognition and relief. I saw myself reflected with more clarity than I usually have when I'm in the middle of life.",
  "It was like reading something written by someone who's known me for years.",
  "It helped me name what I already knew but hadn't organized — what to let go of, what to expand, and where my compass actually is.",
  "Opening a window inward. Clarity and focus, without noise.",
  "A compass for the next 12 months.",
];

export default function HowItWorksEn() {
  usePageEffects({ sky: HIW_SKY, egg: EGG_EN, numberLocale: "en-US" });

  return (
    <>
      <Chrome />
      <Nav
        brandTo={ROUTES.homeEn}
        links={[
          { label: "How it works", to: ROUTES.hiwEn, active: true, hideSm: true },
          { label: "PT", to: ROUTES.hiwPt, hideSm: true },
          { label: "Begin review", href: "#planos", cta: true },
        ]}
      />

      {/* HERO */}
      <header className="hero compact" id="top">
        <div className="eyebrow reveal in">How it works</div>
        <h1 className="hero-headline reveal in" data-d="1">
          Simple, private, powerful.
        </h1>
        <p className="hero-sub reveal in" data-d="2">
          Two paths to the same outcome: a clear picture of who you are, where you stand, and what
          might come next.
        </p>
        <a href="#planos" className="btn reveal in" data-d="3" data-link>
          <span>See both paths</span>
          <span className="arrow">→</span>
        </a>
        <div className="scroll-hint">
          <span className="ln" />
          scroll
        </div>
      </header>

      {/* THE QUESTION YOU'RE ALREADY ASKING */}
      <section className="tone-light" id="question">
        <div className="wrap">
          <div className="eyebrow reveal">The question you're already asking</div>
          <ul className="questions reveal" data-d="1">
            {QUESTIONS.map((q, i) => (
              <li className="q" key={i}>
                <SearchIcon size={16} />
                {q}
              </li>
            ))}
          </ul>
          <p className="lead reveal" data-d="2">
            Something changed in your life, or something inside is starting to feel misaligned.
          </p>
          <p className="lead reveal" data-d="2">
            You feel pulled to move, to do something. And at the same time you're stuck in the fog
            between what was and what's next.
          </p>
          <p className="lead reveal" data-d="2">
            So you look outward. Advice, horoscopes, courses, a friend who knows you well. All of it
            can help. There's nothing wrong with that.
          </p>
          <p className="lead reveal" data-d="2">
            But it's all coming from outside. It normally adds up, it doesn't subtract. And often you
            don't share the whole story anyway, out of shame or fear of judgment.
          </p>
          <p className="lead reveal" data-d="2">
            At Lifable we do the opposite. We only have your words, and we don't bring anything in.
            We take what's already inside you, organize it, look for patterns, and reflect it back. A
            clear, honest picture of where you are in life now.
          </p>
          <p className="lead reveal" data-d="2">
            And because it's completely anonymous, you can be fully honest. We believe you already
            hold the answer. You just can't hear it yet.
          </p>
        </div>
      </section>

      {/* THE TWO PATHS / PLANS */}
      <section className="tone-light" id="planos">
        <div className="wrap">
          <div className="eyebrow reveal">The two paths</div>
          <h2 className="h2 reveal" data-d="1">
            Choose what this moment calls for.
          </h2>
          <div className="plans" style={{ marginTop: 50 }}>
            {/* Personal Review */}
            <div className="plan reveal" data-d="1">
              <div className="pname">Personal Review</div>
              <div className="price">€127</div>
              <p className="pdesc">Completely anonymous. You answer, we deliver clarity.</p>
              <ul className="steps">
                <Step n={1} t="Receive your questions" d="A set of carefully crafted and tested questions designed to surface what matters most." />
                <Step n={2} t="Answer at your own pace" d="No right or wrong answers. Just honest reflection." />
                <Step n={3} t="Get your life review" d="Tell us where to send it. That's all we need. 100% anonymous." />
              </ul>
              <p className="fine">No name. We only need an email address to deliver your review.</p>
              <div className="foot">
                <a href="#" className="btn small outline" data-link>
                  <span>Begin</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>

            {/* Facilitated Experience */}
            <div className="plan featured reveal" data-d="2">
              <span className="badge">Recommended</span>
              <div className="pname">Facilitated Experience</div>
              <div className="price">€1,497</div>
              <p className="pdesc">
                The same process, enriched with external perspectives and guided sessions, for the
                more important turns or for those who want more support.
              </p>
              <ul className="steps">
                <Step n={1} t="Answer the same questions" d="Start with the same personal reflection process." />
                <Step n={2} t="Gather outside perspectives" d="Share links with people who know you. Their answers are 100% anonymous." />
                <Step n={3} t="Receive your integrated review" d="Your reflection and theirs, combined into one clear picture." />
                <Step n={4} t="Sessions with a facilitator" d="Audio-only (fully anonymous) or video, your choice. Six sessions to deepen the clarity." />
              </ul>
              <p className="fine">All external perspectives are 100% anonymous.</p>
              <div className="foot">
                <a href="#" className="btn small" data-link>
                  <span>Begin</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="tone-light" id="forwho">
        <div className="wrap">
          <div className="eyebrow reveal">Who it's for</div>
          <div className="profiles reveal" data-d="1">
            <Profile n="01" h="Professionals in transition" p="Achieved a lot, but feel a lack of meaning. Success without alignment." />
            <Profile n="02" h="Cycle completers" p="Coming out of long cycles, relationships, or identities. Ready for what's next." />
            <Profile n="03" h="Rhythm seekers" p="Sensing life is asking for a different rhythm, not more effort." />
            <Profile n="04" h="Year-shapers" p="Starting a new year or a new chapter, a birthday, a January, and wanting to enter it clear on what matters." />
          </div>
          <blockquote className="pull forwho-quote reveal" data-d="1" style={QUOTE_STYLE}>
            This isn't for people looking for someone to solve their life. It's for those who already
            know no one is coming, and are ready to take responsibility.
          </blockquote>
        </div>
      </section>

      {/* WHY IT WORKS + DHARMA5 */}
      <section className="tone-dark" id="why">
        <div className="wrap">
          <div className="eyebrow reveal">Why it works</div>
          <h2 className="h2 reveal" data-d="1">
            Built on real data. Not theory.
          </h2>
          <p className="lead reveal" data-d="2">
            Not just 11 years of experience. Lifable was built on real proprietary data: from
            thousands of course participants, hundreds of thousands of masterclass attendees, and a
            360° life review method used in the best executive coaching programs in the US.
          </p>
          <p className="lead reveal" data-d="2">
            Answers about what generated progression, the patterns within them, plus AI and a team
            with 10+ years of experience in personal development, is what lets us read your answers,
            revise by hand, and design your 10-page presentation. Clear, organized, beautiful, made
            to be kept and revisited.
          </p>
          <p className="lead reveal" data-d="2">
            The result feels tailor-made, because in a way, it is.
          </p>

          <div className="stats-block reveal" data-d="1">
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

      {/* TESTIMONIALS */}
      <section className="tone-dark" id="testimonials">
        <div className="wrap">
          <div className="eyebrow reveal">Testimonials</div>
          <Carousel slides={TESTIMONIALS} dotLabel="Testimonial" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final tone-dark" id="final">
        <div className="orb" style={{ width: 420, height: 420, background: "var(--accent)", top: -120, left: -80 }} />
        <div className="orb" style={{ width: 340, height: 340, background: "var(--glow)", bottom: -100, right: -60 }} />
        <div className="wrap">
          <h2 className="h2 reveal">Ready to see clearly?</h2>
          <a href="#planos" className="btn reveal" data-d="1" data-link style={{ marginTop: 42 }}>
            <span>Begin your review</span>
            <span className="arrow">→</span>
          </a>
          <p className="tag reveal" data-d="2">
            <b>Private. Structured. Yours.</b>
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

const QUOTE_STYLE: React.CSSProperties = {
  fontFamily: "'Source Serif 4',serif",
  fontStyle: "italic",
  fontWeight: 300,
  fontSize: "clamp(1.4rem,3vw,2.1rem)",
  lineHeight: 1.4,
  maxWidth: "30ch",
  position: "relative",
  color: "var(--tx)",
};

function Step({ n, t, d }: { n: number; t: string; d: string }) {
  return (
    <li>
      <span className="n">{n}</span>
      <span className="stxt">
        <b>{t}</b>
        <span>{d}</span>
      </span>
    </li>
  );
}

function Profile({ n, h, p }: { n: string; h: string; p: string }) {
  return (
    <div className="profile">
      <div className="pi">
        <span className="pn">{n}</span>
      </div>
      <h3>{h}</h3>
      <p>{p}</p>
    </div>
  );
}
