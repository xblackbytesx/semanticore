import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import '../../themes/semanticore/theme.css';

@customElement('sc-button')
export class ScButton extends LitElement {
  @property({ type: Boolean }) primary = false;
  @property({ type: String }) backgroundColor?: string;
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: String }) label = '';
  @property({ type: Function }) onClick?: () => void;

  static get styles() {
    return css`
      .sc-button {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 700;
        border: 0;
        border-radius: 3em;
        cursor: pointer;
        display: inline-block;
        line-height: 1;
      }

      .sc-button--primary {
        color: white;
        background-color: var(--btn-primary-bg-color);
      }

      .sc-button--secondary {
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      }

      .sc-button--small {
        font-size: 12px;
        padding: 10px 16px;
      }

      .sc-button--medium {
        font-size: 14px;
        padding: 11px 20px;
      }
      
      .sc-button--large {
        font-size: 16px;
        padding: 12px 24px;
      }
    `;
  }

  render() {
    const mode = this.primary ? 'sc-button--primary' : 'sc-button--secondary';

    return html`
      <button
        type="button"
        class=${['sc-button', `sc-button--${this.size}`, mode].join(' ')}
        style=${styleMap({ backgroundColor: this.backgroundColor })}
        @click=${this.onClick}
      ><slot></slot>
        ${this.label}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-button': ScButton;
  }
}