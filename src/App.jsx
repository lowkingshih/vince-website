import router from '@/routers';
import { RouterProvider } from 'react-router-dom';

/* store */
import store from '@/store';
import { Provider } from 'react-redux';

/* react-query */
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

/* style config */
// Chakra
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
// font-family
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

const queryClient = new QueryClient();

function App() {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </ChakraProvider>
        </Provider>
    );
}

export default App;
