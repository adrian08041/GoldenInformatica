import {ContainerStyled} from './styles'

type ContainerProps = {
      children: React.ReactNode
}

export function Container({children}: ContainerProps) {
    return (
        <ContainerStyled>{children}</ContainerStyled>
    )
}