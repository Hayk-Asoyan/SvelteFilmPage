<script>
    import Carousel from "svelte-carousel";
    import { filmContents } from "../../store/films";
    let { TendingNow } = $filmContents;
    const handleSelectFilm = (film) => {
        if (film) {
            sessionStorage.setItem("Featured", JSON.stringify(film));
            filmContents.update((items) => {
                return {
                    ...items,
                    Featured: film,
                };
            });
        }
    };
</script>

<Carousel particlesToShow={8} particlesToScroll={7} arrows={false} dots={false}>
    {#each TendingNow as film (film.Id)}
        <img
            on:click={() => handleSelectFilm(film)}
            class="carousel-img"
            src={`/images/${film.CoverImage}`}
            alt={film.Title}
        />
    {/each}
</Carousel>

<style>
    :global(.sc-carousel__content-container) {
        margin-left: 160px;
        position: fixed !important;
        bottom: 0;
    }
    .carousel-img {
        -webkit-user-drag: none;
        user-select: none;
        margin: 0 5px;
        cursor: pointer;
    }
</style>
