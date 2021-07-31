import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { IoHome, IoAddCircle } from "react-icons/io5";

export default function Header() {
    const history = useHistory();

    function goHome() {
        history.push("/");
    }

    function goToUpload() {
        history.push("/upload");
    }

    return (
        <>
            <Container>
                <HeaderButton>
                    <HomeIcon />
                    <ButtonText onClick={() => goHome()}>início</ButtonText>
                </HeaderButton>
                <HeaderButton>
                    <UploadIcon />
                    <ButtonText onClick={() => goToUpload()}>
                        enviar prova
                    </ButtonText>
                </HeaderButton>
            </Container>
            <TopDistance />
        </>
    );
}

const Container = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    background: #303030;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
`;

const HomeIcon = styled(IoHome)`
    color: #fff;
    width: 20px;
    height: 20px;
`;

const UploadIcon = styled(IoAddCircle)`
    color: #fff;
    width: 20px;
    height: 20px;
`;

const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    border: none;
    width: 50%;

    &:hover {
        background-color: #3a3838;
        cursor: pointer;
    }
`;

const ButtonText = styled.p`
    margin-left: 10px;
    font-weight: bold;
    color: #fff;
`;

const TopDistance = styled.div`
    width: 100%;
    height: 40px;
`;
