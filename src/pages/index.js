import Head from '../components/Head'
import FlexDiv from '../patterns/FlexDiv'
import randomColor from '../styles/theme/randomColor'

export default function Home() {
  return (
    <>
    <Head title="Cor Aleatória"/>
        <FlexDiv direction="column" justify="center" align="center" height="100vh">
            <h1>{randomColor.color}</h1>
        </FlexDiv>
    </>
  )
}
