import { Facebook, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-800 pb-12 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black text-white mb-6 tracking-tight">잠깐돌봄</h2>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              필요한 순간, 필요한 만큼만.
              <br />복지관 기반의 새로운 맞춤형 돌봄 생태계
            </p>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <p>주식회사 불타는 고구마 | 대표이사 : 최석현</p>
              <p>개인정보관리책임자 : 박창현</p>
              <p>사업자등록번호 : 803-87-02223</p>
              <p>통신판매 : 제 2021-부산수영-0894 호</p>
              <p>직업정보제공사업 신고번호 : 부산동부 제2024-2호</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>대표 전화번호: 1800-9323</li>
              <li>심부름/헬퍼문의: 010-6660-0234</li>
              <li>제휴문의: csh@bgogooma.com</li>
              <li>부산 해운대구 삼어로 207-1 303호</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">이용약관</a></li>
              <li><a href="#" className="text-white font-medium hover:text-emerald-600 transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">위치기반서비스 이용약관</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <div className="text-center md:text-left space-y-2 w-full md:w-3/4">
              <p className="leading-relaxed">
              (주)불타는고구마는 통신판매중개자로서 통신판매의 당사자가 아니며<br/> 
              개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
              </p>
            <p className="mt-4">&copy; {new Date().getFullYear()} (주)불타는고구마 All Rights Reserved.</p>
          </div>
          
          <div className="flex items-center text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 mt-6 md:mt-0">
            Made with <Heart size={12} className="text-red-500 mx-1 fill-current" /> in Busan
          </div>
        </div>
      </div>
    </footer>
  );
}
