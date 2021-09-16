import { ContactProps } from './type';
import { data } from 'api/dados.json';

export default {
  title: 'Sobre a Almeida & Mancini',
  content:
    'Almeida e Mancini Advocacia é um escritório situado em Campo Grande - MS, com atendimentos no Brasil inteiro, que atua no campo preventivo das relações obrigacionais, estruturando negócios e contratos, bem como, no campo contencioso na solução de conflitos. Tem o intuito de preservar os interesses dos clientes – quer seja na esfera judicial ou administrativa. Somos especialistas em consultoria estratégica direcionada à redução de custos e potencialização do lucro das empresas, aplicando as melhores soluções estratégicas, de forma legal e segura. Destaca-se no mercado jurídico por prestar uma advocacia artesanal, que se traduz em um acompanhamento jurídico individualizado, eficiente e fiel aos interesses de seus clientes. Atuação nas áreas de Empresarial, Tributário e Civil.',
  cover: {
    id: '61255e5a23833c1f14915600',
    alternativeText: '',
    srcImg: '/assets/images/about.jpg',
    // srcImg:
    //   'https://res.cloudinary.com/dgiqhufpy/image/upload/v1629810879/logo_h_be529e7a63.svg',
  },
  phone: data.base.footer.phone,
  email: data.base.footer.email,
  instagram: data.base.footer.instagram,
} as ContactProps;
