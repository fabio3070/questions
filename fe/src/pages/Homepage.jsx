import React, { useEffect, useState } from "react";
import { healthCheck } from "../api/health.api";
import Tags from "../components/tags";
import Searchbar from "../components/textinputs/searchbar";
import { RetryButton, RetryButtonContainer } from "../themes/list.styles";
import QuestionList from "./QuestionList";
import Modal from "../components/modals/sharescreen";
import Share from "../components/header/Share";
import {SearchContainer} from "../components/textinputs/searchbar.styles";
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Homepage() {
    const [health, setHealth] = useState(false);
    const [filter, setFilter] = useState("");
    const [shareScreen, setShareScreen] = useState();
    const [filteredText, setFilteredText] = useState();
    const [searchParams] = useSearchParams();
    const filterParams = searchParams.get('filter');

    const healthStatus = async () => {
        try {
          const response = await healthCheck();
          setHealth(true);
        } catch (error) {
          console.error('Error checking health:', error);
        }
    };

    const handleShare = () => {
        setShareScreen(true);
    }

    useEffect(() => {
        setFilteredText(`${window.location.href}?limit=10&offset=0&filter=${filter ? filter : ""}`);
    }, [filter]);


    useEffect(() => {
        healthStatus();
        setFilter(filterParams);
    }, []);

    return(
        <div >
            <SearchContainer>
                <Searchbar setFilter={setFilter} setShareScreen={setShareScreen} label="Search for questions" text="Search"/>
                <Share onClick={handleShare}/>
            </SearchContainer>
            <Tags search={filter} setFilter={setFilter}/>
            {health ? 
            <div>
                <QuestionList health={health} filter={filter} />
                <Modal visible={shareScreen} setShareScreen={setShareScreen} filteredText={filteredText}/>
            </div>
                :
                <RetryButtonContainer>
                    <RetryButton onClick={() => healthStatus}>Retry</RetryButton>
                </RetryButtonContainer>
            }
        </div>
    );
}