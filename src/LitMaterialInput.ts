import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export class LitMaterialInput extends LitElement {
  static override styles = css`
    * {
      box-sizing: border-box;
    }
    .form-group {
      position: relative;
      margin: 1rem 0;
    }
    input.outline {
      border: 1px solid #333333;
      border-radius: 5px;
    }
    label {
      position: absolute;
      font-size: 1.2rem;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
      color: gray;
      padding: 0 0.3rem;
      margin: 0 0.5rem;
      transition: 0.1s ease-out;
      transform-origin: left top;
      pointer-events: none;
    }
    .helper {
      font-size: 1.1rem;
      left: 0;
      background-color: #fff;
      color: #d2d2d2;
      padding: 0 0.3rem;
      margin-top: 0.2rem;
      pointer-events: none;
    }
    input {
      font-size: 1.5rem;
      outline: none;
      border: none;
      border-radius: 0px;
      padding: 1rem 0.6rem;
      color: #333333;
      transition: 0.1s ease-out;
      border-bottom: 1px solid #333333;
      background: transparent;
      cursor: text;
      margin-left: auto;
      width: 100%;
      margin-right: auto;
    }
    input:focus {
      border-color: #4285f4;
      /* border-color: #b949d5; */
    }
    input:focus + label {
      color: #4285f4;
      /* color: #b949d5; */
      top: 0;
      transform: translateY(-50%) scale(0.9);
    }
    input:not(:placeholder-shown) + label {
      top: 0;
      transform: translateY(-50%) scale(0.9);
    }
    input:focus:not(.outline) ~ label,
    input:not(:placeholder-shown):not(.outline) ~ label {
      padding-left: 0px;
    }
    input:disabled,
    input:disabled ~ .label {
      opacity: 0.5;
    }
  `;

  @property({ type: String }) type = 'input';

  @property({ type: String }) label = 'Input Material Design';

  @property({ type: String }) helper = 'Here goes a helper value';

  @property({ type: String }) value = '';

  @property({ type: Boolean }) outline = false;

  @property({ type: Boolean }) disabled = false;

  render() {
    return html`
      <div class="form-group">
        <input
          class=${classMap({
            outline: this.outline,
          })}
          @input=${this.inputHandler}
          .type="${this.type}"
          placeholder=""
          .value=${this.value}
          ?disabled="${this.disabled}"
        />
        <label>${this.label}</label>
        <div class="helper">${this.helper}</div>
      </div>
    `;
  }

  inputHandler(event: any) {
    this.dispatchEvent(
      new CustomEvent('val-change', {
        detail: { value: event.composedPath()[0].value },
      })
    );
  }
}
