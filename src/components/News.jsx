import { motion } from 'framer-motion';
import { Award, Target, Users, ThumbsUp } from 'lucide-react';

export default function News() {
  const stats = [
    { id: 1, name: '1시간 내 매칭 성공률', value: '94.4%', icon: Target, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 2, name: '고객 만족도', value: '91%', icon: ThumbsUp, color: 'text-green-600', bg: 'bg-green-100' },
    { id: 3, name: '부산북구바우처 공식 인증', value: '26년 4월 시행 예정', icon: Award, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];

  return (
    <section id="news" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            이미 증명된 <span className="text-emerald-700">성공적인 실증 데이터</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            부산북구 장애인 복지관 실증 검증 완료,
            <br />높은 고객만족도와 최고 수준의 매칭률을 달성했습니다.
          </p>
        </div>

        {/* Stats Grid */}
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <dt className="relative z-10">
                <div className={`rounded-2xl p-4 ${stat.bg} ${stat.color} mb-6 inline-block shadow-inner backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <p className="text-base sm:text-lg font-bold text-gray-500 uppercase tracking-tight mb-1">{stat.name}</p>
              </dt>
              <dd className="relative z-10 mt-2 text-4xl font-extrabold tracking-tighter text-gray-900 group-hover:text-emerald-700 transition-colors duration-500">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
        
      </div>
    </section>
  );
}
