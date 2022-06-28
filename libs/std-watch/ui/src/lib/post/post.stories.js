import Post from './post';

export default {
  component: Post,
  title: 'Post',
};

const Template = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
