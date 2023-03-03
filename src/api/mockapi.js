export const READ = async (endpoint) => {
  const data = await fetch(
    `https://63f1c0324f17278c9a193673.mockapi.io/${endpoint}`,
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((result) => {
      // Do something with the list of result
      return result;
    })
    .catch((error) => {
      // handle error
    });
  return data;
};

export const CREATE = async (endpoint, object) => {
  const addedMovie = await fetch(
    `https://63f1c0324f17278c9a193673.mockapi.io/${endpoint}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(object),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      // handle error
      alert("Can not add new Movie");
    });
  return addedMovie;
};

export const DELETE = (endpoint, id) => {
  try {
    fetch(`https://63f1c0324f17278c9a193673.mockapi.io/${endpoint}/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    alert("Can not delete the Movie");
  }
};

export const UPDATE = async (endpoint, movie) => {
  const updatedMovie = await fetch(
    `https://63f1c0324f17278c9a193673.mockapi.io/${endpoint}/${movie.id}`,
    {
      method: "PUT", // or PATCH
      headers: { "content-type": "application/json" },
      body: JSON.stringify(movie),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((movie) => {
      // Do something with updated task
      return movie;
    })
    .catch((error) => {
      // handle error
    });
  return updatedMovie;
};
