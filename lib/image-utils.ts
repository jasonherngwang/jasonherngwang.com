import { getPlaiceholder } from 'plaiceholder';

export const getPlaceholderImage = async (path: string) => {
  const { base64 } = await getPlaiceholder(path);
  return base64;
};
