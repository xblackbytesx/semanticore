import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@/themes/semanticore/theme.css';
import '../sc-image/ScImage';

@customElement('sc-card')
export class ScCard extends LitElement {
  @property({ type: String }) template: 'plain' | 'thumb' | 'feature' = 'thumb';
  @property({ type: String }) imageSrc: string | undefined = undefined;
  @property({ type: String }) cardTitle: string | undefined = undefined;
  @property({ type: String }) cardBody: string | undefined = undefined;

  render() {
    return html`
      <div class=${['sc-card', `sc-card--${this.template}`].join(' ')}>
        ${this.imageSrc
          ? html`
              <figure class="sc-card__figure">
                <sc-image .imageSrc=${this.imageSrc}></sc-image>
              </figure>
            `
          : ''}
        <span class="sc-card__content">
          <h2 class="sc-card__title">${this.cardTitle}</h2>
          <p class="sc-card__body">${this.cardBody}</p>
        </span>
      </div>
    `;
  }

  static styles = css`
    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }
  
    .sc-card {
      display: flex;
      border: 1px solid #333;
      border-radius: 8px;
      overflow: hidden;
    }

    .sc-card--feature {
      flex-flow: column wrap;
    }

    .sc-card--feature .sc-card__figure {
      width: 100%;
      aspect-ratio: 16/9;
    }

    .sc-card__figure {
      display: flex;
      width: 100%;
      margin: 0;
      background-color: #EEE;
      aspect-ratio: 1/1;
      flex: 1 0 20%;
    }

    ::slotted(.sc-image) {
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }

    .sc-card__content {
      display: flex;
      flex-flow: column nowrap;
      gap: 16px;
      padding: 16px;
      flex: 1 1 auto;
    }

    .sc-card__title {
      margin: 0;
    }

    .sc-card__body {
      margin: 0;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'sc-card': ScCard;
  }
}