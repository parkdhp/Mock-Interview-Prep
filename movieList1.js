var movieLists = [
	{
		name: 'Instant Queue',
		videos: [
			{
				id: 70111470,
				title: 'Die Hard',
				boxarts: [
					{
						width: 150,
						height: 200,
						url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg',
					},
					{
						width: 200,
						height: 200,
						url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg',
					},
				],
				url: 'http://api.netflix.com/catalog/titles/movies/70111470',
				rating: 4.0,
				bookmark: [],
			},
			{
				id: 654356453,
				title: 'Bad Boys',
				boxarts: [
					{
						width: 200,
						height: 200,
						url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg',
					},
					{
						width: 150,
						height: 200,
						url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg',
					},
				],
				url: 'http://api.netflix.com/catalog/titles/movies/70111470',
				rating: 5.0,
				bookmark: [{ id: 432534, time: 65876586 }],
			},
		],
	},
	{
		name: 'New Releases',
		videos: [
			{
				id: 65432445,
				title: 'The Chamber',
				boxarts: [
					{
						width: 150,
						height: 200,
						url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg',
					},
					{
						width: 200,
						height: 200,
						url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg',
					},
				],
				url: 'http://api.netflix.com/catalog/titles/movies/70111470',
				rating: 4.0,
				bookmark: [],
			},
			{
				id: 675465,
				title: 'Fracture',
				boxarts: [
					{
						width: 200,
						height: 200,
						url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
					},
					{
						width: 150,
						height: 200,
						url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',
					},
					{
						width: 300,
						height: 200,
						url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg',
					},
				],
				url: 'http://api.netflix.com/catalog/titles/movies/70111470',
				rating: 5.0,
				bookmark: [{ id: 432534, time: 65876586 }],
			},
		],
	},
];

//return video title as string...for highest rating, if rating is === return titles.

function highestRating(movieList){
   //first find out which video has the higest rating, then check to see if there are any other videos with that rating.
   //push all videos with highest rating into var topVideos array.
   //access movieLists[0].videos[0].rating
   //access movieLists[0].videos[0].title
   //use a forEach loop to check every rating.
  var highestRating = 0;
  var topMovies = [];
  movieList.forEach(genre => {
    genre.videos.forEach(video => {
      if(video.rating > highestRating){
        highestRating = video.rating;
      }
    });
  });
  
  movieList.forEach(genre => {
    genre.videos.forEach(video => {
      if(video.rating === highestRating){
        topMovies.push(video.title);
      }
    });
  });
  return topMovies;
}
console.log(highestRating(movieLists));

// write a function sumArea that takes in an array like the one above, and outputs the sum of the areas of every boxart in the list (area = width x height)
//movieLists[0].videos[0].boxarts[0].width or height

// function SumArea(movieList){
  //output will be sum of every boxarts area.
  //area = width * height;
  //use reduce to accumulate the areas of every video boxart.
  //use forEach x3 to access every boxart.
  
  // return movieList.reduce(function(totalArea, genre){
  //   genre.videos.forEach(function(video){
  //     video.boxarts.forEach(function(art){
  //       totalArea += (art.width * art.height);
  //     })
  //   });
  //   return totalArea;
  // }, 0);
  
  
  // movieList.forEach(function(genre){
  //   genre.videos.forEach(function(video){
  //     video.boxarts.forEach(function(art){
  //       totalSum += (art.width * art.height);
  //     })
  //   })
  // });
  // return totalSum;
// }


// console.log(SumArea(movieLists));

