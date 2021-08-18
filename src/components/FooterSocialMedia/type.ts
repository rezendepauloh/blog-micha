type InstragramProps = {
  user: string;
  url: string;
};

type LinkedinProps = {
  user: string;
  url: string;
};

export type FooterSocialMediaProps = {
  endereco: string;
  instagram: InstragramProps[];
  linkedin: LinkedinProps[];
};
