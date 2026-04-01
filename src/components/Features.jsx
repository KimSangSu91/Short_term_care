import { motion } from 'framer-motion';
import { MonitorPlay, Smartphone, HeartHandshake } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: '복지관용 관리자 SaaS',
      description: '누가, 언제, 얼마나 서비스했는지 한눈에 데이터화. 복잡했던 인력 관리부터 매칭, 정산, 리뷰까지 하나의 대시보드에서 해결합니다.',
      icon: MonitorPlay,
      color: 'bg-blue-500',
      highlights: ['실시간 모니터링', '올인원 인력 관리', '정량적 데이터 분석']
    },
    {
      title: '돌보미 App',
      description: '실시간 알림으로 이웃의 돌봄 요청을 확인하고 원터치로 매칭하여 원하는 시간에 돌봄을 제공하고 수익을 창출할 수 있습니다.',
      icon: Smartphone,
      color: 'bg-green-500',
      highlights: ['실시간 매칭 알림', '유연한 일자리 제공', '투명한 정산 시스템']
    },
    {
      title: '돌봄 수요자 App',
      description: '스마트폰이 어려운 분들을 위한 원클릭 호출 UI 적용. 가족이나 구청 담당자가 보호자로 접속해 원격으로 대리 신청할 수도 있습니다.',
      icon: HeartHandshake,
      color: 'bg-emerald-600',
      highlights: ['원클릭 돌봄 요청', '보호자 대리 신청', '안심 모니터링']
    }
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-gray-50 border-y border-gray-100 overflow-hidden relative">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            지역 돌봄 거점 시설중심의 <span className="text-emerald-700">커뮤니티 기반 돌봄 시스템</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            지역 돌봄 거점 시설인 복지관을 중심으로 지역 주민이 유기적으로 상호작용하며 
            <br className="hidden sm:block" />안전하고 편리한 돌봄 생태계를 만듭니다.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${feature.color} text-white mb-6 shadow-xl shadow-${feature.color.replace('bg-', '')}/30`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center text-gray-700 font-medium">
                      <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side (Mock UI Placeholder) */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl bg-white p-2 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100 lg:h-[400px] flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/50" />
                  
                  {index === 0 ? (
                    // SaaS Dashboard Mock
                    <div className="relative z-10 w-[95%] h-[85%] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden text-[9px] sm:text-[10px] transform group-hover:scale-105 transition-transform duration-500">
                      {/* Top bar */}
                      <div className="flex justify-between items-center p-3 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-1.5 border border-gray-200 rounded text-gray-400 w-32 text-left bg-white">검색</div>
                          <div className="p-1.5 px-3 bg-blue-600 text-white rounded text-center font-bold">Q</div>
                        </div>
                        <div className="px-3 py-1.5 bg-[#c8c8c8] text-white font-medium rounded">+ 요청서 생성</div>
                      </div>
                      {/* Table Header */}
                      <div className="grid grid-cols-12 gap-1 bg-white p-2 border-b border-gray-200 font-bold text-gray-700 text-center items-center">
                        <div className="col-span-3 text-left pl-2 flex items-center">복지관명 <span className="ml-1 text-[8px] text-gray-400">▼</span></div>
                        <div className="col-span-2">이용자</div>
                        <div className="col-span-2 flex items-center justify-center">요청상태 <span className="ml-1 text-[8px] text-gray-400">▼</span></div>
                        <div className="col-span-2 text-blue-600">헬퍼</div>
                        <div className="col-span-3 text-left pl-2">제목</div>
                      </div>
                      {/* Rows */}
                      <div className="flex-col flex flex-grow">
                        {[
                          { user: '유차순', status: '배정됨', statusColor: 'text-orange-500 border-orange-200 text-[8px]', helper: '임정아', title: '방 청소' },
                          { user: '차재세', status: '배정됨', statusColor: 'text-orange-500 border-orange-200 text-[8px]', helper: '윤선아', title: '서랍정리, 청소' },
                          { user: '전금숙', status: '매칭전 취소', statusColor: 'text-red-500 border-red-200 text-[7px]', helper: '미배정', title: '청소하기' },
                          { user: '석효숙', status: '완료', statusColor: 'text-green-500 border-green-200 text-[8px]', helper: '김정희', title: '계란말이 애호박...' },
                        ].map((row, i) => (
                          <div key={i} className="grid grid-cols-12 gap-1 p-2 border-b border-gray-50 items-center text-center bg-white hover:bg-gray-50/50">
                            <div className="col-span-3 text-left pl-2 truncate text-gray-800 font-medium">북구장애인종합복지관</div>
                            <div className="col-span-2 truncate text-gray-600">{row.user}</div>
                            <div className="col-span-2 flex justify-center">
                              <span className={`px-1.5 py-0.5 rounded border font-bold bg-white ${row.statusColor}`}>{row.status}</span>
                            </div>
                            <div className="col-span-2 flex justify-center">
                              <span className={`px-1.5 py-0.5 rounded border border-blue-200 text-blue-500 bg-white text-[8px] font-bold ${row.helper === '미배정' ? 'text-red-400 border-red-200' : ''}`}>{row.helper}</span>
                            </div>
                            <div className="col-span-3 text-left pl-2 truncate text-gray-600 text-[9px]">{row.title}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : index === 1 ? (
                    // Helper App Mock (Card-Centric, Matching SaaS Size)
                    <div className="relative z-10 w-[95%] h-[85%] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                      {/* Decorative Background */}
                      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      
                      <div className="relative z-10 flex flex-col p-5 gap-4 h-full justify-center">
                        {/* Title inside the mock */}
                        <div className="flex justify-between items-center px-1 mb-1">
                           <div className="text-gray-400 font-bold text-[11px] tracking-widest uppercase">실시간 돌봄 요청 현황</div>
                           <div className="flex items-center gap-1.5">
                             <span className="text-[10px] text-emerald-600 font-bold">LIVE</span>
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                           </div>
                        </div>

                        {/* Card 1: Reservation */}
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex justify-between items-center group/card"
                        >
                           <div className="flex flex-col gap-3">
                             <div className="flex items-center gap-3">
                               <div className="px-3 py-1 rounded-md border border-emerald-200 text-emerald-600 text-[11px] font-bold bg-emerald-50/50 group-hover/card:bg-emerald-100 transition-colors">예약</div>
                               <div className="text-[11px] text-gray-400 font-semibold tracking-tight">2025. 12. 02</div>
                             </div>
                             <div className="text-[34px] font-black text-gray-900 tracking-tighter leading-none">10,000원</div>
                             <div className="text-xl text-gray-800 font-black">병원 동행 부탁드려요</div>
                           </div>
                           <button className="px-5 py-3 bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all transform active:scale-95 whitespace-nowrap">
                             요청 승낙
                           </button>
                        </motion.div>

                        {/* Card 2: Immediate */}
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex justify-between items-center group/card"
                        >
                           <div className="flex flex-col gap-3">
                             <div className="flex items-center gap-3">
                               <div className="px-3 py-1 rounded-md border border-rose-200 text-rose-500 text-[11px] font-bold bg-rose-50/50 group-hover/card:bg-rose-100 transition-colors">즉시</div>
                               <div className="text-[11px] text-gray-400 font-semibold tracking-tight">2025. 12. 02</div>
                             </div>
                             <div className="text-[34px] font-black text-gray-900 tracking-tighter leading-none">10,000원</div>
                             <div className="text-xl text-gray-800 font-black">가사지원 해주세요.</div>
                           </div>
                           <button className="px-5 py-3 bg-emerald-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all transform active:scale-95 whitespace-nowrap">
                             요청 승낙
                           </button>
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    // User App Mock (Category Selection UI - Based on new image)
                    <div className="relative z-10 w-[95%] h-[85%] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                      {/* Decorative Background */}
                      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
                      
                      <div className="relative z-10 flex flex-col p-6 h-full">
                        {/* Title inside the mock */}
                        <div className="mb-6">
                           <div className="text-gray-400 font-bold text-[11px] tracking-widest uppercase mb-1">돌봄 서비스 선택</div>
                           <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                        </div>

                        {/* Category Grid */}
                        <div className="grid grid-cols-2 gap-4 flex-grow">
                          {[
                            { title: '가사', desc: '청소, 설거지,\n식사준비, 쓰레기배출', icon: '🧹', color: 'bg-orange-50' },
                            { title: '구매대행', desc: '생필품, 식료품,\n일반의약품', icon: '🍝', color: 'bg-red-50' },
                            { title: '이동지원', desc: '병원,\n지역사회시설', icon: '🏥', color: 'bg-blue-50' },
                            { title: '생활편의', desc: '대형가전 처리,\n가구이동', icon: '🪑', color: 'bg-amber-50' },
                          ].map((cat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col justify-between group/cat hover:border-emerald-200 transition-colors"
                            >
                              <div className="flex justify-between items-start">
                                <span className="text-xl font-bold text-gray-900">{cat.title}</span>
                                <span className={`text-2xl p-2 rounded-xl ${cat.color} group-hover/cat:scale-110 transition-transform`}>{cat.icon}</span>
                              </div>
                              <div className="text-[11px] text-gray-500 leading-tight whitespace-pre-line mt-2 font-medium">
                                {cat.desc}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
