import AdjacentPostCard from './adjacent-post-card';

export default {
  component: AdjacentPostCard,
  title: 'AdjacentPostCard',
};

const Template = (args) => <AdjacentPostCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
