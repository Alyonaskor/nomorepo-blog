import Author from './author';

export default {
  component: Author,
  title: 'Author',
};

const Template = (args) => <Author {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
