import React from 'react'
import App, { Container } from 'next/app'

class Layout extends React.Component {
  render() {
    console.log( this.props );
    const { children } = this.props
    return <div className='layout'>{ children }</div>
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    console.log( 'pageProps: ', pageProps );
    console.log( 'Component: ', Component );
    return (
      <Container>
        <Layout>
          <Component />
        </Layout>
      </Container>
    )
  }
}
