import styled from 'styled-components';

export const Container = styled.div`
`;

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;    
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.back};
    padding: 15px;
    height: 80px;

    @media(max-width: 720px){
        flex-direction: column;
    }
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
    font-size: 30px;
    font-weight: bold;

    @media(max-width: 1080px){
        font-size: 20px;
    }

    @media(max-width: 720px){
        font-size: 15px;
        margin-bottom: 5px;
    }
`;

export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
`;

export const ContainerCartCall = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;

    @media(max-width: 1080px){
        font-size: 15px;
    }

    @media(max-width: 720px){
        font-size: 10px;
        margin-bottom: 10px;
    }
`;

export const ContainerInput = styled.input`
    box-shadow: 0 0 0 0;
    border-top: 0 none;
    border-left: 0 none;
    border-right: 0 none;
    outline: 0;
    margin-right: 10px;
    padding-left: 5px;
    width: 400px;

    @media(max-width: 1080px){
        width: 200px;
    }

    @media(max-width: 720px){
        display: none;
    }
`;

export const ContainerSearchIcon = styled.div`
    @media(max-width: 720px){
        display: none;
    }
`;

export const ContainerCall = styled.div`
    margin-right: 15px;
    cursor: pointer;
`;

export const ContainerCart = styled.div`
    cursor: pointer;
`;

export const ContainerInputMobile = styled.input`
    box-shadow: 0 0 0 0;
    border-top: 0 none;
    border-left: 0 none;
    border-right: 0 none;
    outline: 0;
    margin-right: 10px;
    padding-left: 5px;
    width: 300px;
`;

export const ContainerSearchMobile = styled.div`
    display: none;

    @media(max-width: 720px){
        display: block;
    }
`;