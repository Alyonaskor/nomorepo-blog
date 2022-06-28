import Comments from './comments';

export default {
  component: Comments,
  title: 'Comments',
};

const Template = (args) => <Comments {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
