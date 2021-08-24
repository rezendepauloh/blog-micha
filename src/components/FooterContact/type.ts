type PhoneProps = {
  phone: string;
  owner: string;
};

type EmailProps = {
  email: string;
};

export type FooterContactProps = {
  phone: PhoneProps[];
  email: EmailProps[];
  location: string;
};
