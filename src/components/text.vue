<template>
    <span>{{message}}</span>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: '哈哈哈'
        }
    }
}
</script>

