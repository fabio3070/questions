import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getQuestionById, updateQuestionById } from "../api/list.api";
import SearchButton from "../components/buttons/SearchButton";
import ProgressBar from "../components/ProgressBar";
import { ListGrid, Section, ShareContainer } from "../themes/global.styles";
import { ListItem, Form} from "../themes/detail.styles";
import RadioButtons from "../components/radiobutton/RadioButton";
import Toast from "../components/toast/Toast";
import Modal from "../components/modals/Sharescreen";
import Header from "../components/header/Header";
import Skeletons from "../components/skeletons/Skeletons";

export default function Detail() {
    const { id } = useParams();
    const [question, setQuestion] = useState();
    const [totalVotes, setTotalVotes] = useState();
    const [value, setValue] = useState();
    const [updatedQuestion, setUpdatedQuestion] = useState();
    const [toast, setToast] = useState(false);
    const [visibleToast, setVisibleToast] = useState(); 
    const [shareScreen, setShareScreen] = useState();

    //Fetches the question information via ID
    const questionFetch = async () => {
        console.log("entrou na question");
        try {
            getQuestionById(id).then((response) => {
                setQuestion(response.data);
            });
        } catch (error) {
            console.error('Error checking health:', error);
        }
    };

    //send the vote and update api
    const questionUpdate = async () => {
        try {
            updateQuestionById(id, updatedQuestion).then((response) => {
                setToast(true);
                setVisibleToast(true);
            });
        } catch (error) {
            setToast(false);
            setVisibleToast(true);
            console.error('Error updating:', error);
        }
    };

    useEffect(() => {
        questionFetch();
    }, []);

    useEffect(() => {
       console.log(shareScreen);
    }, [shareScreen]);

    const handleSubmit = () => {
        event.preventDefault()
        const choices = question?.choices;

        const swiftIndex = choices.findIndex(item => item.choice === value.choice);
        if (swiftIndex !== -1) {
            choices[swiftIndex].votes = parseInt(value.votes);
        }

        setUpdatedQuestion({
            id: question?.id,
            image_url: question?.image_url,
            thumb_url: question?.thumb_url,
            question: question?.question,
            choices: choices
        });
    }

    useEffect(() => {
        console.log(updatedQuestion);
        updatedQuestion !== undefined ? questionUpdate() : null;
    },[updatedQuestion]);

    const handleClick=()=>{
        //Get the total of votes to create percentage
        console.log(value);
        if(value !== undefined) {
            setTotalVotes(question?.choices.reduce((acc, choice) => acc + choice.votes, 0));
        }
    }

    return(
        <Section>
            <Header question={question?.question} setShareScreen={setShareScreen}/>
            <Toast visible={visibleToast} toast={toast} />
            {question ?             
            <Form onSubmit={handleSubmit}>
                <RadioButtons toast={toast} setValue={setValue} choices={question?.choices} totalVotes={totalVotes} />
                <SearchButton disabled={toast} type="submit" text="Vote" top={"2rem"} onClick={handleClick}/>
            </Form> : <Skeletons />}

            <Modal visible={shareScreen} setShareScreen={setShareScreen} filteredText={window.location.href}/>
        </Section>
    );
}