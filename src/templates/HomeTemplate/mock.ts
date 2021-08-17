import { HomeTemplateProps } from '.';
import HomeCarouselMock from '../../components/HomeCarousel/mock';
import HomeSpecialtiesMock from '../../components/HomeSpecialties/mock';
import { mockWithTitle } from '../../components/HomePostGrid/mock';
import headerGridMock from '../../components/HeaderGrid/mock';
import gridFooterMock from '../../components/FooterGrid/mock';

export default {
  carousel: HomeCarouselMock,
  specialties: HomeSpecialtiesMock,
  posts: mockWithTitle,
  header: headerGridMock,
  footer: gridFooterMock,
} as HomeTemplateProps;
