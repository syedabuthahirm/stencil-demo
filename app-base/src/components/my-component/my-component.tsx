import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() buttonClicked: EventEmitter<string>

  private onClick() {
     this.buttonClicked.emit('clicked');
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>
      <h1>Hello, World! I'm {this.getText()}</h1>
      <button onClick={this.onClick.bind(this)}>Click</button>
    </div>;
  }
}
