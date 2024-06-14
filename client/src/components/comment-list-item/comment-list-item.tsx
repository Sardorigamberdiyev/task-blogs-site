import { Alert, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ICommentListItemProps } from './comment-list-item.props'
import styles from './comment-list-item.module.sass'
import moment from 'moment'

export default function CommentListItem({ postComment }: ICommentListItemProps) {
    const { author, comment, createdAt } = postComment;

    return (
        <li className={styles.root}>
            <Alert 
            className={styles.alter}
            variant="secondary">
                <OverlayTrigger
                placement="left"
                overlay={<Tooltip>{author.fullName}</Tooltip>}>
                    <div className={styles.author}>{author.fullName[0]}</div>
                </OverlayTrigger>
                <p className={styles.comment}>{comment}</p>
                <Badge bg="light" text="dark" pill
                className={styles.createdDate}>
                    {moment(createdAt).fromNow()}
                </Badge>
            </Alert>
        </li>
    )
}