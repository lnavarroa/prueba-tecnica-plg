import { TelefonoPipe } from './telefono.pipe';

describe('TelefonoPipe', () => {
  let pipe: TelefonoPipe;

  beforeEach(() => {
    pipe = new TelefonoPipe();
  });

  it('debería formatear el teléfono correctamente', () => {
    expect(pipe.transform('56912345678')).toBe('+569 1234 5678');
  });

  it('debería devolver vacío si el número es inválido', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform('123')).toBe('123'); // Número incorrecto, lo devuelve sin formato
  });

  it('debería eliminar caracteres no numéricos antes de formatear', () => {
    expect(pipe.transform('+56 9-1234 5678')).toBe('+569 1234 5678');
  });
});
