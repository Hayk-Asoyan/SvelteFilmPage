<script>
    import { fly } from "svelte/transition";
    let visibleMenu = false;
    $: active = visibleMenu;
    const handleMouseenter = () => {
        visibleMenu = !visibleMenu;
    };
</script>

<div class="left-sidebar" class:visibleMenu>
    <div class="avatar">
        <img src="/images/avatar.png" alt="avatar" /><span>Daniel</span>
    </div>

    <div
        class="menu"
        on:mouseenter={handleMouseenter}
        on:mouseleave={handleMouseenter}
    >
        <div>
            <img src="/images/icons/ICON - Search.png" alt="search" />
            {#if active}
                <span class:active transition:fly={{ duration: 1000 }}>
                    Search</span
                >
            {/if}
        </div>
        <div>
            <img src="/images/icons/Group 46.png" alt="home" />
            {#if active}
                <span transition:fly={{ duration: 1000 }} class:active
                    >Home</span
                >
            {/if}
        </div>
        <div>
            <img src="/images/icons/Group 56.png" alt="shows" />
            {#if active}
                <span transition:fly={{ duration: 1000 }} class:active
                    >TV Shows</span
                >
            {/if}
        </div>
        <div>
            <img src="/images/icons/Group 54.png" alt="movies" />
            {#if active}
                <span transition:fly={{ duration: 1000 }} class:active
                    >Movies</span
                >
            {/if}
        </div>
        <div>
            <img src="/images/icons/Group 53.png" alt="genres" />
            {#if active}
                <span transition:fly={{ duration: 1000 }} class:active
                    >Genres</span
                >
            {/if}
        </div>
        <div>
            <img src="/images/icons/Group 47.png" alt="watch" />
            {#if active}
                <span transition:fly={{ duration: 1000 }} class:active
                    >Watch Later</span
                >
            {/if}
        </div>
        {#if active}
            <div class="bottom-menu">
                <p transition:fly={{ duration: 1000 }} class:active>LANGUAGE</p>
                <p transition:fly={{ duration: 1000 }} class:active>GET HELP</p>
                <p transition:fly={{ duration: 1000 }} class:active>EXIT</p>
            </div>
        {/if}
    </div>
</div>

<style>
    .left-sidebar {
        width: 100%;
        height: 100vh;
        position: fixed;
        padding: 20px;
    }
    .visibleMenu {
        background: rgb(0, 0, 0);
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(255, 255, 255, 0) 80%
        );
        z-index: 999;
    }
    .avatar {
        color: #fff;
        display: flex;
        align-items: center;
        font-weight: 700;
    }
    .avatar img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }
    .menu {
        margin-top: 20px;
        width: max-content;
        height: 100vh;
    }
    .menu img {
        margin: 5px 20px 5px 0;
        width: 20px;
    }
    .menu div:not(.bottom-menu) {
        display: flex;
        align-items: center;
        width: max-content;
        padding: 10px;
        cursor: pointer;
    }
  
    .menu div:hover:not(.bottom-menu) {
        background-color: rgb(88, 88, 133);
        border-radius: 8px;
        width: 175px;
    }

    .active {
        display: inline !important;
        color: #fff;
        font-size: 24px;
    }

    .menu span {
        display: none;
    }
    .bottom-menu {
        display: flex;
        flex-direction: column;
        position: fixed;
        bottom: 20px;
    }
    .bottom-menu p {
        display: block;
        cursor: pointer;
        opacity: 0.7;
        line-height: 7px;
        font-size: 16px;
    }
</style>
