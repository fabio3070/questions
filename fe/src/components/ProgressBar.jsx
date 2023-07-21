import { useEffect, useState } from "react";
import { ProgressBarContainer } from "./progressBar.styles";

export default function ProgressBar({ votes, totalVotes }) {
    const [widthPercentage, setWidthPercentage] = useState(0);

    useEffect(() => {
        console.log(votes, totalVotes);
        console.log((parseInt(votes) * 100) / parseInt(totalVotes));
        setWidthPercentage((parseInt(votes) * 100) / parseInt(totalVotes));

    }, []);


    return(
        <ProgressBarContainer width={widthPercentage}>

        </ProgressBarContainer>
    );
}