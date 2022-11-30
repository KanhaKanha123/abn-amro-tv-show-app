import { ModifiedShows, ShowType } from "../types/types";

//format data, just keep neccessary fields from big object
export const formatShowsData = (shows: ShowType[]) => {
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

export const showsByGenre = (shows: ShowType[], genre: string) => {
    return shows.sort((a, b) => b.rating.average - a.rating.average)
        .filter((show) => {
            return show.genres.includes(genre);
        }).map(show => ({
            id: show.id,
            image: show.image?.medium,
            rating: show.rating.average,
            fullName: show.name,
            name: show.name.length > 15 ? show.name.substring(0, 15) + '...' : show.name,
            genres: show.genres.reduce((acc, genre: string, index: number) => acc + ((index > 0 ? ',' : '') + genre), ''),
            summary: show.summary
        }));
};

export const genres = (shows: ShowType[]) => {
    return shows.reduce((allGenres: any, show: ShowType) => {
        for (const genre of show.genres) {
            allGenres.add(genre);
        }
        return allGenres;
    }, new Set<string>());
};

export const filterBySearchTerm = (shows: ModifiedShows[], term: string) => {
    return shows.map((show) => {
        return {
            ...show,
            showsList: show.showsList.filter((item: ShowType) => item.name.toLowerCase().includes(term.toLowerCase()))
        };
    }).filter(show => show.showsList.length > 0);
};

export const debounce = (time: number) => {
    return new Promise(res => setTimeout(() => res('done'), time));
}