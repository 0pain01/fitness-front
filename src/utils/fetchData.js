export const exerciseOptions ={
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            'X-RapidAPI-Key': 'ff07d59d07msha0c4cc27dec8184p1c0e2bjsnd173a92d1038'
        }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff07d59d07msha0c4cc27dec8184p1c0e2bjsnd173a92d1038',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };

export const fetchData =async (url,options)=>{
    const response=await fetch(url,options);
    const data = await response.json();

    return data;
}