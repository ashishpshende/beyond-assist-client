import { useSelector } from 'react-redux';
import { selectThemeMode } from '../redux/themeSlice';

export const lightTheme = {
    mode: 'light',
    colors: {
        background: '#ffffff',
        text: '#000000',
        primary: '#2d75ff',
        brandBackground: '#2d75ff', // Same as primary for light mode
        secondaryText: '#666666',
        card: '#f9f9f9',
        border: '#dddddd',
        inputBackground: '#f9f9f9',
        placeholder: '#cccccc',
        success: '#28a745',
        error: '#dc3545',
    },
};

export const darkTheme = {
    mode: 'dark',
    colors: {
        background: '#121212',
        text: '#ffffff',
        primary: '#4d8aff', // Slightly lighter blue for dark mode
        brandBackground: '#102a43', // Deep navy for dark mode branding background
        secondaryText: '#aaaaaa',
        card: '#1e1e1e',
        border: '#333333',
        inputBackground: '#2c2c2c',
        placeholder: '#888888',
        success: '#28a745',
        error: '#ff6b6b',
    },
};

export const useTheme = () => {
    const mode = useSelector(selectThemeMode);
    return mode === 'light' ? lightTheme : darkTheme;
};
