import { IPostCardListProps } from './post-card-list.props';
import PostCardListItem from '../post-card-list-item';
import styles from './post-card-list.module.sass';

export default function PostCardList({ posts, handleAfterDelete, handleAfterEdit }: IPostCardListProps) {
    return (
        <div className={styles.root}>
            <ul className={styles.list}>
                {
                    posts.map((post) => (
                        <li 
                        key={post.id} 
                        className={styles.list__item}>
                            <PostCardListItem 
                            post={post} 
                            handleAfterDelete={handleAfterDelete}
                            handleAfterEdit={handleAfterEdit} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}