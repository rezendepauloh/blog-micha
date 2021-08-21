import { FooterSocialMediaProps } from './type';
import { data } from 'api/dados.json';

export default {
  endereco: data.base.footerMedia.endereco,
  instagram: data.base.footerMedia.instagram,
  linkedin: data.base.footerMedia.linkedin,
} as FooterSocialMediaProps;

// export default {
//   endereco:
//     'Rua do Catete, 435, Jardim Monte Líbano, Campo Grande-MS, CEP: 79004170',
//   instagram: [
//     {
//       user: 'Larissa Mancini',
//       url: 'https://www.instagram.com/larimancini.adv/',
//     },
//     {
//       user: 'Hellen Almeida',
//       url: 'https://www.instagram.com/hellenalmeida.adv/',
//     },
//   ],
//   linkedin: [
//     {
//       user: 'Larissa Mancini',
//       url: 'https://www.linkedin.com/in/larissa-mancini-a18587194/',
//     },
//     {
//       user: 'Hellen Almeida',
//       url: 'https://www.linkedin.com/in/hellen-almeida-240a14205/',
//     },
//   ],
// } as FooterSocialMediaProps;
