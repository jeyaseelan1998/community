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

export const addMovie = (newMovie) => {
  fetch("https://PROJECT_TOKEN.mockapi.io/tasks", {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(newMovie),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((result) => {
      // do something with the new task
      return result;
    })
    .catch((error) => {
      // handle error
      alert("Can not add new Movie");
    });
};

export const deleteMovie = (movieID) => {
  fetch(`https://<PROJECT_TOKEN.mockapi.io/tasks/${movieID}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      // Do something with deleted task
      console.log(task, "deleted");
    })
    .catch((error) => {
      // handle error
      alert("Can not delete the Movie");
    });
};

const updateMovie = () => {
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
