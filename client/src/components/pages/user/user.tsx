import { useEffect, useMemo, useState } from "react";
import { Form, InputGroup, Table } from 'react-bootstrap';
import { IGetUsersResponseData } from '../../../libs/services/blog.response.interfaces';
import { BlogService } from '../../../libs/services/blog.service';
import { apiErrorHandler } from '../../../libs/api/api.error.handler';
import { useDebounce } from "use-debounce";
import Pagination from 'react-responsive-pagination'

export default function User() {
    const blogService = useMemo(() => new BlogService(), []);
    const [users, setUsers] = useState<IGetUsersResponseData | null>(null);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [searchValue] = useDebounce(search, 1000);

    useEffect(() => {
        blogService.getUsers({ page, limit: 20, search: searchValue })
        .then((result) => setUsers(result))
        .catch(apiErrorHandler)
    }, [page, searchValue]);

    return (
        <div>
            <h1 className="mb-5 mt-5 text-center">Users list</h1>
            <div className="d-flex">
                <div className="me-auto" />
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                    <InputGroup.Text>Search</InputGroup.Text>
                </InputGroup>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full name</th>
                        <th>Username</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.usersList.map((user, index) => (
                            <tr key={user.id}>
                                <td>{page * index + 1}</td>
                                <td>{user.fullName}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <div className="mt-5">
                <Pagination 
                current={page} 
                total={users?.totalPages || 1} 
                onPageChange={(current) => setPage(current)} />
            </div>
        </div>
    )
}