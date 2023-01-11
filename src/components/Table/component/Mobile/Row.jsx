import { Center, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

const useLongPress = (handleLongPress) => {
    const [timeoutEvent, setTimeoutEvent] = useState(null); // 事件佇列
    const TIMEOUT_MILLIONS = 500; // 長按秒數

    // 加入 timeout 事件佇列
    const handleTimeoutEvent = () => {
        if (typeof handleLongPress === 'function') {
            setTimeoutEvent(
                setTimeout(() => {
                    handleLongPress(), setTimeoutEvent(null);
                }, TIMEOUT_MILLIONS),
            );
        }
    };

    // 取消佇列
    const handleCancelTimeoutEvent = () => {
        if (timeoutEvent) {
            clearTimeout(timeoutEvent);
            setTimeoutEvent(null);
        }
    };

    return {
        handleTimeoutEvent,
        handleCancelTimeoutEvent,
        timeoutEvent,
    };
};

const Row = ({ leftSide, children, handleRightSide, handleLongPress }) => {
    const { handleTimeoutEvent, handleCancelTimeoutEvent, timeoutEvent } = useLongPress(handleLongPress);

    return (
        // TODO: 整個 card 都需新增一個
        <Flex
            onTouchStart={handleTimeoutEvent}
            onTouchMove={handleCancelTimeoutEvent}
            onTouchEnd={handleCancelTimeoutEvent}
            width="100%"
            rounded="xl"
            bgColor={timeoutEvent ? 'yellow.300' : 'white'}
        >
            {/* 左側選擇性塞入 checkbox，checkbox 邏輯部分暫定寫在 parent */}
            {leftSide && (
                <Center
                    onTouchStart={(event) => event.stopPropagation()}
                    cursor="pointer"
                    bgColor="white"
                    borderLeftRadius="xl"
                    overflow="hidden"
                >
                    {leftSide}
                </Center>
            )}
            <Flex flexWrap="wrap" flexGrow="1" px="1.5" py="2.5">
                {children || (
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit iure reiciendis sapiente,
                        eveniet ipsam iste maiores ut eum hic corrupti rerum minima dolores nostrum dolore non, repellat
                        ea cum?
                    </div>
                )}
            </Flex>
            {/* 右側區域顯示箭頭 */}
            {handleRightSide && (
                <Center
                    onClick={(event) => {
                        event.stopPropagation();
                        handleRightSide(event);
                    }}
                    onTouchStart={(event) => event.stopPropagation()}
                    cursor="pointer"
                    bgColor="gray.300"
                    borderRightRadius="xl"
                    px="2"
                >
                    <Icon as={BiChevronRight} boxSize="24px" color="blue.500" />
                </Center>
            )}
        </Flex>
    );
};

export default Row;
