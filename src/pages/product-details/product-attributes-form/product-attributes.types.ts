export type ProductAttributeProps = {
  productId: string;
  categories: { id: number; name: string }[];
  businessModels: { id: number; name: string }[];
  trl: any;
};

export type TRLType = {
  id: number | string;
  name: string;
  description?: string | null;
};
export type INITIALTYPE = {
  productId: string;
  categories: { id: number; name: string }[];
  businessModels: { id: number; name: string }[];
  trl: { label: string; value: string };
};
