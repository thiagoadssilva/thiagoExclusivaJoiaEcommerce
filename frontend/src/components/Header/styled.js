import styled from 'styled-components';

export const Container = styled.div`
`;
export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 15px;
    height: 80px;;
`;
export const ContainerMenus = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.back};
    padding: 15px;
`;
export const ContainerTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
`;
export const ContainerSearch = styled.div`

`;
export const ContainerCartCall = styled.div`

`;