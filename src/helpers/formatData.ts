//format data, just keep neccessary fields from big object
export const formatShowsData = (shows: any) => {
    try {
        const showsDataGroupedByGenres = [];
        const allGenres = genres(shows);
        //grouping by genre
        for (let genre of allGenres) {
            showsDataGroupedByGenres.push({
                genreName: genre,
                showsList: showsByGenre(shows, genre)
            });
        }

        return showsDataGroupedByGenres;
    } catch (err) {
        console.error(err);
    }

};

export const showsByGenre = (shows: any[], genre: string) => {
    return shows.sort((a, b) => b.rating.average - a.rating.average)
        .filter((show) => {
            return show.genres.includes(genre);
        }).map(show=>({
            ...show,
            fullName:show.name,
            name:show.name.length>15?show.name.substring(0, 15)+'...':show.name,
            genres:show.genres.map((genre:string,index:number)=>(index>0?',':'')+genre)
        }));
};

export const genres = (shows: any[]) => {
    return shows.reduce((allGenres: any, show: any) => {
        for (const genre of show.genres) {
            allGenres.add(genre);
        }
        return allGenres;
    }, new Set<string>());
};