export type SpecialtiesProps = {
  specialty: string;
  url: string;
};

export type HomeSpecialtiesProps = {
  title: string;
  content: string;
  linkSpecialty: SpecialtiesProps[];
};
