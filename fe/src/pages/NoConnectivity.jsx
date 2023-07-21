import CircularProgress from '@mui/material/CircularProgress';
import { NoConectivityContainer } from "../themes/global.styles";

export default function NoConectivity(){
    return(
        <NoConectivityContainer>
            <p>No Internet connection</p>
            <CircularProgress />
        </NoConectivityContainer>
    );
}