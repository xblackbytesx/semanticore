// sc-image.ts
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sc-image')
export class ScImage extends LitElement {
  @property({ type: String }) imageSrc: string | undefined = undefined;

  render() {
    return html`
      <img class="sc-image" src=${this.imageSrc} alt="img" />
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-image': ScImage;
  }
}
