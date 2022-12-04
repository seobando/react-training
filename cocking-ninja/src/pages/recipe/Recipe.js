import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'https://localhost:3000/recipes/' + id
  const { data:recipe , isPending, error } = useFetch(url)
  
  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>loading...</p>}
      {recipe && <h1>{recipe.title}</h1>}
    </div>
  )
}
