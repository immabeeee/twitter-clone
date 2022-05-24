import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiSpinnerComponent } from './ui-spinner.component';

export default {
  title: 'UiSpinnerComponent',
  component: UiSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<UiSpinnerComponent>;

const Template: Story<UiSpinnerComponent> = (args: UiSpinnerComponent) => ({
  component: UiSpinnerComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}