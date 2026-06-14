import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.vantam.xyz/en',
    },
    {
      url: 'https://www.vantam.xyz/uk',
    },
    {
      url: 'https://www.vantam.xyz/ru',
    },
  ];
}
