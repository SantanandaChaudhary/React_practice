
import { useApi } from '../hooks/useApi';

const HomePage = () => {
  // setTimeout(() => {
    // console.log('Hello')
  // }, 4000);
  // console.log('world')

  const [load, err, data] = useApi('https://dummyjson.com/products');


  if (load){
    return <h1> Loading ......</h1>
  }
  if (err){
    return <h1> {`${err}`}</h1>
  }
  console.log(data)

  return (
    <div>
      
    </div>
  )
}

export default HomePage
