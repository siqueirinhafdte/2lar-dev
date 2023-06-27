import { FilterOptions } from 'shared/types/api/filterOptions';

export const sortOptionsDefault = [
  {
    name: 'Mais relevantes',
    value: '',
    direction: ''
  },
  {
    name: 'Nome',
    value: 'name',
    direction: 'asc'
  },
  {
    name: 'Mais caro',
    value: 'price',
    direction: 'asc'
  },
  {
    name: 'Mais barato',
    value: 'price',
    direction: 'desc'
  }
];

export const categoriesCarousel = [
  {
    categoryId: '6275b9d4-0c1c-44d8-824b-c1bb3b3d799c',
    iconPath: '/icons/casas-dark.svg',
    label: 'Casas',
    pathname: '/listings/6275b9d4-0c1c-44d8-824b-c1bb3b3d799c'
  },
  {
    categoryId: '45c32519-a229-46b6-8e7b-48b4d50ab911',
    iconPath: '/icons/mansoes-dark.svg',
    label: 'Mansões',
    pathname: '/listings/45c32519-a229-46b6-8e7b-48b4d50ab911'
  },
  {
    categoryId: 'e037baba-7116-4a65-844c-90dc1e42cdfc',
    iconPath: '/icons/pousada-dark.svg',
    label: 'Pousadas',
    pathname: '/listings/e037baba-7116-4a65-844c-90dc1e42cdfc'
  },
  {
    categoryId: 'd4af2052-c9b6-4e9f-a438-b4d3ea3931c1',
    iconPath: '/icons/office-dark.svg',
    label: 'Home Office',
    pathname: '/listings/d4af2052-c9b6-4e9f-a438-b4d3ea3931c1'
  },
  {
    categoryId: 'ad7e04d9-a33a-4fbe-be76-abb17abaf0dc',
    iconPath: '/icons/apartamento-dark.svg',
    label: 'Apartamentos',
    pathname: '/listings/ad7e04d9-a33a-4fbe-be76-abb17abaf0dc'
  },
  {
    categoryId: 'acab713c-1ce9-4035-bc47-70e4c72068a4',
    iconPath: '/icons/fazenda-dark.svg',
    label: 'Fazendas',
    pathname: '/listings/acab713c-1ce9-4035-bc47-70e4c72068a4'
  },
  {
    categoryId: 'caad6455-4f5c-40e2-96b9-8f9abdadfbde',
    iconPath: '/icons/lago-dark.svg',
    label: 'Lagos',
    pathname: '/listings/caad6455-4f5c-40e2-96b9-8f9abdadfbde'
  },
  {
    categoryId: '47556f40-9576-431a-a59b-6a97923f36e4',
    iconPath: '/icons/campo-dark.svg',
    label: 'Campos',
    pathname: '/listings/47556f40-9576-431a-a59b-6a97923f36e4'
  },
  {
    categoryId: 'd5937353-323f-470d-8204-36521c1666fd',
    iconPath: '/icons/frente-praia-dark.svg',
    label: 'Frente à Praia',
    pathname: '/listings/d5937353-323f-470d-8204-36521c1666fd'
  },
  {
    categoryId: 'd57c2f58-2682-450a-b80d-602275753cef',
    iconPath: '/icons/ilhas-dark.svg',
    label: 'Ilhas',
    pathname: '/listings/d57c2f58-2682-450a-b80d-602275753cef'
  },
  {
    categoryId: '1030e70c-3e39-4019-8b0c-947639130fba',
    iconPath: '/icons/piscinas-dark.svg',
    label: 'Piscinas',
    pathname: '/listings/1030e70c-3e39-4019-8b0c-947639130fba'
  },
  {
    categoryId: 'a48cb84b-8033-446f-a47f-ff952595969b',
    iconPath: '/icons/frente-praia-dark.svg',
    label: 'Praias',
    pathname: '/listings/a48cb84b-8033-446f-a47f-ff952595969b'
  }
];

export const configFieldsElasticSearch = {
  fields: [
    {
      namePropComponent: 'title',
      namePropElasticSearch: 'name'
    },
    {
      namePropComponent: 'images',
      namePropElasticSearch: 'images'
    },
    {
      namePropComponent: 'type',
      namePropElasticSearch: 'type'
    },
    {
      namePropComponent: 'description',
      namePropElasticSearch: 'address',
      customValue: '{{street}}, {{city}}'
    },
    {
      namePropComponent: 'urlRedirect',
      namePropElasticSearch: 'id',
      customValue: '/listing/{{id}}'
    },
    {
      namePropComponent: 'price.value',
      namePropElasticSearch: 'formatted_price'
    },
    {
      namePropComponent: 'price.description',
      namePropElasticSearch: '',
      customValue: 'por período'
    },
    {
      namePropComponent: 'attributes.name',
      namePropElasticSearch: 'bedrooms',
      customValue: ' quarto',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.value',
      namePropElasticSearch: 'bedrooms',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.name',
      namePropElasticSearch: '',
      customValue: 'banheiros',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.value',
      namePropElasticSearch: 'baths',
      isPropArrayComponent: true
    },
    {
      namePropComponent: 'attributes.name',
      namePropElasticSearch: 'area',
      customValue: '{{area}}m² de área',
      isPropArrayComponent: true
    }
  ]
};

export const filtersElastic: FilterOptions = {
  locations: [
    {
      field: 'city',
      label: 'Localidades',
      type: 'value'
    }
  ],
  attributes: [
    {
      field: 'bedrooms',
      label: 'Quartos',
      type: 'range',
      ranges: [
        {
          from: 0,
          to: 1,
          name: '1'
        },
        {
          from: 2,
          to: 3,
          name: '2'
        },
        {
          from: 4,
          name: '3+'
        }
      ]
    },
    {
      field: 'baths',
      label: 'Banheiros',
      type: 'range',
      ranges: [
        {
          from: 0,
          to: 1,
          name: '1'
        },
        {
          from: 2,
          to: 3,
          name: '2'
        },
        {
          from: 4,
          name: '3+'
        }
      ]
    }
  ],
  amenities: [
    {
      field: 'amenities_labels',
      label: 'Comodidades',
      type: 'value'
    }
  ]
};
