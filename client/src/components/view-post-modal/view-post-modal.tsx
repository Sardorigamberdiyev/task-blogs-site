import { useEffect, useMemo, useState } from 'react';
import { Button, Form, Image, InputGroup } from 'react-bootstrap';
import { IViewPostModalProps } from './view-post-modal.props';
import { BlogService } from '../../libs/services/blog.service';
import { Modal } from 'react-bootstrap';
import { IGetPostCommentsResponseData } from '../../libs/services/blog.response.interfaces';
import { useAuth } from '../hooks/use-auth';
import { apiErrorHandler } from '../../libs/api/api.error.handler';
import CommentList from '../comment-list';
import styles from './view-post-modal.module.sass';
import toast from 'react-hot-toast';

export default function ViewPostModal({ post, show, handleClose, }: IViewPostModalProps) {
    const blogService = useMemo(() => new BlogService(), []);
    const [comments, setComments] = useState<IGetPostCommentsResponseData | null>(null);
    const [comment, setComment] = useState('');

    const { isAuth } = useAuth();

    const getPostComments = () => {
        if (show) {
            blogService.getPostComments(post.id, { page: 1, limit: 10 })
            .then((result) => setComments(result))
            .catch((error) => console.log(error))
        }
    }

    useEffect(() => getPostComments(), [show]);

    const handleAddComment = () => {
        if (isAuth) {
            blogService.addComment(post.id, { comment })
            .then(() => {
                setComment('');
                getPostComments();
                toast.success('Success add comment this post');
            })
            .catch(apiErrorHandler)
        }
    }

    return (
        <Modal
        show={show}
        onHide={handleClose}
        className={styles.root}>
            <Modal.Header closeButton>
                <Modal.Title>{post.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={styles.imageWrapper}>
                    <Image 
                    src={post.imageUrl}
                    className={styles.image} />
                </div>
                <p>{post.description}</p>
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column align-items-start">
                <h5 className="text-start">Comments ({comments?.totalResults})</h5>
                <div className={styles.listWrapper}>
                    <CommentList postComments={comments?.commentsList || []} />
                </div>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Your comment"
                    disabled={!isAuth}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} />
                    <Button 
                    variant="outline-secondary"
                    onClick={handleAddComment}
                    disabled={!isAuth}>Send</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    )
}