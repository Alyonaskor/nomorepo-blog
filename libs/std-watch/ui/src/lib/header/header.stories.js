import Header from './header';

export default {
  component: Header,
  title: 'Header',
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
