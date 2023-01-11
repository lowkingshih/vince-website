import { Flex, FormControl, FormLabel } from '@chakra-ui/react';

// formik 最後一層輸出

const field =
    // 建立 formControl， 還有 label, labelColor, isRequired


        ({ label, isRequired, color }) =>
        (WrappedComponent) => {
            const Field = ({ ...props }) => (
                <FormControl isRequired={isRequired} {...props}>
                    <FormLabel color={color || 'blue.400'}>{label}</FormLabel>
                    <Flex>
                        <WrappedComponent />
                    </Flex>
                </FormControl>
            );
            return Field;
        };

export default field;
