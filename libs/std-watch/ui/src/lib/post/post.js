import styles from './post.module.css';
import Image from 'next/image';


const Post = ({ postContent }) => {
  const addJSONLD = (title, imageUrl, datePublished, author) => {
    return {
      __html: `{
      "@context": "http://schema.org",
      "@type": "MedicalWebPage",
      "headline": "${title}",
      "image": [
        "${imageUrl}"
      ],
      "datePublished": "${datePublished}",
      "dateModified": "${datePublished}",
      "author": {
        "@type": "Person",
        "name": "${author}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "STDWatch.com",
        "url": "https://www.stdwatch.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.stdwatch.com/assets/design/menu/logo.png"
        }
      }
    }`
    };
  }
  return (
     <div>
      <h1>{postContent.title}</h1>
      <p><small>{postContent.date}</small></p>
      <Image src={postContent.coverImage.url} alt="Cover image" width={760} height={570}/>
      <ul>
      <li><i>Written by <a href="#test">{postContent.author.name}</a></i></li> 
     
      </ul>
      <div dangerouslySetInnerHTML={{ __html: postContent.content.html }} />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJSONLD(postContent.title, postContent.coverImage.url, postContent.date, postContent.author.name)}
        />
    </div>
  )
}
export default Post;