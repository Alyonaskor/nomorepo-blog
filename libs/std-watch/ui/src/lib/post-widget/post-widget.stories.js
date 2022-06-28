import PostWidget from './post-widget';

export default {
  component: PostWidget,
  title: 'PostWidget',
};

const Template = (args) => <PostWidget {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
