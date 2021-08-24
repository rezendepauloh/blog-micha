type InstragramProps = {
  user: string;
  url: string;
};

type LinkedinProps = {
  user: string;
  url: string;
};

export type FooterSocialMediaProps = {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
  instagram: InstragramProps[];
  linkedin: LinkedinProps[];
};
