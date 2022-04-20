// import headerBanner from '../../../public/shisui-banner.png';
import titleJPImg from '../../assets/title-japanese.svg';
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={titleJPImg} alt="火 の 意志" />
    </Container>
  )
}