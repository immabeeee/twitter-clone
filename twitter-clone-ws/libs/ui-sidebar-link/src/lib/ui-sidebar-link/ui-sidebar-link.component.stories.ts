import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiSidebarLinkComponent } from './ui-sidebar-link.component';

export default {
  title: 'UiSidebarLinkComponent',
  component: UiSidebarLinkComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<UiSidebarLinkComponent>;

const Template: Story<UiSidebarLinkComponent> = (args: UiSidebarLinkComponent) => ({
  component: UiSidebarLinkComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}