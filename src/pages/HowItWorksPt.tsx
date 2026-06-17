import { usePageEffects } from "../lib/usePageEffects";
import { Chrome, EggToast } from "../components/Chrome";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { SearchIcon } from "../components/SearchIcon";
import { HIW_SKY, EGG_PT, ROUTES } from "../content";

const QUESTIONS = [
  "Estou confuso com o meu próximo passo. O que devo fazer?",
  "Tenho ideias, mas não consigo escolher.",
  "Mudo de carreira ou não?",
  "Como é que saio deste impasse?",
];

const TESTIMONIALS = [
  "Uma mistura de reconhecimento e alívio. Vi-me refletido com mais clareza do que costumo ter quando estou no meio da vida.",
  "Como ler algo escrito por alguém que me conhece há anos.",
  "Ajudou-me a nomear o que eu já sabia mas não tinha organizado — o que largar, o que expandir, e onde está mesmo a minha bússola.",
  "Abrir uma janela para dentro. Clareza e foco, sem ruído.",
  "Uma bússola para os próximos 12 meses.",
];

export default function HowItWorksPt() {
  usePageEffects({ sky: HIW_SKY, egg: EGG_PT, numberLocale: "pt-PT" });

  return (
    <>
      <Chrome />
      <Nav
        brandTo={ROUTES.homePt}
        links={[
          { label: "Como funciona", to: ROUTES.hiwPt, active: true, hideSm: true },
          { label: "EN", to: ROUTES.hiwEn, hideSm: true },
          { label: "Começar revisão", href: "#planos", cta: true },
        ]}
      />

      {/* HERO */}
      <header className="hero compact" id="top">
        <div className="eyebrow reveal in">Como funciona</div>
        <h1 className="hero-headline reveal in" data-d="1">
          Simples, privado, poderoso.
        </h1>
        <p className="hero-sub reveal in" data-d="2">
          Dois caminhos para o mesmo resultado: uma imagem clara de quem és, onde estás, e o que pode
          vir a seguir.
        </p>
        <a href="#planos" className="btn reveal in" data-d="3" data-link>
          <span>Ver os dois caminhos</span>
          <span className="arrow">→</span>
        </a>
        <div className="scroll-hint">
          <span className="ln" />
          desce
        </div>
      </header>

      {/* A PERGUNTA QUE JÁ ESTÁS A FAZER */}
      <section className="tone-light" id="question">
        <div className="wrap">
          <div className="eyebrow reveal">A pergunta que já estás a fazer</div>
          <ul className="questions reveal" data-d="1">
            {QUESTIONS.map((q, i) => (
              <li className="q" key={i}>
                <SearchIcon size={16} />
                {q}
              </li>
            ))}
          </ul>
          <p className="lead reveal" data-d="2">
            Algo mudou na tua vida, ou algo por dentro começa a sentir-se desalinhado.
          </p>
          <p className="lead reveal" data-d="2">
            Sentes-te puxado a mover-te, a fazer alguma coisa. E ao mesmo tempo estás preso no
            nevoeiro entre o que foi e o que vem a seguir.
          </p>
          <p className="lead reveal" data-d="2">
            Então olhas para fora. Conselhos, horóscopos, cursos, um amigo que te conhece bem. Tudo
            isso pode ajudar. Não há nada de errado nisso.
          </p>
          <p className="lead reveal" data-d="2">
            Mas vem tudo de fora. Normalmente acrescenta, não subtrai. E muitas vezes nem contas a
            história toda, seja por vergonha ou por medo do julgamento.
          </p>
          <p className="lead reveal" data-d="2">
            Na Lifable fazemos o contrário. Só temos as tuas palavras, e não trazemos nada de fora.
            Pegamos no que já está dentro de ti, organizamos, procuramos padrões, e devolvemos. Uma
            imagem clara e honesta de onde estás na vida agora.
          </p>
          <p className="lead reveal" data-d="2">
            E porque é completamente anónimo, podes ser totalmente honesto. Acreditamos que já tens a
            resposta. Só ainda não a consegues ouvir.
          </p>
        </div>
      </section>

      {/* OS DOIS CAMINHOS / PLANOS */}
      <section className="tone-light" id="planos">
        <div className="wrap">
          <div className="eyebrow reveal">Os dois caminhos</div>
          <h2 className="h2 reveal" data-d="1">
            Escolhe o que pede este momento.
          </h2>
          <div className="plans" style={{ marginTop: 50 }}>
            {/* Revisão Pessoal */}
            <div className="plan reveal" data-d="1">
              <div className="pname">Revisão Pessoal</div>
              <div className="price">€127</div>
              <p className="pdesc">Completamente anónima. Tu respondes, nós entregamos clareza.</p>
              <ul className="steps">
                <Step n={1} t="Recebes as tuas perguntas" d="Um conjunto de perguntas cuidadosamente pensadas e testadas para fazer emergir o que mais importa." />
                <Step n={2} t="Respondes ao teu ritmo" d="Não há respostas certas ou erradas. Apenas reflexão honesta." />
                <Step n={3} t="Recebes a tua revisão de vida" d="Diz-nos para onde a enviar. É tudo o que precisamos. 100% anónimo." />
              </ul>
              <p className="fine">Sem nome. Só precisamos de um email para te entregar a revisão.</p>
              <div className="foot">
                <a href="#" className="btn small outline" data-link>
                  <span>Começar</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>

            {/* Experiência Facilitada */}
            <div className="plan featured reveal" data-d="2">
              <span className="badge">Recomendado</span>
              <div className="pname">Experiência Facilitada</div>
              <div className="price">€1.497</div>
              <p className="pdesc">
                O mesmo processo, enriquecido com perspetivas externas e sessões guiadas, para etapas
                mais importantes ou para quem precisa de mais apoio.
              </p>
              <ul className="steps">
                <Step n={1} t="Respondes às mesmas perguntas" d="Começas com o mesmo processo de reflexão pessoal." />
                <Step n={2} t="Reúnes perspetivas de fora" d="Partilhas links com pessoas que te conhecem. As respostas delas são 100% anónimas." />
                <Step n={3} t="Recebes a tua revisão integrada" d="A tua reflexão e a delas, combinadas numa imagem clara." />
                <Step n={4} t="Sessões com um facilitador" d="Só áudio (completamente anónimo) ou vídeo, à tua escolha. Seis sessões para aprofundar a clareza." />
              </ul>
              <p className="fine">Todas as perspetivas externas são 100% anónimas.</p>
              <div className="foot">
                <a href="#" className="btn small" data-link>
                  <span>Começar</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="tone-light" id="forwho">
        <div className="wrap">
          <div className="eyebrow reveal">Para quem é</div>
          <div className="profiles reveal" data-d="1">
            <Profile n="01" h="Profissionais em transição" p="Conquistaram muito, mas sentem falta de sentido. Sucesso sem alinhamento." />
            <Profile n="02" h="Quem fecha ciclos" p="A sair de ciclos longos, relações, ou identidades. Prontos para o que vem a seguir." />
            <Profile n="03" h="Quem procura outro ritmo" p="A sentir que a vida pede um ritmo diferente, não mais esforço." />
            <Profile n="04" h="Quem prepara um grande ano" p="A começar um novo ano ou um novo capítulo, um aniversário, um janeiro, e a querer entrar nele claro sobre o que importa." />
          </div>
          <blockquote className="pull forwho-quote reveal" data-d="1" style={QUOTE_STYLE}>
            Isto não é para quem procura alguém que lhe resolva a vida. É para quem já sabe que
            ninguém vem, e está pronto para assumir a responsabilidade.
          </blockquote>
        </div>
      </section>

      {/* PORQUE FUNCIONA + DHARMA5 */}
      <section className="tone-dark" id="why">
        <div className="wrap">
          <div className="eyebrow reveal">Porque funciona</div>
          <h2 className="h2 reveal" data-d="1">
            Construída com base em dados reais. Não em teoria.
          </h2>
          <p className="lead reveal" data-d="2">
            Não são só 11 anos de experiência. A Lifable foi construída sobre dados reais e
            proprietários: vindos de milhares de participantes em cursos, centenas de milhares de
            presenças em masterclasses, e um método de revisão de vida 360° utilizado nos melhores
            programas de coaching executivo dos EUA.
          </p>
          <p className="lead reveal" data-d="2">
            Respostas sobre o que gerou progressão, os padrões das respostas, mais IA e uma equipa
            10+ anos de experiência em desenvolvimento pessoal, é o que nos permite ler as tuas
            respostas, rever à mão, e desenhar a tua apresentação de 10 páginas. Clara, organizada,
            bonita, feita para guardar e rever.
          </p>
          <p className="lead reveal" data-d="2">
            O resultado parece feito à medida, porque, de certa forma, é.
          </p>

          <div className="stats-block reveal" data-d="1">
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

      {/* TESTEMUNHOS */}
      <section className="tone-dark" id="testimonials">
        <div className="wrap">
          <div className="eyebrow reveal">Testemunhos</div>
          <Carousel slides={TESTIMONIALS} dotLabel="Testemunho" />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final tone-dark" id="final">
        <div className="orb" style={{ width: 420, height: 420, background: "var(--accent)", top: -120, left: -80 }} />
        <div className="orb" style={{ width: 340, height: 340, background: "var(--glow)", bottom: -100, right: -60 }} />
        <div className="wrap">
          <h2 className="h2 reveal">Pronto para te veres com clareza?</h2>
          <a href="#planos" className="btn reveal" data-d="1" data-link style={{ marginTop: 42 }}>
            <span>Começar a minha revisão</span>
            <span className="arrow">→</span>
          </a>
          <p className="tag reveal" data-d="2">
            <b>Privado. Estruturado. Teu.</b>
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
