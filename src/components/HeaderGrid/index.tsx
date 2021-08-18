import * as Styled from './styles';
import { SectionContainer } from 'components/SectionContainer';
import { HeaderLogo } from 'components/HeaderLogo';
import { HeaderMenu } from 'components/HeaderMenu';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

import { HeaderGridProps } from './type';

export const HeaderGrid = ({ links = [], logoData }: HeaderGridProps) => {
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
        visible={visible}
        onClick={() => setVisible(false)}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <HeaderLogo {...logoData} />
            <HeaderMenu links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
