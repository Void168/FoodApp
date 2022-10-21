export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tên nhà hàng',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Mô tả ngắn',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Hình ảnh',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Vĩ độ',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Kinh độ',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Địa chỉ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'string',
      title: 'Đánh giá từ 1⭐ đến 5⭐',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Bạn phải nhập giá trị từ 1 đến 5'),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Danh mục',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Các món ăn',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    },
  ],
}
