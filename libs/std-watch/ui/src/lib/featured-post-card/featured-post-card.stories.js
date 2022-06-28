import FeaturedPostCard from './featured-post-card';

export default {
  component: FeaturedPostCard,
  title: 'FeaturedPostCard',
};

const Template = (args) => <FeaturedPostCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
