import { PostCardProps } from './type';
import { data } from 'api/dados.json';

//export const specialties = data.home.specialty as HomeSpecialtiesProps;

//Fazer aqui amanhã!

// export default {
//   title: data.posts[0].title,
//   url: 'www.google.com.br',
//   date: '2021-03-02T15:16:09.246+00:00',
//   imgSrc: 'assets/images/post1.png',
//   content:
//     '<p>É uma das etapas mais importantes na <strong>abertura de sua empresa</strong>. Trata-se do contrato constituidor das sociedades contratuais. Deverá conter as cláusulas obrigatórias previstas no artigo 997 do Código Civil.</p>',
// } as PostCardProps;

export default data.posts[0] as PostCardProps;
