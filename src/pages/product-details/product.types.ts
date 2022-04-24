export type ProductTypeProps = {
  id: number;
  name: string;
};

export type ProductUserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
};

export type ProductCompanyType = {
  name: string;
  logo: string;
  address: {
    id: null | string;
    country: {
      name: string;
      region: null | string;
    };
    state: null;
    city: {
      name: string;
      countryId: null | string;
      stateId: null | string;
    };
    street: string;
    house: string;
    zipCode: string;
    longitude: string;
    latitude: string;
    fallbackString: null | string;
    cityRegion: null | string;
  };
};
export type ProductDetailsType = {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: ProductTypeProps;
  company: ProductCompanyType;
  businessModels: ProductTypeProps[];
  categories: Array<ProductTypeProps>;
  implementationEffortText: string | null | undefined;
  investmentEffort: string;
  trl: ProductTypeProps;
  user: ProductUserType;
};
export type ProductRootType = {
  product: ProductDetailsType;
  isLoading: boolean;
  error: string | null | undefined;
  isSuccess: boolean;
  submissionSuccess: boolean;
  isSubmitting: boolean;
  submissionError: string | null | undefined;
};
