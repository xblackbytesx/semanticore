import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import semanticoreLogo from '/semanticore.svg'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('sc-hero')
export class ScHero extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the logo to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div>
        <a href="https://github.com/xblackbytesx/semanticore" target="_blank">
          <img src=${semanticoreLogo} class="logo" alt="Semanticore logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <sc-button primary @click=${this._onClick} part="button">
          count is ${this.count}
        </sc-button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 20em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-hero': ScHero
  }
}
