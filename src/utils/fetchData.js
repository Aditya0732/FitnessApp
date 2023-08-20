export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'ae7edbf95dmsh6bf7edb5a25482fp1651b4jsn4c9947ef4309'
      
    }
  };

  export const youtubeOptions = {
    method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': 'ae7edbf95dmsh6bf7edb5a25482fp1651b4jsn4c9947ef4309',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
  };
  
  

export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}