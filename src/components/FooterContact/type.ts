export type PhoneProps = {
  phone: string;
  owner: string;
};

export type EmailProps = {
  email: string;
};

export type FooterContactProps = {
  phone: PhoneProps[];
  email: EmailProps[];
  location: string;
};
