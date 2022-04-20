import { Container } from "./styles";

interface AttributeFieldsProps {
  attributeName: string;
}

export function AttributeField({attributeName}: AttributeFieldsProps) {
  return (
    <Container>
      <span>{attributeName}</span>
      <input 
        type="number"
        placeholder="0"
      />
    </Container>
  )
}