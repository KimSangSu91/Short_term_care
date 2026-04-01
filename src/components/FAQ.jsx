import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "서비스 도입 시 운영에 어려움은 없나요?",
    answer: "'잠깐돌봄'은 파트너사의 원활한 정착을 위해 상세한 서비스 매뉴얼 제공은 물론, 담당자를 위한 별도의 실무 교육을 병행하여 즉시 운영이 가능하도록 지원합니다. 또한, 필요한 경우 돌보미와 이용자(수요자)를 대상으로 한 앱 사용 교육까지 지원하여 초기 도입에 따른 운영 부담을 획기적으로 낮춰드립니다."
  },
  {
    question: "이용 요금 체계는 어떻게 되나요?",
    answer: (
      <div className="space-y-4">
        <p>효율적인 운영을 위해 합리적인 비용 체계를 갖추고 있습니다.</p>
        <div>
          <p className="font-bold text-gray-900 mb-1">시스템 이용료</p>
          <p>인력 및 데이터 관리 시스템은 <span className="text-emerald-600 font-bold">월 30만 원(VAT 별도)</span>으로 이용 가능합니다.</p>
        </div>
        <div>
          <p className="font-bold text-gray-900 mb-1">돌봄 이용료</p>
          <p>수요자는 1건당 약 1만 원~2만 원 수준의 비용이 발생하며, 이 중 1만 원은 돌보미에게 정산됩니다. 나머지 차액은 복지관의 교육 및 관리 비용으로 귀속됩니다.</p>
        </div>
        <p className="text-sm text-gray-500 italic">참고 사항: 바우처 사업으로 지정될 경우, 지자체별 자기부담 비율에 따라 수요자의 실제 결제 금액은 변동될 수 있습니다.</p>
      </div>
    )
  },
  {
    question: "바우처 지정은 어떤 절차로 진행되나요?",
    answer: "일반적인 절차는 [지자체 바우처 제안 → 승인 → 복지관의 운영기관 신청 및 등록] 순으로 진행됩니다. '잠깐돌봄'팀은 파트너 기관의 행정적 편의를 위해 지자체 제안 및 신청 과정에서 필요한 서류 작업 및 기술적 검토 과정을 적극적으로 지원해 드립니다."
  },
  {
    question: "돌보미 모집과 교육은 어떻게 이루어지나요?",
    answer: "돌보미 모집은 각 지역 복지관의 홍보 채널을 통해 지속적으로 진행해 주셔야 합니다. 저희는 모집된 인원이 전문성을 갖출 수 있도록 표준 교육 자료를 제공하며, 최초 1회에 한해 돌보미 교육을 직접 지원하여 안정적인 서비스 공급망 구축을 돕습니다. (단, 교육 인원 모집은 기관에서 별도로 진행해 주셔야 합니다.)"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            잠깐돌봄 서비스에 대해 궁금하신 점을 해결해 드립니다.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex-shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
