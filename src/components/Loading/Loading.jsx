import React from 'react'
import './loading.css'

const Loading = ({count}) => {
    let loading = []
    for (let i = 0; i < count; i++) {
        loading.push(<div key={i} className="loader"></div>)
    }
  return (
   <>
      <div className='loading__container'>
      {loading}
      </div>
   </>
  )
}

export default Loading