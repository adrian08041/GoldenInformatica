import { ContainerStyled } from "../container/styles";
import {
  ContainerFaq,
  Detalhes,
  ListContainer1,
  ListContainer2,
  Lists,
  Sumario,
  Teste,
  Titulo5,
} from "./styles";
import "./style.css";

export function Section5() {
  return (
    <ContainerStyled>
      <ContainerFaq>
        <Titulo5>Perguntas Frequentes (FAQ) </Titulo5>
        <Lists>
          <ListContainer1>
            <details>
              <summary>
                Qual prazo para consertar um computador ou notebook?
              </summary>
              teste
            </details>
            <details>
              <summary>Quanto tempo demora para consertar um notebook?</summary>
              meus ovo
            </details>
            <details>
              <summary>Quanto tempo demora para consertar um notebook?</summary>
              meus ovo
            </details>
          </ListContainer1>
          <ListContainer2>
            <details>
              <summary>Quanto tempo demora para consertar um notebook?</summary>
              meus ovo
            </details>
            <details>
              <summary>Quanto tempo demora para consertar um notebook?</summary>
              meus ovo
            </details>
            <details>
              <summary>Quanto tempo demora para consertar um notebook?</summary>
              meus ovo
            </details>
          </ListContainer2>
        </Lists>
      </ContainerFaq>
    </ContainerStyled>
  );
}
