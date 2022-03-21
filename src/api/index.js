export const getPosts = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const url =
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts";
  const response = await fetch(url,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json;
};

export const registerUser = async (username, password) => {
  const url =
    "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/users/register";
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const json = await response.json();
    
    const token = json.data.token;
    localStorage.setItem('token', token);
    //localStorage.getItem('token');

    
      
    console.log(json);
    return json;
  } catch (err) {
    console.error("Could not register user", err);
  }

};

export const loginUser = async (username, password) => {
  const url = "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/users/login"

  try{
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        },
      })
    })
    const json = await response.json();
    
    const token = json.data.token;
    localStorage.setItem('token', token);
    console.log(json);
    return json;
  } catch (err) {
    console.error("Could not login, username/password do not exist or were incorrect");
  }
};

export const makePost = async (title, description, price, willDeliver)=>{
  const token = localStorage.getItem("token");
  const url = "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts"
  return fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title:title,
        description:description, 
        price:price,
        willDeliver:willDeliver
      }
    })
})
.then(response => response.json())
.catch(console.error);}

export const deletePost = async (postID)=>{
  const token = localStorage.getItem("token");
  const url = `https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts/${postID}`;
  await fetch(url, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    }).catch(console.error);
}

export const messages = async (postID,message)=>{
  const token = localStorage.getItem("token");
  const url = `https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts/${postID}/messages`;
  fetch(url, {
    method: "POST",
    headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify({
    message: {
      content: message
    }
  })
}).then(response => response.json())
.then(result => {
  console.log(result);
})
.catch(console.error);
}
