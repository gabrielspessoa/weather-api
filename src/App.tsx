import Button from './components/Button';
import WeatherInfo from './components/WeatherInfo';
import Input from './components/Input';
import { Container } from './components/Utils';
import { MagnifyingGlass } from 'phosphor-react';

export default function App() {
  return (
    <>
      <Container centered gap={12} margin='48px 228px'>
        <Input placeholder='Nome da cidade. Ex: Umuarama, PR'></Input>
        <Button>
          Buscar
          <MagnifyingGlass size={18} weight='bold' />
        </Button>
      </Container>
      <Container margin='48px 228px'>
        <WeatherInfo></WeatherInfo>
      </Container>
    </>
  );
}
