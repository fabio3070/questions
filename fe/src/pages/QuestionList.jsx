import React, { useEffect, useRef, useState } from "react";
import { getQuestions } from "../api/list.api";
import { List, Question, ListGrid, ListTitle, SubTitle } from "../themes/list.styles";
import { Link } from "react-router-dom";
import { getDateByText } from "../scripts/dates";
import Skeletons from "../components/skeletons/skeletons";
import InfiniteScroll from 'react-infinite-scroll-component';
import LinearProgress from '@mui/material/LinearProgress';

export default function QuestionList({ filter }) {
    const [questions, setQuestions] = useState();
    const[{ limit, offset, filter : queryFilter }, setFilter] = useState({ limit: 10, offset: 0, filter: filter});
    const [containerHeight, setContainerHeight] = useState(0);
    const scrollableContainerRef = useRef(null);

    useEffect(() => {
        if (scrollableContainerRef.current) {
          const { height } = scrollableContainerRef.current.getBoundingClientRect();
          setContainerHeight(height);
        }
      }, [questions]);

    const questionList = async () => {
        try {
          const response = await getQuestions({filter: queryFilter});
          setQuestions(response.data);
        } catch (error) {
          console.error('Error checking health:', error);
        }
    };

    const getMoreQuestions = async () => {
        try {
          const response = await getQuestions({filter: queryFilter, limit: limit + 10, offset: offset + 10 });
          setQuestions(response.data);
        } catch (error) {
          console.error('Error checking health:', error);
        }
    };


    useEffect(() => {
        questionList();
    }, [filter]);

    return(
        <List 
        >
            {questions ? <ListGrid id="ListGrid">
                <InfiniteScroll
                    dataLength={questions.length}
                    next={getMoreQuestions} 
                    hasMore={true}
                    loader={<LinearProgress />}
                    scrollableTarget={scrollableContainerRef.current}
                    
                >
                    {questions?.map(({question, id, thumb_url, published_at})=>(
                        <Link style={{textDecoration: "none"}} to={`question/${id}`}>
                            <Question id={id}>
                                <img src={thumb_url} />
                                <div>
                                    <ListTitle>{question}</ListTitle>
                                    <SubTitle>Published: {getDateByText(published_at)}</SubTitle>
                                </div>
                            
                            </Question>
                        </Link>
                    ))}
                </InfiniteScroll>
            </ListGrid> :  <Skeletons />}
            
        </List>
    );
}