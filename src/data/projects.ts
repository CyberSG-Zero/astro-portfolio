import Rectangle from '../sections/projects/Rectangle.astro';
import EQapla from '../sections/projects/e-Qapla.astro';
import Inmape from '../sections/projects/Inmape.astro';
import ArquiTechPro from '../sections/projects/ArquiTechPro.astro';
import IntrepidoCacao from '../sections/projects/Intrepido_Cacao.astro';
import Anilist from '../sections/projects/Anilist.astro';
import DrCaramelo from '../sections/projects/Dr-Caramelo.astro';
import NoUserName from '../sections/projects/No-UserName.astro';

export const projects = [
  { slug: 'Rectangle', Component: Rectangle },
  { slug: 'e-Qapla', Component: EQapla },
  { slug: 'Inmape', Component: Inmape },
  { slug: 'ArquiTechPro', Component: ArquiTechPro },
  { slug: 'Intrepido_Cacao', Component: IntrepidoCacao },
  { slug: 'Anilist', Component: Anilist },
  { slug: 'Dr-Caramelo', Component: DrCaramelo },
  { slug: 'No-UserName', Component: NoUserName },
];
