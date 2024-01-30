import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {

    const removePost = (post) => {}

    // if (!posts.length) {
    //     <h1 style={{textAlign: 'center'}}>
    //     Посты не найдены!
    //   </h1>
    // }

    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index, remove) => 
            <PostItem 
                remove={removePost} 
                number={index + 1} 
                post={post}
                key={post.id}/>
            )}
        </div>
        //{/* Так же, необходимо создать уникальный ключ, по ошибке, некоторые пишут индекс, но по правилу нужно использовать key, индексы меняются, а ключ всегда
        // должен быть уникальным. Ключи позволяют алгоритмам реакта делать рендеринг наиболее эффективно и перертсовывать не весь список, а только те, в которых произошли изменения*/},
        // В компоненте может быть только один корневой элемент, при создании еще одного div будет ошибка
    )
}

export default PostList;