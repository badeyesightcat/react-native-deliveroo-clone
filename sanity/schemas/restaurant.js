export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'lat',
      title: 'latitude of the restaurant',
      type: 'number',
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter the rating score from 1 to 5',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      // validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
