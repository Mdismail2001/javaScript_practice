// console.log('comments js added')

    

const  comments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => commentsData(data));
    
};

function commentsData(data){
    // console.log(data);
    const list = document.getElementById('comments-section');

    for (const comment of data){
        // console.log(comment);
        const div = document.createElement('div');
        div.innerHTML = `<h3>${comment.postId}</h3> 
                         <P>${comment.id}</P>
                         <h4>${comment.name}</h4>
                         <h3>${comment.email}</h3>
                         <p>${comment.body}</p>
                         `

        list.appendChild(div);
    }


}


// way 2 

const comments2 = async() =>{
    const res =await fetch('https://jsonplaceholder.typicode.com/comments');
    const data =await res.json();
    console.log(data);

}