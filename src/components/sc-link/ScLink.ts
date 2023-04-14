import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@/themes/semanticore/theme.css';

@customElement('sc-link')
export class ScLink extends LitElement {
  @property({ type: String }) template: 'plain' | 'thumb' | 'feature' = 'thumb';
  @property({ type: Function }) onClick?: () => void;

  render() {

    return html`
      <a class=${['sc-link', `sc-link--${this.template}`].join(' ')}>
        <slot></slot>
      </a>
    `;
  }

  static styles = css`
    .sc-link {
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 700;
      border: 0;
      border-radius: 3em;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-link': ScLink;
  }
}