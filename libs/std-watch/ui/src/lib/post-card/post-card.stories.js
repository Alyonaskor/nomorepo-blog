import PostCard from './post-card';

export default {
  component: PostCard,
  title: 'PostCard',
};

const Template = (args) => <PostCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
