import { PropsWithChildren } from "react";
import { Button, Modal as ModalBootstrap } from 'react-bootstrap'
import { IModalProps } from "./modal.props";


export default function Modal(props: PropsWithChildren<IModalProps>) {
    const { children, title, className, show, handleClose, handleSave } = props;
    return (
        <ModalBootstrap 
        show={show} 
        onHide={handleClose}
        className={className}>
            <ModalBootstrap.Header closeButton>
                <ModalBootstrap.Title>{title}</ModalBootstrap.Title>
            </ModalBootstrap.Header>
            <ModalBootstrap.Body>{children}</ModalBootstrap.Body>
            {
                handleSave && (
                    <ModalBootstrap.Footer>
                        <Button 
                        variant="primary" 
                        onClick={handleSave}
                        className="w-100">Apply</Button>
                    </ModalBootstrap.Footer>
                )
            }
        </ModalBootstrap>
    )
}