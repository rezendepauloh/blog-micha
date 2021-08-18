type PhoneProps = {
  phone: string;
  url: string;
};

type EmailProps = {
  email: string;
  url: string;
};

export type FooterContactProps = {
  phone: PhoneProps[];
  email: EmailProps[];
  location: string;
};
