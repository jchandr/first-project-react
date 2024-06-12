export interface ILoginFormFields {
  phone: string;
  password: string;
}

export interface IUserDetails {
  phone: string;
}

export type TUserDetail = {
  phone: string;
  isLoggedIn?: boolean;
};

export interface IAppProviderValues {
  userDetails: TUserDetail;
  setUserDetails: (userDetails: TUserDetail) => void;
}
