import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NewsItem from "./NewsItem";
import {useLocation} from "react-router-dom";
const NewsList =({category})=>{
    //f3464eebe25546f2b8fc6fc54522c2b0
    //https://newsapi.org/v2/everything?q=Apple&from=2022-08-28&sortBy=popularity&apiKey=API_KEY
    //https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
    //https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY
    const search = useLocation().search;
    const search2 = new URLSearchParams(search).get('search_text');
    const [data,setData] = useState([]);
    const getData =(url)=>{
        fetch(url).then((response) => response.json()).then((data)=>{
            setData(data.articles);
        });
    };
    if(search2)category=search2;
    let url_category = 'https://newsapi.org/v2/everything?' +
          'q=' + category + '&' +
          'from=2022-08-28&' +
          'sortBy=popularity&' +
          'apiKey=f3464eebe25546f2b8fc6fc54522c2b0';
    if(category === "TopNews"){
        url_category = 'https://newsapi.org/v2/top-headlines?'+'country=us&'+
          'apiKey=f3464eebe25546f2b8fc6fc54522c2b0';
    }
    useEffect(()=>{
         getData(url_category);
    },[url_category]);

    return (
        <>
        <Container fluid>
            <Row className="m-2 display-4" style={{justifyContent:'center'}}>
                { category}
            </Row>
            <Row>
                {
                   data.map((item)=>(
                    <NewsItem data={item} key={item.id} />
                   ))
                }
            </Row>
        </Container>
        </>
    );
}


export default NewsList;