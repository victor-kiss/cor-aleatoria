import Head from '../components/Head'
import FlexDiv from '../patterns/FlexDiv'
import {useEffect} from 'react'

export default function Home() {

  function hexaColor(){
  let result =`${'#' + parseInt((Math.random() * 0xFFFFFF))
  .toString(16)}`

  return {result}
  }

  const {result} = hexaColor()

  useEffect(()=>{
      hexaColor()
  },[])

  return (
    <FlexDiv bgColor={result} height="100vh" justify="center" direction="column" align="center">
      <Head title="Cor Aleatória"/>
        <h1>{result}</h1>
    </FlexDiv>
  )
}
