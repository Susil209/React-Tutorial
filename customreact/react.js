function App() {
  return React.createElement("h1", { className: "header" }, "Hello React!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(React.createElement(App));
root.render(<App/>);

