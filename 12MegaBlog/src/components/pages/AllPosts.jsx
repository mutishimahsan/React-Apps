import React, {useState, useEffect} from 'react'
import appwriteService from '../../appwrite/databaseConfig'
import { Container, PostCard } from '../index'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {}, [])
    appwriteService.getAllPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
