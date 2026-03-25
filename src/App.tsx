import React, { useState } from 'react';
import { Mail, Phone, MapPin, Truck, Hammer, Briefcase, Wrench, FileText, ArrowRight, X, MessageCircle, Instagram, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Specialty {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  images: string[];
}

const SPECIALTIES: Specialty[] = [
  {
    title: "Marcenaria Rústica",
    description: "Especialista em acabamento de móveis rústicos com foco em qualidade e transformação visual.",
    icon: <Hammer />,
    details: "Trabalho autônomo: MARCENARIA RÚSTICA Ibicaraí, Itabuna, Ilhéus, Itacaré, Barra Grande e região.\n\n• Aparelhamento\n• Revitalização e lixa.\n• Aplicação de verniz",
    images: ["https://i.imgur.com/BaiZ67t.jpeg", "https://i.imgur.com/7EqYmKn.jpeg"]
  },
  {
    title: "Transporte",
    description: "Motorista profissional com experiência em transporte, entregas e vendas externas.",
    icon: <Truck />,
    details: "Motorista profissional com experiência em transporte, entregas e vendas externas, destacando-se pela pontualidade, responsabilidade e excelente relacionamento com clientes.\n\n• CNH categorias A e B, com disponibilidade para viagens\n• Direção defensiva e cuidado com o veículo\n• Experiência em entregas e coletas urbanas e intermunicipais\n• Atendimento ao cliente durante o transporte\n• Atuação com transporte de cargas leves\n• Boa comunicação e relacionamento interpessoal\n\nLimpezinha PDL – Motorista/Vendedor | 1 ano\nResponsável pelo transporte de mercadorias, realização de entregas e coletas, além de atuação em vendas externas.",
    images: ["https://blog.econeteditora.com.br/wp-content/uploads/2019/08/why-kei-8e2gal_GIE8-unsplash-Largo.jpg"]
  },
  {
    title: "Vendas e Atendimento",
    description: "Mais de 7 anos de experiência no setor automotivo, com foco em resultados.",
    icon: <Briefcase />,
    details: "Mais de 7 anos de experiência no setor automotivo, com atuação especializada em vendas de motos, peças e acessórios, focado em resultados, relacionamento com clientes e crescimento comercial.\n\n• Atendimento técnico e consultivo\n• Gestão de metas e resultados de vendas\n• Fidelização de clientes e pós-venda personalizado\n• Habilidade em argumentação e fechamento de vendas\n• Proatividade e foco em resultados\n• Experiência em vendas externas (B2B e B2C)\n• Gestão e manutenção de carteira de clientes\n\nPit Stop Motos – Gerente de Vendas/Vendedor | 7 anos\nMoto Livre Goiânia – Auxiliar de Estoque/Vendedor | 6 meses",
    images: ["https://kgmotos.com.br/wp-content/uploads/cb-650r-vermelha-e-cluth-2964x615-1.webp"]
  },
  {
    title: "Máquinas e Obras",
    description: "Operação de máquinas pesadas e apoio técnico em obras civis.",
    icon: <Wrench />,
    details: "Formação e experiência em operação de máquinas pesadas, com atuação em obras civis, terraplanagem e apoio técnico de campo.\n\n• Operação de máquinas com foco em segurança e eficiência\n• Experiência em obras civis e serviços de terraplanagem\n• Operação de retroescavadeira e escavadeira hidráulica\n• Vivência em infraestrutura e apoio técnico em campo\n• Supervisão de equipes operacionais\n\n1 ano como Auxiliar de Topógrafo/Encarregado de Obras na Topo Engenharia.",
    images: ["https://i.imgur.com/t7qHHgz.jpeg", "https://i.imgur.com/MzKbNnt.jpeg"]
  },
  {
    title: "Apoio Administrativo",
    description: "Suporte em organização, documentação, controle de estoque e logística.",
    icon: <FileText />,
    details: "• Organização de documentos, arquivamento e suporte administrativo em rotinas de escritório\n• Controle de estoque, conferência de mercadorias e reposição de produtos\n• Apoio logístico nas operações diárias, incluindo organização do ambiente e manutenção básica\n• Suporte direto à equipe comercial, auxiliando no atendimento e nas demandas de vendas\n\nExperiência Profissional: 1 ano de atuação como Digitador em escritório de contabilidade.",
    images: ["https://educamundo.com.br/wp-content/uploads/2024/06/00i_auxiliar_escritorio-02-1.webp"]
  }
];

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D241E] font-sans">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 py-20 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-[#2D241E] uppercase mb-8">
              Gabriel<br/><span className="text-[#A67C52]">Vieira</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8B5E3C] mb-12 font-light max-w-lg">
              Serviços gerais, motorista A/B e marcenaria rústica. Versatilidade e compromisso com resultados.
            </p>
            <a href="https://wa.me/557381660570" className="inline-flex items-center gap-3 bg-[#2D241E] text-white font-bold py-4 px-8 rounded-full hover:bg-[#4A3B30] transition shadow-lg">
              <MessageCircle size={20} /> Entre em contato
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <img src="https://i.imgur.com/CN74MpI.jpeg" alt="Gabriel Vieira" className="rounded-2xl shadow-2xl w-full max-w-md h-auto object-cover aspect-[3/4] rotate-3 hover:rotate-0 transition duration-500" />
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 px-6 bg-[#2D241E] text-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] mb-8 opacity-60">Sobre</h2>
          <p className="text-4xl md:text-5xl font-light leading-tight mb-12">
            Profissional versátil com mais de <span className="text-[#A67C52] font-medium">7 anos de experiência</span>. Transformo desafios em resultados através de dedicação, técnica e um olhar atento aos detalhes.
          </p>
          <div className="flex items-center gap-4 text-lg font-medium opacity-70 bg-[#3D342E] p-6 rounded-2xl inline-flex">
            <MapPin size={24} className="text-[#A67C52]" /> Ibicaraí e região / Bahia
          </div>
        </div>
      </section>

      {/* Specialties Section (Bento Grid) */}
      <section className="py-32 px-6 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.2em] mb-16 opacity-60 text-[#2D241E]">Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {SPECIALTIES.map((s, i) => (
              <motion.button 
                key={s.title} 
                onClick={() => setSelectedSpecialty(s)} 
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-3xl p-8 text-left transition-all ${
                  i === 0 ? 'md:col-span-2 md:row-span-2 bg-[#2D241E] text-white' : 
                  i === 3 || i === 4 ? 'md:col-span-2 bg-[#F2EBE5]' : 'bg-[#EAE6E1]'
                }`}
              >
                <div className={`mb-4 ${i === 0 ? 'text-[#A67C52]' : 'text-[#8B5E3C]'}`}>{s.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className={`opacity-70 ${i === 0 ? 'text-gray-300' : 'text-[#2D241E]'}`}>{s.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Section */}
      <section className="py-32 px-6 bg-[#2D241E] text-[#FDFBF7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-heading">Vamos trabalhar juntos?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Estou em busca de novos desafios e pronto para agregar valor à sua empresa ou projeto. Com sólida experiência e versatilidade, estou disponível para contratações CLT ou parcerias PJ. Vamos transformar objetivos em resultados?
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://wa.me/557381660570" className="flex items-center gap-2 hover:text-[#A67C52] transition"><MessageCircle /> WhatsApp</a>
            <a href="https://www.instagram.com/gabriel_vieiramr?igsh=anRkb2x5bXB2Mzl3" className="flex items-center gap-2 hover:text-[#A67C52] transition"><Instagram /> Instagram</a>
          </div>
          
          {/* Removed resume link */}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedSpecialty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedSpecialty(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-[#FDFBF7] p-8 md:p-12 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedSpecialty(null)} className="absolute top-6 right-6"><X /></button>
              <h2 className="text-4xl font-bold mb-8 font-heading">{selectedSpecialty.title}</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {selectedSpecialty.images.map(img => <img key={img} src={img} className="rounded-2xl aspect-video object-cover" />)}
              </div>
              <p className="text-lg leading-relaxed whitespace-pre-line">{selectedSpecialty.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


