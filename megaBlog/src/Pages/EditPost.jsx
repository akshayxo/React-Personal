import React, { useEffect } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { Container , PostForm} from '../components'
import service from '../appwrite/configuration/config'

function EditPost() {
    const navigate = useNavigate();
    const {slug} = useParams();
    const [post,setPost] = React.useState(null);

    useEffect(()=>{
        service.getPost(slug)
        .then( post =>{
            if(post){
                setPost(post);
            }else{
                navigate('/')
            }
        })
    },[slug,navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
}

export default EditPost
