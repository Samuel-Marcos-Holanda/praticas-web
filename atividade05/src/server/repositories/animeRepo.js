import Anime from "./model/animeModel";

const animes = [];

const save = (anime) => {
    animes.push(new Anime(anime.id, anime.name, anime.genre, anime.studio));
    return anime;
}

const getAll = () => {
    return animes;
};

const getById = (id) => {
    return animes.find(a => a.id === id);
};

const update = (id, newData) => {
    const anime = animes.find(a => a.id === id);
    if (anime) {
        anime.name = newData.name;
        anime.genre = newData.genre;
        anime.studio = newData.studio;
    }
    return anime;
};

const deleteById = (id) => {
    const index = animes.findIndex(a => a.id === id);
    if (index !== -1) {
        animes.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = {
    save,
    getAll,
    getById,
    update,
    deleteById
};