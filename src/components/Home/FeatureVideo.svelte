<script>
    import { filmContents } from "../../store/films";
    import { get } from "svelte/store";
    import { convertHMS } from "../../utils/helper";
    import Button from "../Shareable/Button.svelte";
    let Featured;
    filmContents.subscribe((item) => {
        Featured = item.Featured;
    });
</script>

<div class="featured">
    <div class="category">{Featured.Category}</div>
    <img src={`/images/${Featured.TitleImage}`} alt={Featured.Title} />
    <div class="info">
        <span>{Featured.ReleaseYear}</span>{Featured.MpaRating}<span /><span
            >{convertHMS(Featured.Duration)}</span
        >
    </div>

    <div class="description">{Featured.Description}</div>
    <div class="buttons">
        <Button class="default">► Play</Button>
        <Button class="primary">More Info</Button>
    </div>
</div>

<style leng={scss}>
    * {
        color: #fff;
        max-width: 400px;
    }
    .featured {
        top: 100px;
        left: 100px;
        position: relative;
    }
    .category {
        text-transform: uppercase;
        font-weight: 600;
        opacity: 0.7;
        letter-spacing: 2px;
        margin-bottom: 10px;
    }

    .info {
        margin-top: 10px;
        display: flex;
        gap: 10px;
    }
    .description {
        letter-spacing: 0.7px;
        line-height: 1.3;
        margin: 10px 0;
    }
    .buttons {
        margin-top: 20px;
    }
</style>
