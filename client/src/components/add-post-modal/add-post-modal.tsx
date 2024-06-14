import { useMemo, useState } from 'react';
import { Form } from 'react-bootstrap';
import { IAddPostModalProps } from './add-post-modal.props';
import { BlogService } from '../../libs/services/blog.service';
import { apiErrorHandler } from '../../libs/api/api.error.handler';
import toast from 'react-hot-toast';
import Modal from '../modal';

export default function AddPostModal({ handleClose, handleAfterSave, show }: IAddPostModalProps) {
    const blogService = useMemo(() => new BlogService(), [])
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const addPostHandle = () => {
        blogService.addPost({ title, description, imageUrl })
        .then(() => {
            toast.success('Success added post');
            setTitle('');
            setDescription('');
            setImageUrl('');
            handleAfterSave && handleAfterSave();
            handleClose && handleClose();
        })
        .catch(apiErrorHandler);
    }

    return (
        <Modal 
        title="Add post" 
        handleSave={addPostHandle}
        handleClose={handleClose}
        show={show}>
            <Form>
                <Form.Group 
                className="mb-3" 
                controlId="title">
                    <Form.Label>Your title</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group 
                className="mb-3" 
                controlId="title">
                    <Form.Label>Your image</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Image url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    as="textarea"
                    placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, alias?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
            </Form>
        </Modal>
    )
}