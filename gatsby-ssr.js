const React = require("react");

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
          (() => {    
            window.__onThemeChange = function() {};
            window.__onLangChange = function() {};

            function setTheme(newTheme) {                  
              window.__theme = newTheme;                  
              preferredTheme = newTheme;                  
              document.body.className = newTheme;                 
              window.__onThemeChange(newTheme);                
            }

            function setLang(newLang) {                  
              window.__lang = newLang;                  
              preferredLang = newLang;                  
              document.body.setAttribute('language', newLang);                 
              window.__onLangChange(newLang);                
            }

            let preferredTheme
            try {
              preferredTheme = localStorage.getItem('theme')
            } catch (err) {}

            let preferredLang
            try {
              preferredLang = localStorage.getItem('language')
            } catch (err) {}

            window.__setPreferredTheme = newTheme => {
              setTheme(newTheme)
              try {
                localStorage.setItem('theme', newTheme)
              } catch (err) {}
            }

            window.__setPreferredLang = newLang => {
              setLang(newLang)
              try {
                localStorage.setItem('language', newLang)
              } catch (err) {}
            }

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
            darkQuery.addListener(e => {
              window.__setPreferredTheme(e.matches ? 'light' : 'dark')
            })

            setTheme(preferredTheme || (darkQuery.matches ? 'light' : 'dark'))
            setLang(preferredLang || 'en')
          })()
        `,
      },
    }),
  ]);
};
