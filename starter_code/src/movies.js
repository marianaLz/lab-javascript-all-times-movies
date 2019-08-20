/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr => {
  const getHoursInMin = element => {
    if (element.duration.charAt(1) === "h") {
      const hr = Number(element.duration.charAt(0));
      const hrInMin = hr * 60;
      return hrInMin;
    } else {
      return 0;
    }
  };
  const getMinutes = element => {
    let min = 0;
    if (element.duration.length >= 5 && element.duration.charAt(1) === "h") {
      min = Number(element.duration.substring(3, element.duration.length - 3));
    } else {
      min = Number(element.duration.substring(0, element.duration.length - 3));
    }
    return min;
  };
  let newArrWithMin = [];
  arr.forEach(element => {
    let single = {
      ...element,
      duration: getHoursInMin(element) + getMinutes(element)
    };
    newArrWithMin.push(single);
  });
  return newArrWithMin;
};

// Get the average of all rates with 2 decimals
const ratesAverage = arr => {
  let average = arr.reduce((acc, movie) => {
    return acc + Number(movie.rate);
  }, 0);
  return Number((average / arr.length).toFixed(2));
};

// Get the average of Drama Movies
const dramaMoviesRate = arr => {
  let dramaMovies = arr.filter(element => {
    return element.genre.includes("Drama");
  });
  if (dramaMovies.length > 0) return ratesAverage(dramaMovies);
  else return undefined;
};

// Order by time duration, in growing order
const orderByDuration = arr => {
  let order = arr.sort((a, b) => {
    if (a.duration > b.duration) return 1;
    if (a.duration < b.duration) return -1;
    if (a.title > b.title) return 1;
    return -1;
  });
  return order;
};

// How many movies did STEVEN SPIELBERG
const howManyMovies = arr => {
  if (arr.length === 0) return undefined;
  let movieCount = arr
    .filter(obj => {
      return obj.director === "Steven Spielberg";
    })
    .filter(obj => {
      return obj.genre.includes("Drama");
    });
  return `Steven Spielberg directed ${movieCount.length} drama movies!`;
};

// Order by title and print the first 20 titles
const orderAlphabetically = arr => {
  let ordenado = arr
    .map(obj => {
      return obj.title;
    })
    .sort()
    .slice(0, 20);
  return ordenado;
};
