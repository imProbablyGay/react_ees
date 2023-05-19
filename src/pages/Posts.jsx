import { useEffect, useRef, useState } from 'react';
import PostService from '../API/PostService';
import {getPagesCount} from '../utils/pages';
import {usePosts} from '../hooks/usePosts';
import Button from '../components/button/Button';
import Modal from '../components/modal/Modal';
import Form from '../components/Form';
import Input from '../components/input/Input';
import Select from '../components/Select';
import List from '../components/List';
import Pagination from '../components/Pagination';
import { useLoad } from 'hooks/useLoad';


function Posts() {
  let [posts, changePosts] = useState([]);
  let [totalCount, setTotalCount] = useState(0);

  let [totalPages, setTotalPages] = useState(0);
  let [limit, setLimit] = useState(10);
  let [page, setPage] = useState(0);

  // loading posts
  let [isPostLoading, setIsPostLoading] = useState(false);

  // search and sort
  let [filter, changeFilter] = useState({query: '', sort: ''});
  let sortedAndSearchedPosts = usePosts(posts, filter);

  // modal
  let [modal, showModal] = useState(false);

  let lastListItem = useRef()

  // ajax
  async function fetchPost() {
    setIsPostLoading(true);
    let response = await PostService.getAll(limit, page);
    changePosts([...posts, ...response.data])
    setTotalCount(response.headers['x-total-count']);
    setTotalPages(getPagesCount(response.headers['x-total-count'], limit))
    setIsPostLoading(false);
  };

  useLoad(isPostLoading, page === totalPages, lastListItem, () => {setPage(page + 1)})

  useEffect(() => {
    fetchPost()
  }, [page])

  


  function createPost(newPost) {
    changePosts([...posts, newPost]);
    showModal(false)
  }

  function removePost(post) {
    changePosts(posts.filter(p => p.id !== post.id))
  }

  function changeSort(e) {
    changeFilter({...filter, sort: e});
  }

  return (

    <div className="Posts">
      {/* modal */}
      <Button onClick={() => showModal(true)}>add post</Button>
      <Modal visible={modal} setVisible={showModal}>
        <Form create={createPost}/>
      </Modal>

    <hr></hr>

      <Input 
          value={filter.query}
          onChange={e => changeFilter({...filter, query: e.target.value})}
      />
      <hr></hr>
      <Select value={filter.sort} onChange={changeSort} default='default' options={[
          {'name': 'id', 'value': 'id'},
          {'name': 'title', 'value': 'title'},
      ]}/>

        {isPostLoading &&
          <h1>loading</h1>
        }

        <List remove={removePost} data={sortedAndSearchedPosts} title='33'/>
        <div ref={lastListItem}></div>

      <Pagination
        totalPages = {totalPages}
        changePage={setPage}
        currentPage={page}
      />
    </div>
  );
}

export default Posts;