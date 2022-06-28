import PostDetail from './post-detail';

export default {
  component: PostDetail,
  title: 'PostDetail',
};

const Template = (args) => <PostDetail {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
