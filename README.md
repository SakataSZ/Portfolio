# React + Material UI

## npm list
├── @emotion/react@11.9.3   
├── @emotion/styled@11.9.3   
├── @mui/icons-material@5.8.4  
├── @mui/material@5.9.1  
├── @testing-library/jest-dom@5.16.4  
├── @testing-library/react@13.3.0  
├── @testing-library/user-event@13.5.0  
├── react-dom@18.2.0  
├── react-router-dom@6.3.0  
├── react-scripts@5.0.1  
├── react@18.2.0  
└── web-vitals@2.1.4

## Github Pages + react-router-dom
* Add `404.html` in `/docs/`
  * Add the following script to `package.json`  
    ```json:package.json
    "rm": "rm -rf docs",
    "mv": "mv build docs",
    "cp" : "cp 404.html docs",
    "git": "git add . && git commit && git push origin master",
    "deploy": "npm run rm && npm run build && npm run mv && npm run cp && npm run git"
    ```

  * Add the following script after `/public/index.html`
    ```html:/public/index.html
    <script>
    (function () {
      const query = window.location.search;
      if (query.startsWith('?p=')) {
        const route = decodeURIComponent(query.substr(3));
        window.history.replaceState(null, null, route);
      }
    })();
  </script>
  