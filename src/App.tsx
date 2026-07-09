import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  FolderOpen, 
  Cloud, 
  Sparkles,
  ArrowRight,
  Folder,
  Eye,
  Check,
  Scale,
  ShieldCheck,
  Coins
} from 'lucide-react';

// Image reference from generation tool
const MOCKUP_IMAGE = '/src/assets/images/petitions_mockup_1783604482020.jpg';

// FAQ items data matching user style preference
const FAQ_ITEMS = [
  {
    question: "Como eu vou receber o material?",
    answer: "O acesso é imediato e 100% digital. Assim que o pagamento de R$ 17,00 for confirmado (via Pix é imediato, ou em poucos minutos no cartão), você receberá um e-mail com as instruções de acesso e o link direto para a nossa pasta exclusiva no Google Drive."
  },
  {
    question: "O material é físico ou digital?",
    answer: "O material é 100% digital. Você terá acesso vitalício para baixar, visualizar e editar os arquivos diretamente na nuvem (Google Drive) ou salvar no seu próprio computador e usá-los quando e onde preferir."
  },
  {
    question: "Serve para quem está começando na advocacia?",
    answer: "Sim! O nosso kit foi desenvolvido justamente para dar agilidade e segurança a novos advogados, fornecendo teses fundamentadas e estruturadas em formato editável. Profissionais experientes também utilizam para otimizar o tempo de redação de suas peças cotidianas."
  },
  {
    question: "As petições são fáceis de editar?",
    answer: "Extremamente simples. Todas as peças estão em formato Word (.docx) inteiramente editável. Basta abrir o arquivo desejado no seu editor (Word, Docs, etc.), adaptar os dados do seu cliente e os fatos do caso, e sua petição estará pronta para protocolo."
  },
  {
    question: "Tenho garantia?",
    answer: "Com certeza! Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo achar que o material não atende às suas necessidades ou não te ajudou na sua rotina, basta nos enviar um e-mail para receber o reembolso integral, sem complicação."
  }
];

// Google Drive simulated folder list data exactly matching the user's second image
const FOLDERS_DATA = [
  { id: '001', name: '001. Inicial - reclamatória trabalhista', type: 'Pasta de arquivos' },
  { id: '002', name: '002. Defesa trabalhista', type: 'Pasta de arquivos', highlight: true },
  { id: '003', name: '003. Execução trabalhista', type: 'Pasta de arquivos' },
  { id: '004', name: '004. Acordo para homologação', type: 'Pasta de arquivos' },
  { id: '005', name: '005. Recurso ordinário', type: 'Pasta de arquivos' },
  { id: '006', name: '006. Rescisão indireta', type: 'Pasta de arquivos' },
  { id: '007', name: '007. Procuração', type: 'Pasta de arquivos' },
  { id: '008', name: '008. Reversão de justa causa', type: 'Pasta de arquivos' },
  { id: '009', name: '009. Modelo de recibo de pagame...', type: 'Pasta de arquivos' },
  { id: '010', name: '10. Embargos de terceiro', type: 'Pasta de arquivos' },
  { id: '011', name: '11. Embargos à execução', type: 'Pasta de arquivos' },
  { id: '012', name: '12. Contrarrazões ao recurso ordiná...', type: 'Pasta de arquivos' },
  { id: '013', name: '13. Agravo de petição', type: 'Pasta de arquivos' },
  { id: '014', name: '14. Contraminuta ao agravo de ins...', type: 'Pasta de arquivos' },
  { id: '015', name: '15. Embargos de declaração', type: 'Pasta de arquivos' },
  { id: '016', name: '16. Aditamento à inicial', type: 'Pasta de arquivos' },
  { id: '017', name: '17. Contrarrazões ao recurso ordiná...', type: 'Pasta de arquivos' },
  { id: '018', name: '18. Consignação em pagamento', type: 'Pasta de arquivos' },
  { id: '019', name: '19. Impugnação pericial e de liqui...', type: 'Pasta de arquivos' }
];

