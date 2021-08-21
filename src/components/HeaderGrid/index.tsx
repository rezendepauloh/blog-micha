import * as Styled from './styles';
import { SectionContainer } from 'components/SectionContainer';
import { Logo } from 'components/Logo';
import { HeaderMenu } from 'components/HeaderMenu';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

import { HeaderGridProps } from './type';

export const HeaderGrid = ({ links, logoData }: HeaderGridProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container
        fluid
        visible={visible ? 1 : 0}
        onClick={() => setVisible(false)}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <Logo {...logoData} />
            <HeaderMenu {...links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
