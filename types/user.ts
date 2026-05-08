export type RandomUser = {
    name: {
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    picture: {
      large: string;
    };
    location: {
      city: string;
      state: string;
      country: string;
    };
  };
  