export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'imageUrl',
            title: 'Image Path',
            type: 'image',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'discountPercentage',
            title: 'Discount Percentage',
            type: 'number',
        },
        {
            name: 'isFeaturedProduct',
            title: 'Is Featured Product',
            type: 'boolean',
        },
        {
            name: 'stockLevel',
            title: 'Stock Level',
            type: 'number',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
    ],
};
