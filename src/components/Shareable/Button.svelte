<script>
    let buttonProps = {
        class: [$$restProps.class],
    };
</script>

<button on:click on:mouseover on:mouseenter on:mouseleave {...buttonProps}>
    <slot />
</button>

<style>
    * {
        border: 0;
        border-radius: 20px;
        padding: 15px 20px;
        cursor: pointer;
        font-weight: 700;
        min-width: 145px;
    }
    .primary {
        background: rgb(44, 63, 226);
        background: rgb(44, 63, 226);
        background: linear-gradient(
            90deg,
            rgba(44, 63, 226, 1) 44%,
            rgba(36, 27, 189, 1) 100%
        );
        color: #ffffff;
    }
    .default {
        color: #000000;
        background: #ffffff;
    }
</style>
