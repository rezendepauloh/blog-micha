import * as Styled from './styles';

export type SocialMediaFooterProps = {
  children: React.ReactNode;
};

export const SocialMediaFooter = ({ children }: SocialMediaFooterProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
