import React from 'react'
import ListItem from './ListItem';
import { TransitionGroup , CSSTransition} from 'react-transition-group';

export default function List({data, title, remove}) {
  return (
    <div>
      {data.length
      ? <div>
          <h1>{title}</h1>
          <TransitionGroup>
            {data.map((prop, index) => 
              <CSSTransition
                key={prop.id}
                timeout={500}
                classNames='post'
              >
                <ListItem number={index + 1} remove={remove} data={prop} key={prop.id} />
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>

        : <h1>no posts</h1>
      }
    </div>
  )
}
