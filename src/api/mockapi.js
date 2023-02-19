export const getMovies = async (endpoint) => {
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

export const addMovie = async (endpoint, newMovie) => {
  const addedMovie = await fetch(
    `https://63f1c0324f17278c9a193673.mockapi.io/${endpoint}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newMovie),
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

export const deleteMovie = (endpoint, movieID) => {
  try {
    fetch(
      `https://63f1c0324f17278c9a193673.mockapi.io/${endpoint}/${movieID}`,
      {
        method: "DELETE",
      }
    );
  } catch (err) {
    alert("Can not delete the Movie");
  }
};

export const updateMovie = () => {
  fetch("https://PROJECT_TOKEN.mockapi.io/tasks/1", {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ completed: true }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      // Do something with updated task
    })
    .catch((error) => {
      // handle error
    });
};
