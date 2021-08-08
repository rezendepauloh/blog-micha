import { GridFooterProps } from '.';

export default {
  logoFooter: {
    text: 'Michely Segóvia',
    srcImg: 'assets/images/logo-h.svg',
  },
  socialMediaFotter: {
    endereco:
      'Rua do Catete, 435, Jardim Monte Líbano, Campo Grande-MS, CEP: 79004170',
    instagram: [
      {
        user: 'Larissa Mancini',
        url: 'https://www.instagram.com/larimancini.adv/',
      },
      {
        user: 'Hellen Almeida',
        url: 'https://www.instagram.com/hellenalmeida.adv/',
      },
    ],
    linkedin: [
      {
        user: 'Larissa Mancini',
        url: 'https://www.linkedin.com/in/larissa-mancini-a18587194/',
      },
      {
        user: 'Hellen Almeida',
        url: 'https://www.linkedin.com/in/hellen-almeida-240a14205/',
      },
    ],
  },
  contactFooter: {
    phone: [
      {
        phone: '(67) 99238-0886',
        url: 'https://api.whatsapp.com/send?phone=556792380886&text=Olá,%20Larissa%20Mancini',
      },
      {
        phone: '(67) 99143-8422',
        url: 'https://api.whatsapp.com/send?phone=556791438422&text=Olá,%20Hellen%20Almeida',
      },
    ],
    email: [
      {
        email: 'almeidaemancini@gmail.com',
        url: 'mailto:almeidaemancini@gmail.com',
      },
      {
        email: 'almeidaemancini@gmail.com',
        url: 'mailto:almeidaemancini@gmail.com',
      },
    ],
    location: 'https://goo.gl/maps/f2kyjuzcaEW1jNaq7',
  },
} as GridFooterProps;
