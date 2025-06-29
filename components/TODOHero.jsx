import React from 'react'

const TODOHero = ({todos_completed, total_todos}) => {
  return (
    <section className='todohero_section'>
      <div>
        <p className='text_large'>Task Complete</p>
        <p className='text_small'>Keep it up</p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  )
}

export default TODOHero
