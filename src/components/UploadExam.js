import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function UploadExam() {
    const empty = {
        name: "",
        categoryId: "",
        courseId: "",
        subjectId: "",
        professorId: "",
        link: "",
    };
    const options = [
        { id: 1, name: "P1" },
        { id: 2, name: "P2" },
        { id: 3, name: "P3" },
        { id: 4, name: "2ch" },
        { id: 5, name: "Outras" },
    ];
    const [object, setObject] = useState(empty);
    const [categoryOptions, setCategoryOptions] = useState(options);
    const [courseOptions, setCourseOptions] = useState([]);
    const [subjectOptions, setSubjectOptions] = useState([]);
    const [professorOptions, setProfessorOptions] = useState([]);
    const history = useHistory();
    let disabled = object.courseId === "" ? true : false;

    getCategories();
    getCourses();

    function getCategories() {
        const request = axios.get("http://localhost:4000/categories");

        request.then((response) => {
            console.log(response.data);
            setCategoryOptions(response.data);
        });
        request.catch((error) => {
            console.log(error);
            alert("Não foi possível carregar as categorias");
        });
    }

    function getCourses() {
        const request = axios.get("http://localhost:4000/courses");

        request.then((response) => {
            console.log(response.data);
            setCourseOptions(response.data);
        });
        request.catch((error) => {
            console.log(error);
            alert("Não foi possível carregar os courses");
        });
    }

    function getSubjects(courseId) {
        const request = axios.get(`http://localhost:4000/subjects/${courseId}`);

        request.then((response) => {
            console.log(response.data);
            setSubjectOptions(response.data);
        });
        request.catch((error) => {
            console.log(error);
            alert("Não foi possível carregar as disciplinas");
        });
    }

    function getProfessors(subjectId) {
        const request = axios.get(
            `http://localhost:4000/professors/${subjectId}`
        );

        request.then((response) => {
            console.log(response.data);
            setProfessorOptions(response.data);
        });
        request.catch((error) => {
            console.log(error);
            alert("Não foi possível carregar os professores");
        });
    }

    function upload(event) {
        event.preventDefault();

        const body = { ...object };

        const request = axios.post("http://localhost:4000/upload", body);

        request.then((response) => {
            alert("Prova enviada com sucesso!");
            setObject(empty);
            history.push("/");
        });
        request.catch((error) => {
            console.log(error);
            alert("Não foi possível salvar a prova");
        });
    }

    return (
        <Container>
            <Title>Enviar prova</Title>
            <UploadForm onSubmit={upload}>
                <GenericInput
                    placeholder="Ano e Semestre. (Ex.: 2020.1)"
                    type="text"
                    value={object.name}
                    onChange={(e) =>
                        setObject({ ...object, name: e.target.value })
                    }
                    required
                />
                <GenericSelect
                    value={object.categoryId}
                    onChange={(e) =>
                        setObject({ ...object, categoryId: e.target.value })
                    }
                    required
                >
                    <SelectOption value="">Categoria</SelectOption>
                    {categoryOptions.map((option) => (
                        <SelectOption key={option.id} value={option.id}>
                            {option.name}
                        </SelectOption>
                    ))}
                </GenericSelect>
                <GenericSelect
                    value={object.courseId}
                    onChange={(e) => {
                        setObject({ ...object, courseId: e.target.value });
                        getSubjects(e.target.value);
                    }}
                    required
                >
                    <SelectOption value="">Curso</SelectOption>
                    {courseOptions.map((option) => (
                        <SelectOption key={option.id} value={option.id}>
                            {option.name}
                        </SelectOption>
                    ))}
                </GenericSelect>
                <GenericSelect
                    value={object.subjectId}
                    onChange={(e) => {
                        setObject({ ...object, subjectId: e.target.value });
                        getProfessors(e.target.value);
                    }}
                    disabled={disabled}
                    required
                >
                    <SelectOption value="">Disciplina</SelectOption>
                    {subjectOptions.map((option) => (
                        <SelectOption key={option.id} value={option.id}>
                            {option.name}
                        </SelectOption>
                    ))}
                </GenericSelect>
                <GenericSelect
                    value={object.professorId}
                    onChange={(e) =>
                        setObject({ ...object, professorId: e.target.value })
                    }
                    disabled={disabled}
                    required
                >
                    <SelectOption value="">Professor</SelectOption>
                    {professorOptions.map((option) => (
                        <SelectOption key={option.id} value={option.id}>
                            {option.name}
                        </SelectOption>
                    ))}
                </GenericSelect>
                <GenericInput
                    placeholder="Link do Arquivo"
                    type="url"
                    required
                    value={object.link}
                    onChange={(e) =>
                        setObject({ ...object, link: e.target.value })
                    }
                />
                <FormButton>Enviar</FormButton>
            </UploadForm>
        </Container>
    );
}

const Title = styled.p`
    font-family: "Fredericka the Great", cursive;
    font-size: 50px;
    margin-bottom: 10px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 170px;
`;

const UploadForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 500px;
`;

const GenericInput = styled.input`
    width: 100%;
    margin-bottom: 15px;
    height: 40px;
    padding-left: 10px;

    &::placeholder {
        font-style: italic;
    }
`;

const GenericSelect = styled.select`
    width: 100%;
    margin-bottom: 15px;
    height: 40px;
    padding-left: 10px;
`;

const SelectOption = styled.option``;

const FormButton = styled.button`
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

    @media (max-width: 450px) {
        width: 130px;
        font-size: 15px;
    }
`;
