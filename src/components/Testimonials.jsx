import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "잠깐돌봄 도입 전에는 하루 3시간씩 고정된 일정에 맞추느라, 정작 짧게 도움이 필요한 분들의 사각지대를 해소하기 어려웠습니다. 이번 도입을 통해 꼭 필요한 시간에 30분, 1시간 단위로 유연하게 파견할 수 있게 되어 기관 운영의 효율성이 획기적으로 개선되었습니다.",
      author: "이장호",
      role: "관장",
      organization: "부산북구장애인종합복지관",
      image: "/avatar_lee.png"
    },
    {
      id: 2,
      content: "돌보미 선생님들의 일정 관리와 매칭 업무가 수작업이라 한계가 있었는데, 잠깐돌봄 시스템 덕분에 1시간 내 매칭률이 94%를 넘겼습니다. 돌보미와 대상자 분들 모두 만족도가 아주 높으며, 실무자 입장에서는 정산과 모니터링이 자동화되어 업무 부담이 크게 줄었습니다.",
      author: "윤은수",
      role: "팀장",
      organization: "부산북구장애인종합복지관",
      image: "/avatar_yoon.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-emerald-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            가장 먼저 도입한 <span className="text-emerald-700">현장의 생생한 후기</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            실제 서비스가 운영되고 있는 부산북구장애인종합복지관의 생생한 도입 사례를 들어보세요.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-20">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-lg text-emerald-700 hover:bg-emerald-50 transition-colors border border-emerald-100"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 z-20">
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white shadow-lg text-emerald-700 hover:bg-emerald-50 transition-colors border border-emerald-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slider Content */}
          <div className="overflow-visible px-4">
            <motion.div 
              className="flex -mx-4"
              animate={{ x: `-${currentIndex * (100 / (testimonials.length > 2 ? 2 : testimonials.length))}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full md:w-1/2 flex-shrink-0 px-4">
                  <motion.div
                    className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-emerald-900/5 h-full border border-white"
                  >
                    <div className="absolute top-6 left-6 text-emerald-100 opacity-50">
                      <Quote size={48} className="rotate-180" />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <p className="text-lg text-gray-700 leading-relaxed mb-8 pt-6 font-medium">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-14 h-14 rounded-full object-cover border-4 border-emerald-50 shadow-sm"
                        />
                        <div>
                          <div className="text-base font-bold text-gray-900 leading-tight">
                            {testimonial.author} <span className="text-xs font-bold text-emerald-600 ml-2 px-1.5 py-0.5 bg-emerald-50 rounded-md whitespace-nowrap">{testimonial.role}</span>
                          </div>
                          <div className="text-xs text-gray-500 font-medium mt-1">
                            {testimonial.organization}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-8 bg-emerald-600' : 'w-2 bg-emerald-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
