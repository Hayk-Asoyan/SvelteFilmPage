<script>
    import { beforeUpdate, onMount } from "svelte";

    import FeatureVideo from "./FeatureVideo.svelte";
    import LeftSidebar from "./LeftSidebar.svelte";
    import Carousel from "./Carousel.svelte";
    import { filmContents } from "../../store/films";
    import films from "../../json/data.json";

    beforeUpdate(() => {
        filmContents.set(films);
    });
    onMount(() => {
        let data = sessionStorage.getItem("Featured");
        if (data) {
            filmContents.update((items) => {
                return {
                    ...items,
                    Featured: JSON.parse(data),
                };
            });
        }
    });
</script>

<LeftSidebar />
<FeatureVideo />
<Carousel />

<style leng={scss}>
</style>
