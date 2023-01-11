// 驗證碼
import { VStack, HStack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useRef } from 'react';

//----- 產生min到max之間的亂數
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//--隨機生成RGB顏色
function randomRgbColor(xV) {
    var r = Math.floor(Math.random() * xV); //隨機生成256以內r值
    var g = Math.floor(Math.random() * xV); //隨機生成256以內g值
    var b = Math.floor(Math.random() * xV); //隨機生成256以內b值
    return 'rgb(' + r + ',' + g + ',' + b + ')'; //返回rgb(r,g,b)格式顏色
}

function draw_Captcha(canvasRef, width = 110, height = 38) {
    const gRandom = getRandom(10000, 99999);

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    context.strokeRect(0, 0, canvas.width, canvas.height);
    console.log('gRandom = ', gRandom);

    //---驗證數字
    for (var i = 0; i < gRandom.toString().length; i++) {
        const x = 5 + i * 20;
        const y = 26;

        const deg = (Math.random() * 38 * Math.PI) / 160; //隨機弧度
        const txt = gRandom.toString()[i];
        //console.log('txt = ',txt);
        context.fillStyle = randomRgbColor(100);
        context.font = 'bold 25px Arial';
        //修改座標原點和旋轉角度
        context.translate(x, y);
        context.rotate(deg);
        context.fillText(txt, 0, 0);
        //恢復座標原點和旋轉角度
        context.rotate(-deg);
        context.translate(-x, -y);
    }

    //---干擾線
    for (var i = 0; i < 6; i++) {
        context.strokeStyle = randomRgbColor(256);
        context.beginPath();
        context.moveTo(Math.random() * 120, Math.random() * 40);
        context.lineTo(Math.random() * 120, Math.random() * 40);
        context.stroke();
    }
    //---干擾點
    for (var i = 0; i < 50; i++) {
        context.fillStyle = randomRgbColor(256);
        context.beginPath();
        context.arc(Math.random() * 120, Math.random() * 40, 1, 0, 2 * Math.PI);
        context.fill();
    }

    return gRandom;
}

const Canvas = styled.canvas`
    &:hover {
        cursor: pointer;
    }
`;

// captchaFn 取得 captchaFn
const Captcha = ({ width, height, captchaFn }) => {
    const canvasRef = useRef();

    const updateCaptcha = () => {
        const captchaValue = draw_Captcha(canvasRef, width, height);
        captchaFn(captchaValue);
    };

    useEffect(() => {
        updateCaptcha();
    }, []);

    return (
        <>
            <HStack>
                <Canvas ref={canvasRef}></Canvas>
                <Text
                    flexShrink="0"
                    onClick={() => {
                        updateCaptcha();
                    }}
                    fontSize="lg"
                    color="gray.500"
                    cursor="pointer"
                >
                    更新驗證碼
                </Text>
            </HStack>
        </>
    );
};

export default Captcha;