export default function App() {
  // Simple folder list showing all files as a clean preview of the drive content
  const filteredFolders = FOLDERS_DATA;

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-navy font-sans antialiased relative overflow-hidden pb-24">
      
      {/* Background radial soft light for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-gold/15 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-brand-navy-light/10 blur-3xl"></div>
      </div>

      {/* DOBRA 1: Hero / Primeira Dobra - Styled matching the user's reference image */}
      <section className="relative z-10 flex flex-col items-center pt-16 pb-12 px-4 md:px-8 max-w-4xl mx-auto text-center">
        {/* Top Capsule - Styled like "Material Exclusivo para Catequistas" in the reference image */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center mb-6"
        >
          <span className="px-5 py-2 rounded-full border border-brand-navy/15 bg-brand-navy/5 text-brand-navy-light text-xs sm:text-sm font-semibold tracking-wide">
            Material Exclusivo para Advogados
          </span>
        </motion.div>

        {/* Title - Mirroring the style, weights, and high-impact hierarchy of the reference image */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-tight max-w-3xl"
        >
          <span className="text-brand-gold-bright block mb-2 font-black">
            +1.200 Petições prontas
          </span>
          <span className="text-brand-navy font-serif font-bold text-2xl sm:text-4xl lg:text-5xl italic block">
            para Advocacia Trabalhista
          </span>
          <span className="text-brand-navy block">
            e Previdenciária
          </span>
        </motion.h1>

        {/* Central Mockup Image - Premium shadow and frame mimicking the reference image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="my-4 max-w-lg w-full rounded-2xl bg-white p-4 shadow-xl border border-brand-navy/10 relative group hover:shadow-2xl transition-all duration-300"
        >
          <img 
            src={MOCKUP_IMAGE} 
            alt="Kit de Petições Prontas Trabalhista e Previdenciário"
            referrerPolicy="no-referrer"
            className="w-full h-auto rounded-xl object-contain"
          />
        </motion.div>

        {/* Paragraph text below the mockup - Structured like the text underneath the reference image */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-sm sm:text-base lg:text-lg text-brand-navy-light/90 max-w-2xl mx-auto leading-relaxed mt-8 font-medium"
        >
          Petições prontas, cirúrgicas e atualizadas de acordo com as reformas trabalhista e previdenciária, com fundamentações de excelência para acelerar a redação de suas peças iniciais e recursos judiciais no dia a dia do seu escritório.
        </motion.p>
      </section>

      {/* DOBRA 2: "O que você vai receber" - Perfectly styled mirroring the second reference image */}
      <section className="relative z-10 py-16 bg-brand-offwhite/50 border-t border-brand-navy/5 flex flex-col items-center">
        <div className="max-w-2xl w-full px-4">
          
          {/* Centered Title identical to reference image style */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy leading-snug">
              O que você vai receber
            </h2>
            <div className="w-12 h-1 bg-brand-gold-bright mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Cards stack precisely modeled on reference image styling */}
          <div className="space-y-6">
            
            {/* Card 1: Word Format & Editability */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-brand-navy/5 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 sm:gap-6"
            >
              {/* Icon Container with subtle colored background */}
              <div className="bg-[#eef3f9] text-brand-navy p-3.5 rounded-xl shrink-0 flex items-center justify-center border border-brand-navy/5">
                <FileText className="w-6 h-6 text-brand-navy-light" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-sans text-base sm:text-lg font-bold text-brand-navy">
                  Peças em Word (.DOCX) e 100% Editáveis
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-navy-light/80 leading-relaxed font-normal">
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Mais de 1.200 modelos de petições prontas estruturadas no Word.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Totalmente livre de travas: altere termos, jurisprudências e logotipos livremente.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Campos demarcados de fácil preenchimento para personalizar em menos de 5 minutos.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Folder organization */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-brand-navy/5 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 sm:gap-6"
            >
              {/* Icon Container with subtle colored background */}
              <div className="bg-[#fcf8ee] text-brand-gold p-3.5 rounded-xl shrink-0 flex items-center justify-center border border-brand-gold/10">
                <FolderOpen className="w-6 h-6 text-brand-gold-dark" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-sans text-base sm:text-lg font-bold text-brand-navy">
                  Organização Inteligente por Pastas Temáticas
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-navy-light/80 leading-relaxed font-normal">
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Materiais perfeitamente separados e catalogados por pastas lógicas.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Chega de arquivos soltos ou desordenados: encontre a tese perfeita em instantes.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Estrutura otimizada que reduz o tempo de busca e facilita o fluxo de trabalho.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 3: Google Drive & Lifetime Access */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl border border-brand-navy/5 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 sm:gap-6"
            >
              {/* Icon Container with subtle colored background */}
              <div className="bg-[#eefcf4] text-emerald-700 p-3.5 rounded-xl shrink-0 flex items-center justify-center border border-emerald-500/10">
                <Cloud className="w-6 h-6 text-emerald-600" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-sans text-base sm:text-lg font-bold text-brand-navy">
                  Acesso Digital Completo e Vitalício via Google Drive
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-navy-light/80 leading-relaxed font-normal">
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Hospedagem segura e confiável na nuvem para baixar quando e onde desejar.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Acesse diretamente pelo celular, tablet, computador ou notebook sem limite de tempo.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Praticidade absoluta para sua rotina forense, disponível 24 horas por dia.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Card 4: High technical quality and updates */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl border border-brand-navy/5 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 sm:gap-6"
            >
              {/* Icon Container with subtle colored background */}
              <div className="bg-[#faf3f3] text-[#c55d5d] p-3.5 rounded-xl shrink-0 flex items-center justify-center border border-red-500/5">
                <Sparkles className="w-6 h-6 text-[#9f4e4e]" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-sans text-base sm:text-lg font-bold text-brand-navy">
                  Alta Qualidade Técnica e Peças Prontas para o Protocolo
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-navy-light/80 leading-relaxed font-normal">
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Fundamentações robustas com doutrinas e jurisprudências contemporâneas.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Modelos de peças testadas no dia a dia da advocacia real com alto índice de êxito.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold-bright font-bold select-none">•</span>
                    <span>Atualizações garantidas para manter seu escritório protegido perante novas decisões.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DOBRA 3: EXEMPLOS REAIS - Mimicking "Veja Algumas Dinâmicas" & displaying simulated print layout of the drive folders */}
      <section className="relative z-10 py-16 px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Title identical to style in first image */}
        <div className="text-center mb-4">
          <span className="text-xs font-black uppercase tracking-widest text-brand-gold-dark block mb-2">
            Exemplos Reais
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-navy">
            Veja Algumas Peças e Pastas
          </h2>
          <p className="text-sm sm:text-base text-brand-navy-light/80 mt-3 max-w-2xl mx-auto">
            Uma pequena amostra de nosso material, com apenas algumas pastas das milhares que temos no kit completo para você receber imediatamente no Google Drive.
          </p>
        </div>

        {/* 2x2 Grid Section (Left Card grid) & Simulated Drive Folders Section (Right layout side) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mt-10">
          
          {/* Card list (7 cols) - Styled exactly like the "Veja Algumas Dinâmicas" grid layout from the user's first image */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Grid Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-brand-navy/5 p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-[#eef3f9] border border-brand-navy/5 flex items-center justify-center">
                <Scale className="w-7 h-7 text-brand-navy" />
              </div>
              <span className="bg-[#eef3f9] text-brand-navy text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Iniciais Trabalhistas
              </span>
              <h3 className="font-sans text-sm font-bold text-brand-navy">
                Reclamatória - Acúmulo de Função
              </h3>
              <p className="text-xs text-brand-navy-light/75 leading-relaxed">
                Tese cirúrgica demonstrando desvio ou acúmulo funcional ilegal com reflexos de verbas rescisórias.
              </p>
            </motion.div>

            {/* Grid Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-brand-navy/5 p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-[#faf3f3] border border-red-500/5 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-red-700" />
              </div>
              <span className="bg-[#faf3f3] text-red-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Defesas do Réu
              </span>
              <h3 className="font-sans text-sm font-bold text-brand-navy">
                Contestação - Justa Causa
              </h3>
              <p className="text-xs text-brand-navy-light/75 leading-relaxed">
                Contestações e impugnações fundamentadas com o ônus da prova pedagógica do empregador.
              </p>
            </motion.div>

            {/* Grid Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-brand-navy/5 p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-[#fcf8ee] border border-brand-gold/10 flex items-center justify-center">
                <Coins className="w-7 h-7 text-brand-gold-dark" />
              </div>
              <span className="bg-[#fcf8ee] text-brand-gold-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Previdenciário
              </span>
              <h3 className="font-sans text-sm font-bold text-brand-navy">
                Revisão da Vida Toda (Tema 1102)
              </h3>
              <p className="text-xs text-brand-navy-light/75 leading-relaxed">
                Ação robusta com cálculo de inclusão das maiores contribuições anteriores à julho de 1994.
              </p>
            </motion.div>

            {/* Grid Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-brand-navy/5 p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-[#eefcf4] border border-emerald-500/10 flex items-center justify-center">
                <FolderOpen className="w-7 h-7 text-emerald-700" />
              </div>
              <span className="bg-[#eefcf4] text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Aposentadoria Especial
              </span>
              <h3 className="font-sans text-sm font-bold text-brand-navy">
                Insalubridade por Agentes Físicos
              </h3>
              <p className="text-xs text-brand-navy-light/75 leading-relaxed">
                Peça cirúrgica com foco no PPP e LTCAT demonstrando ruído acima dos limites de tolerância previdenciária.
              </p>
            </motion.div>

          </div>

          {/* Google Drive Folder Explorer View (5 cols) - Mimicking a clean print of the Drive folders structure from the second image */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white rounded-2xl border border-brand-navy/10 shadow-lg overflow-hidden flex flex-col h-[520px]">
              
              {/* Virtual Google Drive Header (Without Buttons, Pure Elegant Text) */}
              <div className="bg-[#0b1b33] text-white px-5 py-4 border-b border-brand-gold/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-white/15 p-2 rounded-lg border border-brand-gold/20">
                    <Cloud className="w-5 h-5 text-brand-gold-bright" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest block">
                      Google Drive Organizado
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      Pequena amostra de nosso material
                    </span>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[9px] text-brand-gold-light/70 font-semibold uppercase tracking-wider block">
                    Milhares de Pastas
                  </span>
                  <span className="text-[11px] text-brand-gold-bright font-bold">
                    Acesso Completo
                  </span>
                </div>
              </div>

              {/* Folder list header table style */}
              <div className="grid grid-cols-12 gap-4 px-5 py-2.5 bg-brand-cream/40 border-b border-brand-navy/5 text-[10px] font-bold text-brand-navy-light uppercase tracking-wider">
                <div className="col-span-8 flex items-center gap-2">Nome da Pasta</div>
                <div className="col-span-4 text-right">Tipo de item</div>
              </div>

              {/* Dynamic scrollable directory mimicking file explorer precisely */}
              <div className="flex-1 overflow-y-auto divide-y divide-brand-navy/5 bg-white scrollbar-thin">
                {filteredFolders.map((folder) => (
                  <div 
                    key={folder.id} 
                    className={`grid grid-cols-12 gap-4 px-5 py-3 items-center text-xs transition-colors hover:bg-brand-cream/15 ${folder.highlight ? 'bg-brand-cream/30' : ''}`}
                  >
                    {/* Folder Icon and Name */}
                    <div className="col-span-8 flex items-center gap-2.5 truncate">
                      {/* Gold Folder icon as in the screenshot */}
                      <Folder className="w-4.5 h-4.5 text-[#fbbf24] shrink-0 fill-[#fbbf24]" />
                      <span className="font-medium text-brand-navy truncate select-none">
                        {folder.name}
                      </span>
                    </div>

                    {/* Folder File type */}
                    <div className="col-span-4 text-right text-[11px] text-brand-navy-light/65 font-medium">
                      {folder.type}
                    </div>
                  </div>
                ))}
              </div>

              {/* Virtual drive footer stats */}
              <div className="px-5 py-3 bg-brand-cream/20 border-t border-brand-navy/5 flex justify-between items-center text-[10px] text-brand-navy-light/70 font-semibold uppercase">
                <span>Apenas uma demonstração do kit</span>
                <span className="text-brand-gold-dark font-bold text-right">Contém milhares de arquivos reais</span>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* DOBRA 4: DEPOIMENTOS / QUEM JÁ GARANTIU - WhatsApp/PIX Real Proof Section with 3 uploaded screenshots in a row */}
      <section className="relative z-10 py-16 bg-[#faf8f5] border-t border-brand-navy/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header styled elegantly */}
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-brand-gold-dark block mb-2">
              QUEM JÁ GARANTIU
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-navy leading-snug">
              Depoimentos de Clientes Reais
            </h2>
            <p className="text-sm sm:text-base text-brand-navy-light/80 mt-2 max-w-2xl mx-auto">
              Advogados de todo o Brasil já utilizam nossas peças prontas no dia a dia. Confira prints de conversas reais de quem já comprou, recebeu o acesso imediato e aprovou o material!
            </p>
          </div>

          {/* 3 Columns Grid for the Screenshots side-by-side (Displays in a clean 3-column layout on all screen sizes, scaling down beautifully) */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 max-w-4xl mx-auto px-1 sm:px-4">
            
            {/* Screenshot 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border border-brand-navy/10 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="overflow-hidden rounded-lg sm:rounded-xl bg-slate-50 flex items-center justify-center">
                <img 
                  src="/src/assets/images/Screenshot (8).png" 
                  alt="Depoimento de Cliente 1" 
                  className="w-full h-auto max-h-[190px] sm:max-h-[320px] md:max-h-[440px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-1 sm:p-2 text-center border-t border-brand-navy/5 mt-1 sm:mt-2">
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-black text-brand-gold-dark uppercase tracking-wider block">Acesso Imediato</span>
                <p className="text-[9px] sm:text-xs text-brand-navy-light/80 mt-0.5 font-semibold leading-tight truncate">"Muito bem organizado!"</p>
              </div>
            </motion.div>
 
            {/* Screenshot 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border border-brand-navy/10 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="overflow-hidden rounded-lg sm:rounded-xl bg-slate-50 flex items-center justify-center">
                <img 
                  src="/src/assets/images/Screenshot (9).png" 
                  alt="Depoimento de Cliente 2" 
                  className="w-full h-auto max-h-[190px] sm:max-h-[320px] md:max-h-[440px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-1 sm:p-2 text-center border-t border-brand-navy/5 mt-1 sm:mt-2">
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-black text-emerald-600 uppercase tracking-wider block">Confirmado</span>
                <p className="text-[9px] sm:text-xs text-brand-navy-light/80 mt-0.5 font-semibold leading-tight truncate">"Consegui baixar tudo"</p>
              </div>
            </motion.div>
 
            {/* Screenshot 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl border border-brand-navy/10 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="overflow-hidden rounded-lg sm:rounded-xl bg-slate-50 flex items-center justify-center">
                <img 
                  src="/src/assets/images/Screenshot (10).png" 
                  alt="Depoimento de Cliente 3" 
                  className="w-full h-auto max-h-[190px] sm:max-h-[320px] md:max-h-[440px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-1 sm:p-2 text-center border-t border-brand-navy/5 mt-1 sm:mt-2">
                <span className="text-[8px] sm:text-[10px] md:text-[11px] font-black text-brand-navy uppercase tracking-wider block">Aprovado no Word</span>
                <p className="text-[9px] sm:text-xs text-brand-navy-light/80 mt-0.5 font-semibold leading-tight truncate">"Deus abençoe vcs"</p>
              </div>
            </motion.div>
 
          </div>

        </div>
      </section>

      {/* DOBRA 5: OFERTA / VALOR DO PRODUTO (R$ 17,00) */}
      <section className="relative z-10 py-16 bg-brand-offwhite border-t border-brand-navy/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          
          {/* Centered Heading */}
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-brand-gold-dark block mb-2">
              Oferta Especial
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-navy leading-snug">
              Escolha o Seu Plano e Garanta o Desconto
            </h2>
            <p className="text-sm sm:text-base text-brand-navy-light/80 mt-2 max-w-xl mx-auto">
              Aproveite a nossa promoção de lançamento. Acesso imediato, completo e vitalício com investimento único de apenas R$ 17,00.
            </p>
          </div>

          {/* Pricing Card Section */}
          <div className="w-full max-w-[440px] bg-white rounded-3xl border-2 border-brand-navy shadow-2xl relative overflow-hidden flex flex-col pt-8 pb-10 px-6 sm:px-8 text-center">
            
            {/* Top Tag Header "OFERTA EXCLUSIVA" */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-navy text-brand-gold-bright text-[10px] sm:text-xs font-black px-8 py-2 rounded-b-2xl uppercase tracking-widest shadow-sm">
              OFERTA EXCLUSIVA
            </div>

            {/* Plan Title */}
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-navy mt-4 mb-2">
              Pagamento Único
            </h3>

            {/* Original crossed price */}
            <p className="text-xs text-brand-navy-light/60 font-medium line-through">
              Valor Total R$ 67,00
            </p>

            {/* Huge Price Tag */}
            <div className="flex items-start justify-center text-brand-navy my-4 font-sans">
              <span className="text-lg font-black mt-2 mr-1">R$</span>
              <span className="text-6xl sm:text-7xl font-black tracking-tighter leading-none">17,00</span>
            </div>

            {/* Lifetime Subtitle */}
            <p className="text-xs sm:text-sm text-brand-navy-light/80 font-semibold mb-3">
              Ou pagamento único no Pix ou Cartão
            </p>

            {/* Underprice social proof banner */}
            <div className="bg-brand-cream/30 border border-brand-navy/5 py-2 px-3 rounded-lg mb-6">
              <p className="text-[10px] sm:text-[11px] font-bold text-brand-gold-dark uppercase tracking-wider">
                ⚡ +3.200 advogados já transformaram sua rotina
              </p>
            </div>

            {/* Feature Bullet Points with checkmarks */}
            <div className="space-y-3.5 text-left text-xs sm:text-sm text-brand-navy-light/90 border-t border-brand-navy/5 pt-6 mb-8">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium"><strong>+1.200 Petições prontas</strong> para advocacia Trabalhista e Previdenciária</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">Atualizações periódicas e <strong>acesso vitalício</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">Garantia incondicional de <strong>7 dias</strong> incluída</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">Arquivos em formato Word <strong>100% editáveis</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">Organização em pastas temáticas no <strong>Google Drive</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">Área de membros organizada por categorias</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">Todos os <strong>bônus exclusivos</strong> inclusos gratuitamente</span>
              </div>
            </div>

            {/* Small action reminder text */}
            <p className="text-[11px] text-brand-navy-light/70 font-semibold mb-4 animate-pulse">
              Clique no botão abaixo e garanta já o seu! 📲
            </p>

            {/* Pulsing CTA Checkout Button */}
            <motion.a
              href="https://pay.hotmart.com/S106004277V?bid=1783622037077"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: ["0px 4px 10px rgba(10, 25, 47, 0.15)", "0px 4px 20px rgba(10, 25, 47, 0.35)", "0px 4px 10px rgba(10, 25, 47, 0.15)"] 
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2 select-none cursor-pointer"
            >
              <span>SIM, QUERO O PAGAMENTO ÚNICO</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

          </div>

          {/* DOBRA 5.5: RISK-FREE SATISFACTION GUARANTEE (FRAME GREEN) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[440px] mt-8 p-6 rounded-3xl border-2 border-[#22c55e] bg-emerald-50/20 text-center flex flex-col items-center"
          >
            {/* Custom Golden circular 7-day badge icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1.5 shadow-lg flex items-center justify-center mb-4">
              <div className="w-full h-full rounded-full bg-[#0a192f] flex flex-col items-center justify-center border border-amber-300">
                <span className="text-amber-400 text-lg sm:text-xl font-black leading-none">7</span>
                <span className="text-amber-400 text-[8px] font-black uppercase leading-tight tracking-widest">Dias</span>
                <span className="text-amber-400 text-[6px] font-bold uppercase leading-none tracking-tight">Garantia</span>
              </div>
            </div>

            <h4 className="font-sans text-xs sm:text-sm font-black text-emerald-600 uppercase tracking-widest leading-snug mb-2">
              RISCO ZERO! SUA SATISFAÇÃO OU SEU DINHEIRO DE VOLTA
            </h4>

            <p className="text-xs text-brand-navy-light/95 leading-relaxed font-medium">
              Você tem <strong>7 dias</strong> para testar todo o material. Se por qualquer motivo não gostar do conteúdo, nós devolvemos <strong>100% do seu dinheiro</strong> de volta. Sem burocracias ou perguntas.
            </p>
          </motion.div>

        </div>
      </section>

      {/* DOBRA 6: PERGUNTAS FREQUENTES (FAQ) */}
      <section className="relative z-10 py-16 bg-brand-offwhite border-t border-brand-navy/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
          
          {/* Centered Heading */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1e1b4b] tracking-tight uppercase">
              Perguntas Frequentes
            </h2>
            <p className="text-xs sm:text-sm text-brand-navy-light/60 font-black uppercase tracking-wider mt-2">
              Ainda com dúvidas? A gente te ajuda!
            </p>
          </div>

          {/* Accordion Questions List */}
          <div className="w-full max-w-2xl space-y-3.5 mb-12">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-brand-navy/10 shadow-sm hover:shadow transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className="font-sans text-sm sm:text-base font-extrabold text-brand-navy pr-4">
                      {item.question}
                    </span>
                    <span className={`text-lg sm:text-xl font-bold transition-transform duration-300 select-none shrink-0 ${isOpen ? 'rotate-45 text-brand-gold-dark' : 'text-[#8b5cf6]'}`}>
                      +
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-brand-navy/5 text-xs sm:text-sm text-brand-navy-light/80 font-medium leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Big CTA Purple-style Centered Button */}
          <motion.a
            href="https://pay.hotmart.com/S106004277V?bid=1783622037077"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-2xl bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-4 px-6 sm:py-5 sm:px-10 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center justify-center text-center leading-snug cursor-pointer select-none"
          >
            <span>SIM, QUERO MEU KIT DE PETIÇÕES TRABALHISTAS E PREVIDENCIÁRIAS!</span>
          </motion.a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-brand-offwhite border-t border-brand-navy/5 py-10 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-[10px] sm:text-xs text-brand-navy-light/40 font-bold uppercase tracking-wider">
            © 2026 JurisKit. Todos os direitos reservados.
          </p>
          <p className="text-[9px] text-brand-navy-light/30 max-w-2xl mx-auto leading-relaxed font-medium">
            Este produto não possui vínculo de filiação com o Google Inc., Meta Platforms Inc. ou qualquer órgão oficial da Justiça do Trabalho e da Previdência Social brasileira. Todo o suporte técnico e conteúdo fornecido no material são de inteira responsabilidade de seus produtores.
          </p>
        </div>
      </footer>

    </div>
  );
}
