
import React from 'react';
import CTAButton from './components/CTAButton';
import Testimonial from './components/Testimonial';
import { TestimonialData, ContentItem, BenefitItem } from './types';

const App: React.FC = () => {
  const CHECKOUT_URL = "https://123.com";

  const handleCTA = () => {
    window.location.href = CHECKOUT_URL;
  };

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
    { title: "Como esses alimentos protegem o cérebro", gain: "Clareza mental e envelhecimento mais lúcido" },
  ];

  const benefits: BenefitItem[] = [
    { title: "Mais disposição diária", description: "Energia renovada para sua rotina", icon: "bolt" },
    { title: "Melhor controle", description: "Pressão, colesterol e glicose sob controle", icon: "heart-pulse" },
    { title: "Redução de inflamações", description: "Combate às dores silenciosas", icon: "shield-halved" },
    { title: "Força muscular", description: "Manutenção da massa magra", icon: "dumbbell" },
    { title: "Proteção do cérebro", description: "Foco na memória e cognição", icon: "brain" },
    { title: "Alinhamento de vida", description: "Focado na sua fase atual", icon: "check-circle" },
  ];

  return (
    <div className="min-h-screen selection:bg-green-100">
      {/* 1. MAIN COPY (HERO) */}
      <section className="relative pt-12 pb-24 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Depois dos 40, <span className="text-green-600 underline decoration-green-200 underline-offset-8">não é sobre comer menos.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-semibold italic">
              É sobre comer o que mantém você forte, lúcido e saudável.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Descubra os alimentos essenciais que protegem seu corpo contra doenças silenciosas, perda de força e declínio cognitivo — usando o que você já encontra no mercado.
            </p>
            <div className="flex items-center gap-2 text-green-700 font-bold justify-center lg:justify-start">
              <i className="fa-solid fa-square-check text-green-500"></i>
              <span>Guia prático, científico e aplicável à vida real.</span>
            </div>
            
            <CTAButton 
              text="Quero proteger minha saúde agora" 
              subtext="Acesso instantâneo • Pagamento Único"
              className="lg:mx-0"
              onClick={handleCTA}
            />
          </div>
          
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-[3rem] blur-2xl transition group-hover:opacity-100 opacity-50"></div>
              <img 
                src="https://i.ibb.co/d4M6fyyW/capa-alim.png" 
                alt="Capa Guia Saúde 40+" 
                className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 border-2 border-green-500 p-4 rounded-2xl shadow-xl font-bold text-center hidden md:block animate-bounce">
                <span className="text-green-600 text-xl">Digital</span><br/>PDF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ELEVAR NÍVEL DE CONSCIÊNCIA */}
      <section className="py-24 bg-gray-900 text-white px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <img 
            src="https://i.ibb.co/ZpWXWSvh/Chat-GPT-Image-31-de-jan-de-2026-16-18-11.png" 
            alt="Mockup eBook Saúde 40+" 
            className="mx-auto rounded-xl shadow-2xl w-64 mb-12 border-2 border-gray-700 hover:rotate-2 transition-transform"
          />
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Aos 40 anos, o corpo entra em uma nova fase.</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mt-12">
            {[
              "O que antes funcionava agora gera cansaço.",
              "Exames alterados e dores constantes.",
              "Perda visível de energia e memória.",
              "Sensação de envelhecimento acelerado."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-green-400 text-xl">👉</span>
                <p className="text-lg text-gray-300 font-medium">{text}</p>
              </div>
            ))}
          </div>
          <div className="pt-12 space-y-6">
            <p className="text-xl text-gray-400">Isso não acontece de uma vez. Acontece em silêncio.</p>
            <p className="text-2xl md:text-3xl font-light text-green-400 italic leading-relaxed">
              "E a alimentação é o principal fator que decide como você vai envelhecer."
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* 3. CTA DOWNLOAD */}
      <section className="py-16 bg-white border-b border-gray-100">
        <CTAButton 
          text="Fazer download imediato do guia" 
          subtext="Acesso instantâneo • Leitura simples • Aplicação prática"
          onClick={handleCTA}
        />
      </section>

      {/* 4. FEEDBACKS */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos alunos</h3>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">📘 O que tem dentro do guia:</h2>
            <p className="text-xl text-gray-400 font-medium">CONTEÚDO E GANHOS REAIS</p>
          </div>
          <div className="grid gap-6">
            {contentItems.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all group">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-green-500 group-hover:scale-110 transition-transform"></i>
                    {item.title}
                  </h4>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-2">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-tighter">GANHO</div>
                  <p className="text-gray-600 font-semibold">{item.gain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA NOVO */}
      <section className="py-12 bg-white">
        <CTAButton text="Quero acessar o guia agora" onClick={handleCTA} />
      </section>

      {/* 7. PARA QUEM SERVE */}
      <section className="py-24 bg-gray-900 text-white px-4 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold mb-8 text-green-400">Este guia é para você se:</h2>
            <ul className="space-y-6">
              {[
                "Tem 40 anos ou mais",
                "Quer prevenir doenças antes que elas apareçam",
                "Busca mais energia, força e bem-estar",
                "Prefere soluções simples e realistas",
                "Não quer depender apenas de remédios no futuro"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-xl">
                  <i className="fa-solid fa-square-check text-green-500 text-2xl"></i>
                  <span className="text-gray-200">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 bg-red-500/10 rounded-bl-3xl">
               <i className="fa-solid fa-triangle-exclamation text-red-400 text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-red-400 mb-6">❌ Não é para quem:</h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Não é para quem procura dietas extremas, milagres rápidos ou atalhos que colocam a saúde em risco.
            </p>
          </div>
        </div>
      </section>

      {/* 8. MAIS FEEDBACKS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Testimonial 
            name="Ricardo Oliveira" 
            text="Gostei porque respeita a idade e a realidade de quem trabalha e tem rotina." 
            rating={5} 
          />
          <Testimonial 
            name="Sônia Dias" 
            text="Conteúdo claro, organizado e fácil de aplicar no dia a dia." 
            rating={5} 
          />
        </div>
      </section>

      {/* 9. BENEFÍCIOS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Benefícios Reais</h2>
            <div className="w-32 h-2 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <div key={i} className="p-10 rounded-3xl bg-gray-50 border border-transparent hover:border-green-100 hover:bg-white transition-all shadow-sm hover:shadow-xl group">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-200 group-hover:rotate-6 transition-transform">
                  <i className={`fa-solid fa-${b.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA DE NOVO */}
      <section className="py-12 bg-white">
        <CTAButton text="Começar agora minha mudança alimentar" onClick={handleCTA} />
      </section>

      {/* 11. UMA FÓRMULA COMPROVADA */}
      <section className="py-24 bg-green-50 px-4 overflow-hidden relative">
        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">Uma Fórmula Comprovada</h2>
          <div className="flex flex-wrap justify-center items-center gap-6 text-2xl md:text-3xl font-extrabold text-green-800 bg-white/50 py-8 px-4 rounded-3xl border border-green-200">
            <div className="flex items-center gap-2"><span>🧠 Ciência</span></div>
            <i className="fa-solid fa-chevron-right text-green-300 hidden md:block"></i>
            <div className="flex items-center gap-2"><span>🥗 Alimento</span></div>
            <i className="fa-solid fa-chevron-right text-green-300 hidden md:block"></i>
            <div className="flex items-center gap-2"><span>⏱ Aplicação</span></div>
            <i className="fa-solid fa-chevron-right text-green-300 hidden md:block"></i>
            <div className="flex items-center gap-2"><span>🛡 Prevenção</span></div>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-2xl text-gray-700 font-medium leading-relaxed">
              Quanto mais cedo você ajusta a alimentação, menos você paga em exames, remédios e limitações no futuro.
            </p>
            <div className="bg-red-500 text-white p-8 rounded-2xl shadow-2xl font-black text-2xl flex items-center justify-center gap-4 animate-pulse">
              <i className="fa-solid fa-warning"></i>
              <span>IGNORAR ISSO AGORA CUSTA CARO DEPOIS.</span>
            </div>
          </div>
          <img 
            src="https://i.ibb.co/xKV2KJsM/Chat-GPT-Image-31-de-jan-de-2026-16-22-31.png" 
            alt="Produto e Fórmula" 
            className="rounded-[3rem] shadow-2xl mx-auto border-8 border-white max-w-4xl w-full"
          />
        </div>
      </section>

      {/* 12. OFERTA COM ANCORAGEM + CTA FINAL */}
      <section className="py-32 bg-gray-950 text-white px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-400">Quanto custa envelhecer mal?</h2>
          <p className="text-xl md:text-2xl mb-16 text-gray-500 font-light">Consultas, exames, remédios... <span className="text-white font-bold">milhares de reais</span> ao longo dos anos.</p>
          
          <div className="bg-white text-gray-900 rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.2)]">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-10 py-3 rounded-bl-[2rem] font-black text-sm md:text-base animate-pulse">
              OFERTA ESPECIAL VÁLIDA AGORA
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 text-left mb-16">
               <div className="flex-1 space-y-6">
                  <h3 className="text-4xl font-black text-gray-900 leading-tight">O SEU ACESSO É<br/><span className="text-green-600">IMEDIATO</span></h3>
                  <div className="space-y-4 font-bold text-gray-600">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><i className="fa-solid fa-check text-green-600 text-xs"></i></div>
                      <span>E-book Completo (PDF)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><i className="fa-solid fa-check text-green-600 text-xs"></i></div>
                      <span>Acesso em todos dispositivos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><i className="fa-solid fa-check text-green-600 text-xs"></i></div>
                      <span>Download Vitalício</span>
                    </div>
                  </div>
               </div>
               
               <div className="flex-1 bg-gray-50 rounded-3xl p-8 border-2 border-dashed border-gray-200 text-center">
                  <span className="text-gray-400 line-through text-2xl block mb-2">De R$ 197,00</span>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold uppercase text-gray-500 tracking-widest">Apenas</span>
                    <div className="flex items-center gap-1">
                       <span className="text-3xl font-black text-green-600 self-start mt-2">R$</span>
                       <span className="text-8xl font-black text-green-600 tracking-tighter">19</span>
                       <span className="text-3xl font-black text-green-600 self-end mb-4">,90</span>
                    </div>
                    <span className="text-xs font-bold text-gray-400 italic">PAGAMENTO ÚNICO</span>
                  </div>
               </div>
            </div>

            <CTAButton 
              text="Quero garantir meu acesso agora" 
              className="max-w-full"
              onClick={handleCTA}
            />
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <i className="fa-brands fa-cc-visa text-4xl"></i>
              <i className="fa-brands fa-cc-mastercard text-4xl"></i>
              <i className="fa-solid fa-barcode text-4xl"></i>
              <i className="fa-solid fa-shield-halved text-4xl"></i>
              <i className="fa-solid fa-lock text-4xl"></i>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full border border-white/10">
              <i className="fa-solid fa-shield-check text-green-500"></i>
              <span className="text-sm font-semibold uppercase tracking-wider">Garantia Incondicional de 7 Dias</span>
            </div>
            <p className="text-xs max-w-lg opacity-50">
              Ao adquirir agora, você tem 7 dias para avaliar o material. Se não ficar satisfeito, devolvemos 100% do seu investimento sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 text-center text-gray-500 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <h4 className="text-white font-black text-xl mb-6 tracking-widest">GUIA SAÚDE 40+</h4>
          <p className="text-sm max-w-2xl mx-auto leading-relaxed opacity-40 mb-8">
            As informações contidas neste guia têm fins educacionais e não substituem o aconselhamento médico profissional. Sempre consulte seu médico antes de realizar mudanças drásticas na sua dieta.
          </p>
          <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-green-500 transition-colors">Termos</a>
            <a href="#" className="hover:text-green-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-green-500 transition-colors">Suporte</a>
          </div>
          <p className="mt-12 text-[10px] opacity-20">&copy; 2026 Todos os direitos reservados. Site compatível com Netlify.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
