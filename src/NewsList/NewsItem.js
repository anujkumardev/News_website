import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsItem({data, key}) {
 
  return (
    <Card style={{ width: '18rem' , display:'inline-block',margin:'1vh 1vw'}} key={key}>
      <Card.Img variant="top" src={data.urlToImage} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle style={{fontSize:'.8rem'}} className="mb-2 text-muted">By {data.author}</Card.Subtitle>
        <Card.Subtitle style={{fontSize:'.8rem'}} className=" lead text-muted">{data.publishedAt}</Card.Subtitle>
        <Card.Text>
          {data.content}
        </Card.Text>
        <Button variant="dark" href={data.url}>Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;