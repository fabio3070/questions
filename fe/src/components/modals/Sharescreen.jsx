import Searchbar from "../textinputs/Searchbar";
import { ModalBackground, ModalContainer, ModalParent } from "./sharescreen.styles";
import { shareScreen } from "../../api/share.api";
import { useEffect, useState } from "react";
import { validateEmail } from "../../scripts/validations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Modal({visible, setShareScreen, filteredText}) {
    const [email, setEmail] = useState();
    const [modalVisible, setModalVisible] = useState();
    
    const startShare = async () => {
        console.log(email, window.location.href);
        try {
          const response = await shareScreen({destination_email: email, content_url: filteredText});
          console.log("resposta: ", response);

        } catch (error) {
          console.error('Error checking health:', error);
        }
    };

    useEffect(() => {
        if(email !== undefined){
            if(validateEmail(email)){
                startShare();
                console.log("HEREE");
                toast("Sent with success!");
            } else {
                //throw error
                console.log("error");
            };
        }
    }, [email])

    const closeModal = () => {
        setShareScreen(!visible);
    }

    return(
        <ModalParent visible={visible}>
            <ModalBackground  onClick={closeModal} />

            <ModalContainer >
                <Searchbar 
                label="Write your email" 
                text="Send"
                style={{flexFlow: "column", alignItems: "center" }}
                setFilter={setEmail}
                />
            </ModalContainer>
            <ToastContainer />
        </ModalParent>
    );
}