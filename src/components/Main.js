import styled from "styled-components";

export default function Main() {
    return (
        <Container>
            <Logo>RepoProvas</Logo>
            <ButtonsHolder>
                <FilterButton>por professor</FilterButton>
                <FilterButton>por disciplina</FilterButton>
            </ButtonsHolder>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 170px;
`;

const Logo = styled.p`
    font-family: "Fredericka the Great", cursive;
    font-size: 80px;
`;

const ButtonsHolder = styled.div`
    display: flex;
    justify-content: space-between;
    width: 436px;
    margin-top: 30px;
`;

const FilterButton = styled.button`
    background: #35a9a3;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 30px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;

    &:hover {
        background: #40d1c7;
        cursor: pointer;
    }
`;
