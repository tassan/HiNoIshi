import { AttributeField } from "../AttributeField/AttributeField";
import { Container } from "./styles";

export function AttributesTable() {
  return (
    <Container>
      <h1>Atributos</h1>
      <AttributeField attributeName="Força" />
      <AttributeField attributeName="Agilidade" />
      <AttributeField attributeName="Destreza" />
      <AttributeField attributeName="Vitalidade" />
      <AttributeField attributeName="Estamina" />
      <AttributeField attributeName="Percepção" />
      <AttributeField attributeName="Carisma" />
      <AttributeField attributeName="Conhecimento" />
      <AttributeField attributeName="Foco" />
      <AttributeField attributeName="Jutsu" />
      <AttributeField attributeName="Chakra" />
      <AttributeField attributeName="Controle de Chakra" />
      <button type="submit">Calcular</button>
    </Container>
  )
}