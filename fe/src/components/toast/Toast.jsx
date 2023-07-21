import { ToastContainer, ToastText } from "./toast.styles";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

export default function Toast({visible, toast}) {
    const [toastVisibility, setToastVisibility] = useState();
    
    useEffect(() => {
        setToastVisibility(visible);
    }, [visible]);

    const handleClose = () => {
        setToastVisibility(!visible);
    }

    return(
        <ToastContainer visible={toastVisibility} toast={toast}>
            <ToastText>
                {toast ===true ? "Voted with Success!" : "Erro ao Votar"}</ToastText>
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
        </ToastContainer>
    );
}
