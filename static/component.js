import { c, html, css, useProp } from "atomico";

function component() {
  const [value, setValue] = useProp("value");
  return html`<host shadowDom>
    <h1>Atomico webcomponent</h1>
    <button onclick=${() => setValue(value + 1)}>${value} Increment</button>
    <slot />
  </host>`;
}

component.props = {
  value: { type: Number, value: 0 },
};

component.styles = css`
  :host {
    font-size: 18px;
    font-family: monospace;
  }
`;

export const Component = c(component);

customElements.define("my-element", Component);
