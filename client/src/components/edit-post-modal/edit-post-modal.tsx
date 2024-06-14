import { Form } from "react-bootstrap";
import { useMemo, useState } from "react";
import { IEditPostModalProps } from "./edit-post-modal.props";
import { BlogService } from "../../libs/services/blog.service";
import { apiErrorHandler } from "../../libs/api/api.error.handler";
import toast from "react-hot-toast";
import Modal from "../modal";

export default function EditPostModal({ handleAfterEdit, handleClose, post, show }: IEditPostModalProps) {
    const blogService = useMemo(() => new BlogService(), [])
    
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
    const [imageUrl, setImageUrl] = useState(post.imageUrl);

    const editPostHandle = () => {
        blogService.editPost(post.id, { title, description, imageUrl })
        .then(() => {
            toast.success('Success edited post');
            handleAfterEdit && handleAfterEdit();
            handleClose && handleClose();
        })
        .catch(apiErrorHandler);
    }

    const handleCloseOverride = () => {
        handleClose && handleClose();
        setTitle(post.title);
        setDescription(post.description);
        setImageUrl(post.imageUrl);
    }

    return (
        <Modal 
        title="Edit post" 
        handleSave={editPostHandle}
        handleClose={handleCloseOverride}
        show={show}>
            <Form>
                <Form.Group 
                className="mb-3" 
                controlId="title">
                    <Form.Label>Your title</Form.Label>
                    <Form.Control 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group 
                className="mb-3" 
                controlId="title">
                    <Form.Label>Your image</Form.Label>
                    <Form.Control 
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    as="textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
            </Form>
        </Modal>
    )
}