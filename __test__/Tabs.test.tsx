import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabItem } from '../src/modules/shared/components/Tabs/Tabs';
import { useThemeStore } from '../src/modules/theme/store/theme.store';

// Mock del store de Zustand
jest.mock('../src/modules/theme/store/theme.store', () => ({
  useThemeStore: jest.fn(),
}));

describe('Tabs Component', () => {
  // Mock items de prueba
  const mockItems: TabItem[] = [
    {
      value: 'general',
      label: 'Información general',
      component: <div>General Content</div>,
    },
    {
      value: 'location',
      label: 'Ubicación',
      component: <div>Location Content</div>,
    },
    {
      value: 'statistics',
      label: 'Estadísticas',
      component: <div>Statistics Content</div>,
      isDisabled: true, // Esta pestaña está deshabilitada
    },
  ];

  // Mock de la función onChange
  const mockOnChange = jest.fn();

  // Configuración antes de cada test
  beforeEach(() => {
    // Limpia todos los mocks antes de cada test
    jest.clearAllMocks();
    
    // Por defecto, el theme es "dark"
    (useThemeStore as unknown as jest.Mock).mockReturnValue('dark');
  });

  /**
   * Test 1: Verifica que el componente se renderiza correctamente
   */
  it('should render all tab buttons', () => {
    render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    // Verifica que todos los botones de pestañas estén presentes
    expect(screen.getByText('Información general')).toBeInTheDocument();
    expect(screen.getByText('Ubicación')).toBeInTheDocument();
    expect(screen.getByText('Estadísticas')).toBeInTheDocument();
  });

  /**
   * Test 2: Verifica que se muestra el contenido de la pestaña seleccionada
   */
  it('should display the content of the selected tab', () => {
    render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    // Verifica que el contenido de la pestaña "general" está visible
    expect(screen.getByText('General Content')).toBeInTheDocument();
    
    // Verifica que el contenido de otras pestañas NO está visible
    expect(screen.queryByText('Location Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Statistics Content')).not.toBeInTheDocument();
  });

  /**
   * Test 3: Verifica que cambia el contenido al cambiar de pestaña
   */
  it('should display different content when selectedTabValue changes', () => {
    const { rerender } = render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    // Inicialmente muestra el contenido de "general"
    expect(screen.getByText('General Content')).toBeInTheDocument();

    // Re-renderiza con una pestaña diferente seleccionada
    rerender(
      <Tabs
        items={mockItems}
        selectedTabValue="location"
        onChange={mockOnChange}
      />
    );

    // Ahora debe mostrar el contenido de "location"
    expect(screen.getByText('Location Content')).toBeInTheDocument();
    expect(screen.queryByText('General Content')).not.toBeInTheDocument();
  });

  /**
   * Test 4: Verifica que se llama onChange al hacer clic en una pestaña
   */
  it('should call onChange when clicking on a tab button', async () => {
    const user = userEvent.setup();

    render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    // Hace clic en la pestaña "Ubicación"
    const profileButton = screen.getByText('Ubicación');
    await user.click(profileButton);

    // Verifica que onChange fue llamado con el valor correcto
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('location');
  });

  /**
   * Test 5: Verifica que NO se puede hacer clic en pestañas deshabilitadas
   */
  it('should not call onChange when clicking on a disabled tab', async () => {
    const user = userEvent.setup();

    render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    // Intenta hacer clic en la pestaña deshabilitada "Estadísticas"
    const disabledButton = screen.getByText('Estadísticas');
    await user.click(disabledButton);

    // Verifica que onChange NO fue llamado
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  /**
   * Test 6: Verifica que la pestaña seleccionada tiene estilos especiales
   */
  it('should apply selected styles to the active tab', () => {
    render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    const generalButton = screen.getByText('Información general');
    const profileButton = screen.getByText('Ubicación');

    // La pestaña seleccionada debe tener las clases de "selected"
    expect(generalButton).toHaveClass('bg-dark-blue', 'text-white');
    
    // La pestaña no seleccionada NO debe tener esas clases
    expect(profileButton).not.toHaveClass('bg-dark-blue');
  });

  /**
   * Test 7: Verifica que la pestaña deshabilitada tiene el cursor correcto
   */
  it('should show disabled cursor on disabled tab', () => {
    render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    const disabledButton = screen.getByText('Estadísticas');

    // La pestaña deshabilitada debe tener cursor-not-allowed
    expect(disabledButton).toHaveClass('cursor-not-allowed');
  });

  /**
   * Test 8: Verifica los estilos con tema DARK
   */
  it('should apply dark theme styles when theme is dark', () => {
    // Configura el mock para retornar "dark"
    (useThemeStore as unknown as jest.Mock).mockReturnValue('dark');

    render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    // Busca el contenedor de las pestañas
    const tabContainer = screen.getByText('Información general').parentElement;

    // Verifica que tiene los estilos de tema oscuro
    expect(tabContainer).toHaveClass('bg-slate-700');
  });

  /**
   * Test 9: Verifica los estilos con tema LIGHT
   */
  it('should apply light theme styles when theme is light', () => {
    // Configura el mock para retornar "light"
    (useThemeStore as unknown as jest.Mock).mockReturnValue('light');

    render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    // Busca el contenedor de las pestañas
    const tabContainer = screen.getByText('Información general').parentElement;

    // Verifica que tiene los estilos de tema claro
    expect(tabContainer).toHaveClass('bg-slate-300');
  });


  /**
   * Test 10: Verifica que funciona con un solo item
   */
  it('should work with a single tab item', () => {
    const singleItem: TabItem[] = [
      {
        value: 'only',
        label: 'Única',
        component: <div>Only Content</div>,
      },
    ];

    render(
      <Tabs
        items={singleItem}
        selectedTabValue="only"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText('Única')).toBeInTheDocument();
    expect(screen.getByText('Only Content')).toBeInTheDocument();
  });

  /**
   * Test 11: Verifica que renderiza correctamente cuando no hay ninguna pestaña seleccionada válida
   */
  it('should not render any content when selectedTabValue does not match any item', () => {
    render(
      <Tabs
        items={mockItems}
        selectedTabValue="nonexistent"
        onChange={mockOnChange}
      />
    );

    // No debe mostrar ningún contenido
    expect(screen.queryByText('General Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Location Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Statistics Content')).not.toBeInTheDocument();
  });

  /**
   * Test 12: Verifica múltiples clics en diferentes pestañas
   */
  it('should handle multiple tab clicks correctly', async () => {
    const user = userEvent.setup();

    render(
      <Tabs
        items={mockItems}
        selectedTabValue="general"
        onChange={mockOnChange}
      />
    );

    // Clic en "Ubicación"
    await user.click(screen.getByText('Ubicación'));
    expect(mockOnChange).toHaveBeenNthCalledWith(1, 'location');

    // Clic en "General"
    await user.click(screen.getByText('Información general'));
    expect(mockOnChange).toHaveBeenNthCalledWith(2, 'general');

    // Clic en "Estadísticas" de nuevo
    await user.click(screen.getByText('Estadísticas'));

    // Total de 2 llamadas
    expect(mockOnChange).toHaveBeenCalledTimes(2);
    // Verifica que la última llamada sigue siendo 'general'
    expect(mockOnChange).toHaveBeenLastCalledWith('general');
  });
});