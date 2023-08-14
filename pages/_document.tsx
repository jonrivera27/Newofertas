import Document , { Html, Head, Main, NextScript , DocumentContext} from 'next/document'
import { CssBaseline } from '@nextui-org/react'


class MyDocument extends Document{

  static async getInitialProps(ctx: DocumentContext){
    const initialProps = await Document.getInitialProps(ctx)
    return{
      ...initialProps,
      styles:<>{initialProps.styles}</>
    }
  }

render() {
  return (
    <Html lang="en"> <Head>{CssBaseline.flush()} </Head>
    
      <body>  
      </body>
        
      <Main />
      <NextScript />
      
    </Html>

  )
  }
}  

export default MyDocument
