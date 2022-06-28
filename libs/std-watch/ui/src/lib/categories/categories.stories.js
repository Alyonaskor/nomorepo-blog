import Categories from './categories';

export default {
  component: Categories,
  title: 'Categories',
};

const Template = (args) => <Categories {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
