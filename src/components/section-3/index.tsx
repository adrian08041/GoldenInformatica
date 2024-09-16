import { ContainerCard, SubTitlte, Title, WrapperContainer3 } from "./styles";
import { Container } from "../container";

import { Card } from "../card";

import { MdBackup, MdHandyman, MdKeyboard } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { IoGameController } from "react-icons/io5";
import { GiLaptop } from "react-icons/gi";
import { BsMotherboard } from "react-icons/bs";
import { RiRemoteControlFill } from "react-icons/ri";
import { PiDesktopTowerBold } from "react-icons/pi";

export function Section3() {
  return (
    <Container>
      <WrapperContainer3>
        <SubTitlte>
          TRANSFORMAMOS SEU DISPOSTIVO PARA MÁXIMA PERFORMANCE.
        </SubTitlte>
        <Title>
          Serviços especializados para <br /> máxima performance
        </Title>
        <ContainerCard>
          <Card
            Icon={<MdHandyman />}
            Title="Conserto e Reparo a PCs e notebooks"
            SubTitle="Nosso time especializado oferece conserto
          e reparo para todos os tipos de problemas,
          desde falhas no hardware até questões de
          software. Utilizamos técnicas avançadas e
          peças de qualidade para garantir a melhor
          solução para o seu equipamento."
          />
          <Card
            Icon={<MdBackup />}
            Title="Formatação com backup"
            SubTitle="Realizamos a formatação completa do seu 
          computador, incluindo backup dos seus 
          arquivos importantes. Escolha entre
          Windows 7, Windows 10 ou Windows 11, e 
          deixe o trabalho pesado conosco."
          />
          <Card
            Icon={<GrVmMaintenance />}
            Title="Manuntenção Preventiva"
            SubTitle="Nossa manntenção preventiva inclui limpeza
          interna, verificação de hardware e ajustes
          de software para evitar problemas futuros e 
          prolongar a vida útil do seu dispositivo."
          />
          <Card
            Icon={<IoGameController />}
            Title="Montagem de PC Gamer"
            SubTitle="Oferecemos  montagem  personalizada  de PCs Gamer, adaptados ás suas 
Necessidades e preferências. Se você  busca 
potência  e eficiência  para  jogos,  temos a solução  ideal  para você."
          />
          <Card
            Icon={<GiLaptop />}
            Title="Restauração de Carcaça  de Notebook "
            SubTitle="Realizamos a Restauração  da carcaça do
seu notebook, melhorando a aspecto visual
e a  durabilidade do seu equipamento, como
    se estivesse  novo  novamente."
          />
          <Card
            Icon={<MdKeyboard />}
            Title="Venda e instalação  de Teclado e SSD"
            SubTitle="vendemos e instalamos  Teclados  e SSDs
  para melhorar  a performance  e a
experiência  de uso do seu  computador.
Troque componentes antigos e sinta a
      diferença  no desempenho.."
          />
          <Card
            Icon={<BsMotherboard />}
            Title="Reparo de Placa Mãe"
            SubTitle="Especialista em diagnósticos e reparo de
           placas-mãe, asseguramos que seu desktop
           ou notebook funcione perfeitamente após a
           nossa intervenção"
          />
          <Card
            Icon={<PiDesktopTowerBold />}
            Title="Venda de Desktops e Notebooks
          Novos e Seminovos"
            SubTitle="Oferecemos uma variedade de desktops e
          notebooks novos e seminovos, com
          qualidade garantida e preços competitivos.
          Encontre o modelo ideal para o seu uso
          pessoal ou profissional"
          />
          <Card
            Icon={<RiRemoteControlFill />}
            Title="Suporte Remoto"
            SubTitle="Oferecemos suporte remoto para resolver
          problemas de software e configuração
          diretamente no seu dispositivo, com 
          segurança e eficiência, sem necessidade de 
          deslocamento."
          />
        </ContainerCard>
      </WrapperContainer3>
    </Container>
  );
}
