import CommentListItem from '../comment-list-item'
import styles from './comment-list.module.sass'
import { ICommentListProps } from './comment-list.props'

export default function CommentList({ postComments }: ICommentListProps) {
    return (
        <ul className={styles.root}>
            {
                postComments.map((postComment) => (
                    <CommentListItem 
                    key={postComment.id} 
                    postComment={postComment} />
                ))
            }
        </ul>   
    )
}