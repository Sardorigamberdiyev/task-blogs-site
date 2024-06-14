import { useEffect, useMemo, useState } from 'react'
import { Button, Form, Stack, InputGroup } from 'react-bootstrap';
import { useDebounce } from 'use-debounce';
import { IGetPostListResponseData } from '../../../libs/services/blog.response.interfaces'
import { BlogService } from '../../../libs/services/blog.service';
import { useAuth } from '../../hooks/use-auth';
import { Role } from '../../../libs/enums/role.enum';
import Pagination from 'react-responsive-pagination'
import PostCardList from '../../post-card-list';
import AddPostModal from '../../add-post-modal';

export function Home() {
    const blogService = useMemo(() => new BlogService(), []);
    const [showAddPostModal, setShowAddPostModal] = useState(false);
    const [isMePost, setIsMePost] = useState(false);
    const [posts, setPosts] = useState<IGetPostListResponseData | null>(null);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [searchValue] = useDebounce(search, 1000);

    const { user } = useAuth();

    const getPosts = () => {
        if (isMePost) {
            blogService.getMePosts({ page, limit: 12, search: searchValue })
            .then((data) => setPosts(data))
            .catch((err) => console.log(err))
        } else {
            blogService.getPosts({page, limit: 12, search: searchValue})
            .then((data) => setPosts(data))
            .catch((err) => console.log(err))
        }
    }

    useEffect(() => getPosts(), [page, isMePost, searchValue]);

    return (
        <div>
            <AddPostModal
            show={showAddPostModal}
            handleClose={() => setShowAddPostModal(false)}
            handleAfterSave={() => getPosts()} />
            <h1 className="mb-5 mt-5 text-center">Post list</h1>
            <div className="mb-3 d-flex justify-content-between">
                <div>
                {
                    user?.role === Role.AUTHOR && (
                        <Button 
                        variant="outline-secondary"
                        active={isMePost}
                        onClick={() => setIsMePost(!isMePost)}>Me posts</Button>
                    )
                }
                </div>
                <Stack direction="horizontal" gap={2}>
                    <InputGroup style={{ width: 'auto' }}>
                        <Form.Control
                        type="text"
                        placeholder="Search posts..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                        <InputGroup.Text>Search</InputGroup.Text>
                    </InputGroup>
                    {
                        user?.role === Role.AUTHOR && (
                            <Button
                            variant="primary"
                            onClick={() => setShowAddPostModal(true)}>Add new post</Button>
                        )
                    }
                </Stack>
            </div>
            <PostCardList 
            posts={posts?.postsList || []}
            handleAfterDelete={() => getPosts()}
            handleAfterEdit={() => getPosts()} />
            <div className="mt-5">
                <Pagination 
                current={page} 
                total={posts?.totalPages || 1} 
                onPageChange={(current) => setPage(current)} />
            </div>
        </div>
    )
}