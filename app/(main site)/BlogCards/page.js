          
import ReactMarkdown from 'react-markdown'
import Script from 'next/script';
import Container from '@mui/material/Container';
import Card from './Card'
import BlogCards from '../BlogCards/page.js'
import prism from '../BlogCards/prism.css'


 
async function getData() {
    const res = await fetch('https://malcmind-strapi-cms-production.up.railway.app/api/programming-blogs/')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()

   
    return <Container maxWidth="xl" className = "bg-violet-200 ">
    <section className = "flex flex-wrap justify-evenly gap-5 ">
      <Script src = './prism.js'
      strategy='afterInteractive' />
    
      
        {data.data.map((item) => (item.attributes.Blog_Type == "Programming" ?
        <images >
          <Card 
                blogLink =  {`/BlogCards/${item.id}`}
                blogContent = {<ReactMarkdown>{item.attributes.Content.slice(0,350)}</ReactMarkdown>}
          />
        </images> : null))}
      
      </section>
      </Container>


  }