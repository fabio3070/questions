import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect } from 'react';
import ProgressBar from '../ProgressBar';
import React from 'react';


export default function RadioButtons({choices, totalVotes = null, setValue, toast}) {
    const [error, setError] = React.useState(false);

    const handleRadioChange = () => {
        let selectedChoiceLabel = "";

        for(let choice of choices) {
            if(choice.votes == parseInt(event.target.value)){
                selectedChoiceLabel = choice.choice;
            }
        }
        setValue({votes: parseInt(event.target.value) + 1, choice: selectedChoiceLabel});
    }

    return(
        <FormControl style={{flex: 1, width: "100%"}}>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={handleRadioChange}
            >
                {choices?.map(({choice, votes}) => (
                    <div>
                        <FormControlLabel value={votes} control={ <Radio />} label={choice} />
                        {totalVotes && <ProgressBar votes={votes} totalVotes={totalVotes}/>} 
                    </div>
                    
                ))}
            </RadioGroup>
        </FormControl>     
    );
}