export type SpecialtiesProps = {
  specialty: string;
  content: string;
};

export type HomeSpecialtiesProps = {
  title: string;
  content: string;
  linkSpecialty: SpecialtiesProps[];
};
