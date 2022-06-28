import Layout from './layout';

export default {
  component: Layout,
  title: 'Layout',
};

const Template = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
