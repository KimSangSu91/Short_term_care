import { motion } from 'framer-motion';
import { ArrowRight, Building2, Clock, PiggyBank, CalendarCheck } from 'lucide-react';

export default function Benefits({ onOpenModal }) {
  const benefits = [
    {
      title: '재정적 자립과 경쟁력 확보',
      description: '단순 예산이나 기부에 의존하지 않고, 자체적인 돌봄 서비스를 제공하여 실질적인 운영 수익 모델을 구축할 수 있습니다.',
      icon: PiggyBank,
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    },
    {
      title: '24/7 매칭 완벽 자동화',
      description: '그동안 평일 근무 외 시간에 어려웠던 돌봄 연계를 스마트 시스템 도입으로 행정 부담 없이 투명하게 관리하게 됩니다.',
      icon: Clock,
      color: 'text-indigo-600',
      bg: 'bg-indigo-100'
    },
    {
      title: '지역사회 내 선순환 구조 구축',
      description: '지역 내 유휴인력인 경력단절 여성, 은퇴 중 장년층 등을 돌봄 전문가로 양성, 돌봄 이외에도 일자리 창출과 지역 경제에도 기여할 수 있습니다.',
      icon: Building2,
      color: 'text-amber-600',
      bg: 'bg-amber-100'
    }
  ];

  return (
    <section id="benefits" className="py-24 sm:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            복지관의 <span className="text-emerald-700">압도적인 경쟁력</span>을 만듭니다
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            단순 수급 중심에서 벗어나 능동적인 혁신 거점으로,
            <br className="hidden sm:block" />잠깐돌봄 도입 시 즉각적으로 나타나는 강력한 변화를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-16 h-16 rounded-2xl ${benefit.bg} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-emerald-700 transition-colors duration-500">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-10 font-medium text-[15px]">
                {benefit.description}
              </p>
              
            </motion.div>
          ))}
        </div>

        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#065f46] via-[#064e3b] to-[#022c22] p-10 sm:p-14 w-full shadow-[0_15px_40px_rgba(6,95,70,0.2)] text-center flex flex-col items-center border border-emerald-400/20"
          >
            {/* Dynamic Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-400 rounded-full mix-blend-soft-light filter blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600 rounded-full mix-blend-soft-light filter blur-[100px] opacity-20 -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-[1.5rem] backdrop-blur-md mb-8 border border-white/10 shadow-2xl">
                <CalendarCheck className="w-10 h-10 text-emerald-300" />
              </div>
              <h4 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                실제 도입 사례를 기반으로 한<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-emerald-400">맞춤형 컨설팅</span>
              </h4>
              <p className="text-emerald-100/70 text-lg mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
                현재 기관의 상황을 정밀 분석하여, 잠깐돌봄 시스템이 최적화된 성과를 낼 수 있도록 <span className="text-white font-bold">진단해드립니다.</span>
              </p>
              
              <button 
                onClick={onOpenModal}
                className="inline-flex justify-center items-center px-10 py-5 text-xl font-black text-emerald-950 bg-white hover:bg-emerald-50 rounded-[1.5rem] shadow-[0_20px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.4)] transition-all hover:scale-105 active:scale-95 group"
              >
                도입 문의하기
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Partners Section */}
        <div className="mt-48">
          <div className="text-center mb-16">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900"
            >
              이미 많은 곳이 <span className="text-emerald-600">함께하고 있습니다</span>
            </motion.h4>
            <p className="mt-4 text-gray-500 font-medium">서비스의 가치를 인정받아 신뢰받는 파트너십을 구축하고 있습니다.</p>
          </div>
          
          <div className="relative w-full overflow-hidden py-10">
            {/* Gradient masks for smooth marquee edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-12 animate-marquee w-max whitespace-nowrap opacity-40 hover:opacity-80 transition-opacity duration-700 grayscale hover:grayscale-0">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-12 items-center">
                  {[1, 2, 3, 4, 5, 6].map((partner) => (
                    <div key={partner} className="flex items-center gap-3 px-8 py-4 bg-gray-50/50 rounded-2xl border border-gray-100/50 min-w-[200px] justify-center">
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center font-black text-gray-300 text-xs italic">LOGO</div>
                      <span className="text-lg font-black text-gray-400 tracking-tighter">PARTNER {partner}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
