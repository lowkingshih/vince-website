import React from 'react';
import Button from '@/components/common/Button';
import HandleBar from '@/components/HandleBar';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

const Dialog = ({ children, buttons, isOpen, onOpen, onClose, name, ...props }) => {
    return (
        <>
            <Modal size="3xl" isOpen={isOpen} onClose={onClose} isCentered {...props}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>
                    <ModalFooter>
                        <HandleBar justifyContent="flex-end" name={name || null} buttons={buttons} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Dialog;
