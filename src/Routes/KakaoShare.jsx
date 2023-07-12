import { useEffect } from "react";
import ShowResult from "./ShowResult";
const { Kakao } = window;

export default () =>{
	// 배포한 웹 사이트 주소 나중에 넣을 것 
    const realUrl = "https://mm-test-maker.web.app/"
    const resultUrl = "http://localhost:3000/result"

    useEffect(()=>{
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('95b3e189034a38db86ef0291efef7585');
        // 잘 적용되면 true 를 뱉는다.
        console.log(Kakao.isInitialized());
    },[]);

    const shareKakao = () =>{

        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '오늘 심금 테스트',
                description: '아메리카노, 빵, 케익', //자신이 진행한 검사에 대한 설명 조금 const로 적어야 할까?
                imageUrl:
                'public/img/sim1.png',
                link: {
                    mobileWebUrl: realUrl,
                },
            },
            buttons: [
                {
                    title: '너도 해볼래?',
                    link: {
                    mobileWebUrl: realUrl,
                    },
                },
                ],
            });
    }
      
    return(
        <>
        <img
        src="img/Kakao3D.png"
        height="70%"
        onClick={() => {
            shareKakao()
        }}
        >
        </img>
        </>
    )
}