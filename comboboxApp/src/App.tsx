import './App.scss'
import CustomForm from './components/form/CustomForm'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomForm />
    </QueryClientProvider>
  )
}

export default App
