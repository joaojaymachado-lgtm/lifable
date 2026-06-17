import { Link } from "react-router-dom";
import { usePageEffects } from "../lib/usePageEffects";
import { Chrome, EggToast } from "../components/Chrome";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { HeroSearch } from "../components/HeroSearch";
import { DocStage } from "../components/DocStage";
import { StarSky } from "../components/StarSky";
import { HOME_SKY, EGG_PT, ROUTES } from "../content";

const QUESTIONS = [
  "Estou confuso com o meu próximo passo. O que devo fazer?",
  "Tenho ideias, mas não consigo escolher.",
  "Mudo de carreira ou não?",
  "Como é que saio deste impasse?",
];

export default function HomePt() {
  usePageEffects({ sky: HOME_SKY, egg: EGG_PT, numberLocale: "pt-PT" });
  const begin = `${ROUTES.hiwPt}#planos`;

  return (
    <>
      <Chrome />
      <Nav
        brandTo={ROUTES.homePt}
        links={[
          { label: "Como funciona", to: ROUTES.hiwPt, hideSm: true },
          { label: "EN", to: ROUTES.homeEn, hideSm: true },
          { label: "Começar revisão", to: begin, cta: true },
        ]}
      />

      {/* HERO */}
      <header className="hero" id="top">
        <HeroSearch label="As perguntas que estás mesmo a fazer" questions={QUESTIONS} />
        <h1 className="hero-headline reveal in" data-d="1">
          Entende-te a ti e os <span className="em">próximos passos</span> na vida.
        </h1>
        <p className="hero-sub reveal in" data-d="2">
          Uma revisão de vida privada focada em te ajudar a ver quem és e o que escolher de seguida.{" "}
          <b>A resposta já é tua.</b> Nós só te ajudamos a ouvi-la.
        </p>
        <Link to={begin} className="btn reveal in" data-d="3" data-link>
          <span>Começar a minha revisão</span>
          <span className="arrow">→</span>
        </Link>
        <div className="scroll-hint">
          <span className="ln" />
          desce
        </div>
      </header>

      {/* O QUE É */}
      <section className="what tone-light" id="what">
        <div className="wrap what-grid">
          <div>
            <div className="eyebrow reveal">O que é</div>
            <h2 className="h2 reveal" data-d="1">
              Nada externo. Só o que <span className="em">já está dentro de ti.</span>
            </h2>
            <p className="lead reveal" data-d="2">
              Tu respondes a uma série de perguntas. Nós organizamos e devolvemos. Vês aquilo que já
              existia, mas que na confusão é difícil escutar.
            </p>
          </div>
          <DocStage tag="A tua revisão · 10 páginas" />
        </div>
      </section>

      {/* O QUE ESTÁS A PAGAR */}
      <section className="tone-light" id="pay">
        <div className="wrap">
          <div className="eyebrow reveal">O que estás a pagar</div>
          <div className="quote-block" style={{ marginTop: 10 }}>
            <div>
              <h2 className="h2 reveal" data-d="1">
                Pensamento organizado, para te ser <span className="em">mais fácil agir.</span>
              </h2>
              <p className="lead reveal" data-d="2">
                Decidir a que nos dedicamos, enfrentar mudanças ou tomar decisões sobre os próximos
                passos sozinho é, muitas vezes, assustador. Por isso adias, ficas na dúvida, talvez
                até deixes de confiar em ti. A Lifable ajuda.
              </p>
            </div>
            <blockquote className="pull reveal" data-d="2">
              Uma mistura de reconhecimento e alívio. Vi-me refletido com mais clareza do que costumo
              ter quando estou no meio da vida.
            </blockquote>
          </div>
        </div>
      </section>

      {/* COMO */}
      <section className="como tone-light" id="how">
        <StarSky />
        <div className="wrap">
          <div className="eyebrow reveal">Como</div>
          <h2 className="h2 reveal" data-d="1">
            As tuas respostas, lidas <span className="em">à luz de milhares de outras.</span>
          </h2>
          <p className="lead reveal" data-d="2">
            A IA passa as tuas respostas por 11 anos de dados e padrões de participantes dos nossos
            programas de desenvolvimento pessoal. Da confusão, faz emergir uma clareza rara: o que já
            está dentro de ti, e o que é mais significativo. Depois uma pessoa organiza tudo em
            categorias claras, com ações possíveis, para te ser mais fácil avançar.
          </p>
          <span className="stat-anon reveal" data-d="2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Completamente anónimo: além das respostas e de um email, não temos qualquer informação
            tua.
          </span>
          <blockquote className="pull reveal" data-d="2" style={{ marginTop: 54 }}>
            Como ler algo escrito por alguém que me conhece há anos.
          </blockquote>
        </div>
      </section>

      {/* PROVA */}
      <section className="tone-dark" id="proof">
        <div className="wrap">
          <div className="eyebrow reveal">Prova</div>
          <h2 className="h2 reveal" data-d="1">
            O impacto do <span className="em">lifable</span> na vida das pessoas
          </h2>
          <div className="proof-quotes">
            <div className="qcard reveal" data-d="1">
              Ajudou-me a nomear o que eu já sabia mas não tinha organizado — o que largar, o que
              expandir, e onde está mesmo a minha bússola.
            </div>
            <div className="qcard reveal" data-d="2">Uma bússola para os próximos 12 meses.</div>
            <div className="qcard reveal" data-d="3">
              Abrir uma janela para dentro. Clareza e foco, sem ruído.
            </div>
          </div>
          <div className="stats-block reveal">
            <div className="stats-label">Da Dharma5</div>
            <div className="stats">
              <div className="stat">
                <div className="num" data-count="11" data-suffix="+">
                  <span className="em">0</span>
                </div>
                <div className="lbl">anos</div>
              </div>
              <div className="stat">
                <div className="num" data-count="11000" data-suffix="+">0</div>
                <div className="lbl">em programas</div>
              </div>
              <div className="stat">
                <div className="num" data-count="500000" data-suffix="+">0</div>
                <div className="lbl">participantes em masterclasses</div>
              </div>
              <div className="stat">
                <div className="num">
                  <span className="em">360°</span>
                </div>
                <div className="lbl">método</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="forwho tone-dark" id="forwho">
        <div className="wrap">
          <div className="eyebrow reveal">Para quem</div>
          <h2 className="h2 reveal" data-d="1">
            Fá-la numa encruzilhada. <span className="em">Depois fá-la todos os anos.</span>
          </h2>
          <p className="lead reveal" data-d="2">
            Uma mudança de carreira, um fim, um novo capítulo. Ou simplesmente uma vez por ano, para
            teres claro o que vive dentro de ti, e em que te focares a seguir. Uma prática, não uma
            solução única.
          </p>
          <p className="lead reveal" data-d="2">
            Todos os anos relês a revisão do ano anterior e vês o quanto te moveste, o que mudou, o
            que finalmente largaste.
          </p>
          <div className="years reveal" data-d="1">
            <div className="year">
              <div className="y">Ano 1</div>
              <div className="t">A encruzilhada. Vês onde estás, com clareza.</div>
            </div>
            <div className="year">
              <div className="y">Ano 2</div>
              <div className="t">Relês. Vês o quanto te moveste.</div>
            </div>
            <div className="year">
              <div className="y">Ano 3</div>
              <div className="t">O que finalmente largaste.</div>
            </div>
            <div className="year">
              <div className="y">Sempre</div>
              <div className="t">Uma prática à qual voltas.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final tone-dark" id="final">
        <div className="orb" style={{ width: 420, height: 420, background: "var(--accent)", top: -120, left: -80 }} />
        <div className="orb" style={{ width: 340, height: 340, background: "var(--glow)", bottom: -100, right: -60 }} />
        <div className="wrap">
          <h2 className="h2 reveal">
            Pronto para te veres com <span className="em">mais clareza?</span>
          </h2>
          <Link to={begin} className="btn reveal" data-d="1" data-link style={{ marginTop: 42 }}>
            <span>Começar a minha revisão</span>
            <span className="arrow">→</span>
          </Link>
          <p className="tag reveal" data-d="2">
            <b>Privado. Estruturado. Teu.</b> Uma prática à qual voltas.
          </p>
        </div>
      </section>

      <Footer
        lead="Lifable — Uma revisão de vida focada em clareza, orientação e ação intencional. A alinhar vidas de dentro para fora."
        meta="Um projeto da Dharma5. Entre Portugal e Indonésia · A construir desde 2014 · Nascida no IPN (a incubadora premiada da Universidade de Coimbra)."
        links={["Termos e Condições", "Política de Privacidade", "Livro de Reclamações"]}
      />
      <EggToast />
    </>
  );
}
