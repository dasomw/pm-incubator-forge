'use client';

declare global {
    interface Window {
        dataLayer?: any[];
    }
}

export default function GtmButton() {
    const handleClick = () => {
        window.dataLayer?.push({ event: 'button_click', button_name: 'test_button' });
        alert('button_click 이벤트 전송 완료!');
    };

    return (
        <button
            onClick={handleClick}
            className="flex h-12 w-full items-center justify-center rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700 md:w-[200px]"
        >
            GA4 실습 (관측 장치)
        </button>
    );
}