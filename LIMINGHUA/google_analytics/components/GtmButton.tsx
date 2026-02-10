'use client';

declare global {
    interface Window {
        dataLayer?: any[];
    }
}
// 이 코드의 목적 : 단지 GTA에게 사용자가 이걸 클릭했어라는 것을 알려주기 위함임
export default function GtmButton() {
    // 트리거
    const handleClick = () => {
        // window.dataLayer <- GTM, GA4에 물어서 데이터를 수집하는 파트
        // push하면 event로 button_click이 날아감 <- 미리 보기에서 이벤트로 나타났던 이름
        window.dataLayer?.push({ event: 'button_click', button_name: 'test_button' });
        // 나중에 Backend로 요청(Request) 하는 목적의 코드 한 줄이 추가 될 수 있음.
        alert('button_click 이벤트 전송 완료!');
    };

    return (
        // className은 꾸미는 것 (tailwindcss)
        // onClick = {트리거}
        // 버튼은 뭣이다?
        // 1. 마케팅,기획 관점 : 사용자의 행위 관측 장치
        // 2. 개발자 관점 : 트리거(클릭 시 백엔드로 데이터를 보내거나, GA4로 데이터를 보냄)
        // handelClick이 버튼 클릭 시 동작할 트리거
        <button
            onClick={handleClick}
            className="flex h-12 w-full items-center justify-center rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700 md:w-[200px]"
        >
            GA4 버튼 (관측 장치)
        </button>
    );
}