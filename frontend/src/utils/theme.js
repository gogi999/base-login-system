import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#c91841",
            light: "#cccccc",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#0f076e",
            light: "#e7e9ec",
            contrastText: "#ffffff"
        },
        black: "#000000",
        white: "#ffffff",
    }
});

export default theme;