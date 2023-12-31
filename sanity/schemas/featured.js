export default {
  name: 'featured',
  type: 'document',
  title: 'Featured menu categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      // validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
}
