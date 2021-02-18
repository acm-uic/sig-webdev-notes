import React from 'react';

export function CustomComponent(props: {name: string}) {
  return <div>This is my custom component { props.name}</div>
}


function App() {
  const name = "Arshad Narmawala"
  let major = "Computer Science"

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <p>I'm a {major} major</p>
      <h2>Start editing to see some magic happen!</h2>
      <a href="https://github.com/acm-uic/sig-webdev-notes">
        Sig Web dev
      </a>

      <CustomComponent name="Arshad"></CustomComponent>
      <CustomComponent name="Clark"></CustomComponent>
    </div>
  );
}

export default App;
