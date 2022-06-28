import CommentsForm from './comments-form';

export default {
  component: CommentsForm,
  title: 'CommentsForm',
};

const Template = (args) => <CommentsForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
