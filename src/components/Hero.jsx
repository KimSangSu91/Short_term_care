import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, CalendarCheck } from 'lucide-react';

export default function Hero({ isModalOpen, setIsModalOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section id="hero" className="relative overflow-hidden bg-emerald-50 pt-32 pb-32 sm:pt-40 sm:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[40rem] h-[40rem] rounded-full bg-emerald-200/50 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] rounded-full bg-emerald-300/30 blur-3xl opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-emerald-700 bg-emerald-100 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse" />
              돌봄 공백을 완벽하게 채웁니다
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
              필요한 순간,<br className="hidden sm:block" />
              <span className="text-emerald-700">필요한 만큼만.</span><br />
              내 곁의 든든한 돌봄
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              1일 3시간의 고정된 장기요양의 한계를 넘어, 최소 30분부터 2시간까지 유연하게. 잠깐돌봄이 새로운 돌봄의 기준을 제시합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-2xl shadow-lg shadow-emerald-700/30 transition-all hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                서비스 소개서 다운로드
              </button>
              
              <a 
                href="https://play.google.com/store/apps/details?id=kr.co.bokji.android&hl=ko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 text-base font-bold text-emerald-700 bg-white border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 rounded-2xl transition-all"
              >
                앱 다운로드
              </a>
            </div>
          </motion.div>

          {/* Image/Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-white opacity-80" />
              <img
                src="/hero-image.png"
                alt="따뜻한 돌봄 서비스"
                className="relative rounded-2xl w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>

       {/* Contact Inquiry Modal */}
       <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="mt-2 mb-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">서비스 도입 문의</h3>
                <p className="text-gray-600 text-sm">정보를 입력해주시면 문의 내용이 메일로 전송됩니다.</p>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target);
                  const body = `기관명: ${fd.get('org')}\n담당자 성함: ${fd.get('name')}\n소속 및 직함: ${fd.get('title')}\n전화번호: ${fd.get('phone')}\n이메일: ${fd.get('email')}\n\n문의 내용:\n${fd.get('content')}`;
                  window.location.href = `mailto:csh@bgogooma.com?subject=${encodeURIComponent('잠깐돌봄 서비스 도입 문의')}&body=${encodeURIComponent(body)}`;
                  setIsModalOpen(false);
                }}
                className="space-y-4 text-left"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">기관명 *</label>
                    <input required name="org" type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="예: 해운대구 복지관" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">담당자 성함 *</label>
                    <input required name="name" type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="홍길동" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">소속 및 직함 *</label>
                    <input required name="title" type="text" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="사회복지팀 / 팀장" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">전화번호 *</label>
                    <input required name="phone" type="tel" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="010-0000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이메일 *</label>
                  <input required name="email" type="email" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="example@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용 *</label>
                  <textarea required name="content" rows="4" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 resize-none" placeholder="문의하실 내용을 자유롭게 적어주세요."></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
                  >
                    문의 메일 작성하기
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
