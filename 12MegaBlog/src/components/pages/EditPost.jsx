import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../index'
import appwriteService from '../../appwrite/databaseConfig'
import { useNavigate, useParams } from 'react-router'

function EditPost() {
    const [post, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost().then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
