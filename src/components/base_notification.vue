<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'BaseNotification',
    props: {
        type: {
            type: String,
            validator: (prop) => ['info', 'error'].includes(prop),
        },
    },
};
</script>
