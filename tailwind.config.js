export default {
    content : [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme : {
        extend :{
            fontFamily: {
                'pinar': ['Pinar', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
            },
            direction: {
                'rtl': 'rtl',
                'ltr': 'ltr',
            }
        }
    },
    plugins : [],
    corePlugins: {
        preflight: false,
    }
}