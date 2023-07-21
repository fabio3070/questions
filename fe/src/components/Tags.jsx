import {TagItem} from "../themes/list.styles";
import CloseIcon from '@mui/icons-material/Close';

export default function Tags({search, setFilter}) {

    const handleClose = () => {
        setFilter("");
    }
    return(
        
        <div>
            {search && <TagItem>
                <p style={{ margin: "0 2rem 0 0", paddingLeft: 8}}>{search}</p>
                <CloseIcon 
                    sx={{
                        float: "right", 
                        height: "3rem",
                        "&:hover": {
                            cursor: "pointer"
                        }
                    
                    }} 
                    onClick={handleClose}
                    />
            </TagItem>}
            
        </div>
    );
}