import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '../src/modules/shared/components/SearchBar/SearchBar';

describe('SearchBar Component', () => {
  
  /**
   * Test 1: Verifica que el componente se renderiza correctamente
   */
  it('should render the search input with placeholder', () => {
    render(<SearchBar />);
    
    // Busca el input por su placeholder
    const input = screen.getByPlaceholderText('Buscar aeropuertos...') as HTMLInputElement;
    
    // Verifica que está en el documento
    expect(input).toBeInTheDocument();
  });

  /**
   * Test 2: Verifica que el input inicia vacío cuando no hay valor inicial
   */
  it('should start with empty value when no initial value is provided', () => {
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText('Buscar aeropuertos...') as HTMLInputElement;
    
    // Verifica que el valor es una cadena vacía
    expect(input.value).toBe('');
  });

  /**
   * Test 3: Verifica que el input muestra el valor inicial proporcionado
   */
  it('should display initial value when provided', () => {
    const initialValue = 'BAQ';
    render(<SearchBar value={initialValue} />);
    
    const input = screen.getByPlaceholderText('Buscar aeropuertos...') as HTMLInputElement;
    
    // Verifica que muestra el valor inicial
    expect(input.value).toBe(initialValue);
  });

  /**
   * Test 4: Verifica que el input se actualiza cuando el usuario escribe
   */
  it('should update input value when user types', async () => {
    // Configura userEvent para simular interacciones de usuario
    const user = userEvent.setup();
    
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText('Buscar aeropuertos...') as HTMLInputElement;
    
    // Simula que el usuario escribe "SAN"
    await user.type(input, 'SAN');
    
    // Verifica que el valor del input se actualizó
    expect(input.value).toBe('SAN');
  });

  /**
   * Test 5: Verifica que onChange se llama cuando el usuario escribe
   */
  it('should call onChange callback when user types', async () => {
    const user = userEvent.setup();
    
    // Mock de la función onChange
    const handleChange = jest.fn();
    
    render(<SearchBar onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText('Buscar aeropuertos...');
    
    // Escribe "C" en el input
    await user.type(input, 'C');
    
    // Verifica que onChange fue llamado con "C"
    expect(handleChange).toHaveBeenCalledWith('C');
  });

  /**
   * Test 6: Verifica que onChange se llama múltiples veces al escribir múltiples caracteres
   */
  it('should call onChange for each character typed', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<SearchBar onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText('Buscar aeropuertos...');
    
    // Escribe "BAQ"
    await user.type(input, 'BAQ');
    
    // onChange debería llamarse 3 veces (una por cada letra)
    expect(handleChange).toHaveBeenCalledTimes(4);
    
    // Verifica las llamadas individuales
    expect(handleChange).toHaveBeenNthCalledWith(1, '');
    expect(handleChange).toHaveBeenNthCalledWith(2, 'B');
    expect(handleChange).toHaveBeenNthCalledWith(3, 'BA');
    expect(handleChange).toHaveBeenNthCalledWith(4, 'BAQ');
  });

  /**
   * Test 7: Verifica que el componente NO llama onChange si no se proporciona
   */
  it('should not throw error when onChange is not provided', async () => {
    const user = userEvent.setup();
    
    // No pasamos onChange
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText('Buscar aeropuertos...') as HTMLInputElement;
    
    // Esto no debería causar error
    await user.type(input, 'Test');
    
    expect(input.value).toBe('Test');
  });

  /**
   * Test 8: Verifica que se puede limpiar el input
   */
  it('should allow clearing the input', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<SearchBar value="Initial" onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText('Buscar aeropuertos...') as HTMLInputElement;
    
    // Limpia el input
    await user.clear(input);
    
    // Verifica que el input está vacío
    expect(input.value).toBe('');
    
    // Verifica que onChange fue llamado con cadena vacía
    expect(handleChange).toHaveBeenLastCalledWith('');
  });

  /**
   * Test 9: Verifica las clases CSS aplicadas
   */
  it('should have correct CSS classes', () => {
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText('Buscar aeropuertos...');
    
    // Verifica que tiene las clases correctas
    expect(input).toHaveClass('bg-white');
    expect(input).toHaveClass('rounded-full');
    expect(input).toHaveClass('w-full');
    expect(input).toHaveClass('py-2');
    expect(input).toHaveClass('px-4');
    expect(input).toHaveClass('text-dark-blue');
    expect(input).toHaveClass('text-md');
  });

  /**
   * Test 10: Verifica que el input tiene el tipo correcto
   */
  it('should be of type text', () => {
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText('Buscar aeropuertos...') as HTMLInputElement;
    
    expect(input.type).toBe('text');
  });
});