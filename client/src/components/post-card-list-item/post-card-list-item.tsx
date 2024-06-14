import { useMemo, useState } from 'react';
import { Badge, Card, Dropdown, DropdownButton, Stack } from 'react-bootstrap';
import { IPostCardListItemProps } from './post-card-list-item.props';
import { BlogService } from '../../libs/services/blog.service';
import { apiErrorHandler } from '../../libs/api/api.error.handler';
import { useAuth } from '../hooks/use-auth';
import { Role } from '../../libs/enums/role.enum';
import toast from 'react-hot-toast';
import moment from 'moment';
import ViewPostModal from '../view-post-modal';
import DangerModal from '../danger-modal';
import EditPostModal from '../edit-post-modal';
import styles from './post-card-list-item.module.sass';

export default function PostCardListItem({ post, handleAfterDelete, handleAfterEdit }: IPostCardListItemProps) {
    const blogService = useMemo(() => new BlogService(), [])
    const [showViewModal, setShowViewModal] = useState(false);
    const [showDangerModal, setShowDangerModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false)

    const { user } = useAuth();

    const handleDeletePost = () => {
        blogService.deletePost(post.id)
        .then(() => {
            toast.success('Success deleted post');
            handleAfterDelete && handleAfterDelete();
        })
        .catch(apiErrorHandler)
    }

    return (
        <div>
            <ViewPostModal 
            post={post}
            show={showViewModal} 
            handleClose={() => setShowViewModal(false)} />
            <EditPostModal
            post={post}
            show={showEditModal}
            handleClose={() => setShowEditModal(false)}
            handleAfterEdit={handleAfterEdit} />
            <DangerModal
            show={showDangerModal}
            handleClose={() => setShowDangerModal(false)}
            handleDanger={handleDeletePost} />
            <Card className={styles.root}>
                <Card.Header>
                    <Stack 
                    className="justify-content-between align-items-start" 
                    direction="horizontal" 
                    gap={2}>
                        <Card.Title>{post.title}</Card.Title>
                        {
                            (
                                user?.role === Role.AUTHOR && 
                                user.id === post.author.id
                            ) && (
                                <DropdownButton 
                                title="more"
                                size="sm"
                                align="end">
                                    {
                                        user.role === Role.AUTHOR && (
                                            <Dropdown.Item 
                                            as="button"
                                            onClick={() => setShowEditModal(true)}>Edit</Dropdown.Item>
                                        )
                                    }
                                    <Dropdown.Item 
                                    as="button" 
                                    className="text-danger"
                                    onClick={() => setShowDangerModal(true)}>Delete</Dropdown.Item>
                                </DropdownButton>
                            )
                        }
                    </Stack>
                </Card.Header>
                <Card.Body 
                className={styles.body}
                onClick={() => setShowViewModal(true)}>
                    <Card.Text>{post.description}</Card.Text>
                    <Stack direction="horizontal">
                        <Badge bg="dark" className="me-auto">{post.author.username}</Badge>
                        <Badge bg="secondary">{moment(post.createdAt).fromNow()}</Badge>
                    </Stack>
                </Card.Body>
                <div className="p-2"
                onClick={() => setShowViewModal(true)}>
                    <div className={styles.imageWrapper}>
                        <Card.Img 
                        className={styles.imageWrapper__image}
                        src={post.imageUrl} />
                    </div>
                </div>
            </Card>
        </div>
    )
}