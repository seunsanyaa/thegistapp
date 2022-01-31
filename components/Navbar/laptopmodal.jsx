import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { gsap } from 'gsap'


const LaptopModal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    let laptopnav = useRef()


    useEffect(() => {

        // gsap.from([laptopnav.current],{x:200})
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    } ;

    const modalContent = show ? (
        <StyledModalOverlay ref={laptopnav}>
            <StyledModal>
                <StyledModalHeader>
                    {/*<a href="#" onClick={handleCloseClick}>*/}
                    {/*    x*/}
                    {/*</a>*/}
                </StyledModalHeader>
                {/*{title && <StyledModalTitle>{title}</StyledModalTitle>}*/}
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

const StyledModalBody = styled.div`
  padding: 65px 0px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: #ed1c24;
  width: 500px;
  left : 0;
  height: 100%;
    overflow-y :scroll;
    
    

  position:fixed

`;


const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index:4000
`;

export default LaptopModal;