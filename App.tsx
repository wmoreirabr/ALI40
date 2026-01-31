
import React from 'react';
import CTAButton from './components/CTAButton';
import Testimonial from './components/Testimonial';
import { TestimonialData, ContentItem, BenefitItem } from './types';

const App: React.FC = () => {
  const testimonials: TestimonialData[] = [
    { name: "Maria Silva", text: "Comecei a aplicar pequenas mudanças e já senti mais disposição em poucas semanas.", rating: 5 },
    { name: "João Pereira", text: "Simples, direto e sem terrorismo nutricional. Era exatamente o que eu precisava.", rating: 5 },
    { name: "Cláudia Souza", text: "Finalmente um material para quem passou dos 40 e não quer dieta maluca.", rating: 5 },
  ];

  const contentItems: ContentItem[] = [
    { title: "Os 6 alimentos essenciais após os 40", gain: "Mais força, energia e proteção metabólica" },
    { title: "O papel do ovo e do feijão", gain: "Estabilidade glicêmica e muscular" },
    { title: "Por que a sardinha vence o salmão", gain: "Saúde cardiovascular sem gastar caro" },
    { title: "Banana, abóbora e alho como escudos", gain: "Menos inflamação, mais vitalidade" },
    { title: "Proteção cerebral", gain: "Clareza mental e envelhecimento lúcido" },
  ];

  const benefits: BenefitItem[] = [
    { title: "Disposição", description: "Mais energia para o dia a dia", icon: "bolt" },
    { title: "Controle", description: "Pressão, colesterol e glicose", icon: "heart-pulse" },
    { title: "Inflamação", description: "Redução de dores silenciosas", icon: "shield-halved" },
    { title: "Músculos", description: "Manutenção da força física", icon: "dumbbell" },
    { title: "Memória", description: "Proteção do cérebro", icon: "brain" },
    { title: "Alinhamento", description: "Focado na sua fase de vida", icon: "check-circle" },
  ];

  return (
    <div className="min-h-screen">
      {/* 1. MAIN COPY (HERO) */}
      <section className="relative pt-16 pb-24 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Depois dos 40, <span className="text-green-600 underline">não é sobre comer menos.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-semibold italic">
              É sobre comer o que mantém você forte, lúcido e saudável.
            </p>
            <p className="text-lg text-gray-600">
              Descubra os alimentos essenciais que protegem seu corpo contra doenças silenciosas, perda de força e declínio cognitivo — usando o que você já encontra no mercado.
            </p>
            <div className="flex items-center gap-2 text-green-700 font-bold justify-center lg:justify-start">
              <i className="fa-solid fa-hand-point-right"></i>
              <span>Guia prático, científico e aplicável à vida real.</span>
            </div>
            
            <CTAButton 
              text="Quero proteger minha saúde agora" 
              subtext="Botão seguro • Acesso imediato"
              className="lg:mx-0"
            />
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://picsum.photos/seed/healthbook/600/800" 
                alt="Product Mockup" 
                className="relative rounded-2xl shadow-2xl w-full h-auto border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-full shadow-xl font-bold text-center transform rotate-12 hidden md:block">
                EBOOK<br/>COMPLETO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ELEVAR NÍVEL DE CONSCIÊNCIA */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <img 
            src="https://picsum.photos/seed/ebook/400/500" 
            alt="Mockup eBook Consciente" 
            className="mx-auto rounded-xl shadow-2xl w-48 mb-8 border-4 border-gray-700"
          />
          <h2 className="text-3xl md:text-4xl font-bold">Aos 40 anos, o corpo entra em uma nova fase.</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-2xl">👉</span>
              <p className="text-lg text-gray-300">O que antes funcionava agora gera cansaço constante.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">👉</span>
              <p className="text-lg text-gray-300">Exames alterados e dores persistentes nas articulações.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">👉</span>
              <p className="text-lg text-gray-300">Perda de energia e lapsos de memória frequentes.</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">👉</span>
              <p className="text-lg text-gray-300">Mudanças metabólicas silenciosas e perigosas.</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-light text-green-400 italic">
            "Isso não acontece de uma vez. Acontece em silêncio. E a alimentação é o principal fator que decide como você vai envelhecer."
          </p>
        </div>
      </section>

      {/* 3. CTA DOWNLOAD */}
      <section className="py-16 bg-white border-b border-gray-100">
        <CTAButton 
          text="Fazer download imediato do guia" 
          subtext="Acesso instantâneo • Leitura simples • Aplicação prática"
        />
      </section>

      {/* 4. FEEDBACKS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl font-bold mb-12">O que dizem nossos alunos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. O QUE VOCÊ VAI RECEBER */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">📘 O que tem dentro do guia</h2>
            <p className="text-xl text-gray-500 uppercase tracking-widest font-bold">Conteúdo + Ganho Emocional</p>
          </div>
          <div className="grid gap-6">
            {contentItems.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center p-6 bg-gray-50 rounded-2xl border-l-8 border-green-500 hover:bg-white hover:shadow-xl transition-all">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-green-500"></i>
                    {item.title}
                  </h4>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-2">
                  <span className="text-green-700 font-extrabold bg-green-100 px-4 py-1 rounded-full text-sm uppercase">Ganho</span>
                  <p className="text-gray-600 font-medium">{item.gain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA NOVO */}
      <section className="py-12 bg-white">
        <CTAButton text="Quero acessar o guia agora" />
      </section>

      {/* 7. PARA QUEM SERVE */}
      <section className="py-24 bg-gray-900 text-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Este guia é para você se:</h2>
            <ul className="space-y-6">
              {[
                "Tem 40 anos ou mais",
                "Quer prevenir doenças antes que elas apareçam",
                "Busca mais energia, força e bem-estar",
                "Prefere soluções simples e realistas",
                "Não quer depender apenas de remédios no futuro"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <i className="fa-solid fa-check text-green-400 text-2xl"></i>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-bold text-red-400 mb-6">❌ Não é para quem:</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              ...procura dietas extremas, milagres rápidos ou atalhos perigosos que ignoram a ciência do corpo humano.
            </p>
          </div>
        </div>
      </section>

      {/* 8. MAIS FEEDBACKS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial 
              name="Regina M." 
              text="Gostei porque respeita a idade e a realidade de quem trabalha e tem rotina." 
              rating={5} 
            />
            <Testimonial 
              name="Marcos T." 
              text="Conteúdo claro, organizado e fácil de aplicar no dia a dia." 
              rating={5} 
            />
          </div>
        </div>
      </section>

      {/* 9. BENEFÍCIOS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-extrabold mb-16">Seus Benefícios Imediatos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 text-center hover:bg-green-50 transition-colors group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <i className={`fa-solid fa-${b.icon} text-2xl text-green-600`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA DE NOVO */}
      <section className="py-12 bg-white">
        <CTAButton text="Começar agora minha mudança alimentar" />
      </section>

      {/* 11. UMA FÓRMULA COMPROVADA */}
      <section className="py-24 bg-green-50 px-4 overflow-hidden relative">
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase">Uma Fórmula Comprovada</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 text-2xl md:text-3xl font-bold text-green-800">
            <span>🧠 Ciência</span>
            <i className="fa-solid fa-arrow-right text-gray-400"></i>
            <span>🥗 Alimento</span>
            <i className="fa-solid fa-arrow-right text-gray-400"></i>
            <span>⏱ Aplicação</span>
            <i className="fa-solid fa-arrow-right text-gray-400"></i>
            <span>🛡 Prevenção</span>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-gray-700 font-medium">
              Quanto mais cedo você ajusta a alimentação, menos você paga em exames, remédios e limitações no futuro.
            </p>
            <div className="bg-red-100 border-l-4 border-red-500 p-6 text-red-800 font-bold text-lg animate-pulse">
              ⚠️ IGNORAR ISSO AGORA CUSTA CARO DEPOIS.
            </div>
          </div>
          <img 
            src="https://picsum.photos/seed/formula/800/400" 
            alt="Fórmula do Produto" 
            className="rounded-3xl shadow-2xl mx-auto border-4 border-white"
          />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </section>

      {/* 12. OFERTA COM ANCORAGEM + CTA FINAL */}
      <section className="py-32 bg-gray-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-400">Quanto custa envelhecer mal?</h2>
          <p className="text-xl mb-12 text-gray-300">Consultas, exames, remédios, limitações… Milhares de reais ao longo dos anos.</p>
          
          <div className="bg-white text-gray-900 rounded-[3rem] p-12 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.3)]">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-8 py-2 rounded-bl-3xl font-bold animate-bounce uppercase">
              OFERTA ESPECIAL
            </div>
            
            <h3 className="text-3xl font-black mb-8">O ACESSO É IMEDIATO</h3>
            
            <div className="flex flex-col gap-4 mb-10 text-left max-w-xs mx-auto">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-check-double text-green-500"></i>
                <span className="font-bold">📘 E-book completo</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-check-double text-green-500"></i>
                <span className="font-bold">📥 Download imediato</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-check-double text-green-500"></i>
                <span className="font-bold">🔒 Acesso vitalício</span>
              </div>
            </div>

            <div className="mb-12">
              <span className="text-gray-400 line-through text-2xl block">De R$ 197,00</span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-bold uppercase">Hoje por</span>
                <span className="text-6xl md:text-8xl font-black text-green-600">R$ 27</span>
                <span className="text-xl font-bold">,90</span>
              </div>
              <p className="text-gray-500 mt-2">Valor simbólico por tempo limitado</p>
            </div>

            <CTAButton 
              text="Quero garantir meu acesso agora" 
              className="max-w-full"
            />
            
            <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
              <i className="fa-brands fa-cc-visa text-4xl"></i>
              <i className="fa-brands fa-cc-mastercard text-4xl"></i>
              <i className="fa-solid fa-barcode text-4xl"></i>
              <i className="fa-solid fa-shield-halved text-4xl"></i>
            </div>
          </div>
          
          <p className="mt-12 text-gray-500 text-sm">
            Garantia de satisfação de 7 dias ou seu dinheiro de volta.<br/>
            Compra segura processada de forma criptografada.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-12 text-center text-gray-600 border-t border-white/5">
        <p>&copy; 2024 Guia Saúde 40+. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 mt-4 text-xs">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
