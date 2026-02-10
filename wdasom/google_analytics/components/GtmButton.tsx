'use client';

declare global {
    interface Window {
        dataLayer?: any[];
    }
}

export default function GtmButton() {
    // 트리거 
    const handleClick = () => {
        // window.dataLayer <- GTM, GA4에 붙어서 데이터를 수집하는 파트
        // event로 button 버튼 
        window.dataLayer?.push({ event: 'button_click', button_name: 'test_button' });
        alert('button_click 이벤트 전송 완료!');
    };

    return (
        <button
            onClick={handleClick}
            className="flex h-12 w-full items-center justify-center rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700 md:w-[200px]"
        >
            GA4 실습 버튼
        </button>
    );
}