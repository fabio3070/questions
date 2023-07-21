import ShareIcon from '@mui/icons-material/Share';
import { ShareContainer } from "../../themes/global.styles";
import Button from '@mui/material/Button';
import { ThemeColors } from '../../themes/global.colors';
import { B } from '../textinputs/searchbar.styles';

export default function Share({onClick}){
    return(
        <B
        variant="contained" 
        type="text"
        startIcon={<ShareIcon sx={{
            mr: "0.5rem",
            float: "right",

        }}/>}
        
        onClick={onClick}
        >
            <p>Share</p>
        </B>
    );
}