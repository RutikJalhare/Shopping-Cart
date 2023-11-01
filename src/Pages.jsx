import React from 'react'
import './pagesstyle.css'


const Pages = (props) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pages.push(i);
    }

  return (
    <div>
      <>

      <div className="pagination_rounded">
                        <ul>
                           
                        {pages.map((page, index) => {
                return (

<>  
                    <li>
                    <a  key={index}    onClick={() => props.setCurrentPage(page)}  >  {page}</a>
                </li>            
                    </>
                );
            })}
                            
                        
                     










                        </ul>
                    </div>


      </>
    </div>
  )
}

export default Pages
