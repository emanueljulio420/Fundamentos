import React from "react";
import ReactDOM from "react-dom";
import App from './App';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file


// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);



ReactDOM.render( <App />,document.getElementById("root"));