import React from 'react'

const NewsList = ({ title, intro, text, img }) => {
  return (
    <>
      {products && products.products.map(prod => (
        <Col lg={3} md={6} key={prod.url} className="mb-4">
          <a className="no-style" href={`/products/${prod.url}`}>
            <Card >
              <Card.Img variant="top" src={prod.product_image ? prod.product_image : placeholder} />
              <Card.Body>
                <Card.Title>{lang.language ? prod.no_title : prod.en_title}</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </>
  )
}

export default NewsList;