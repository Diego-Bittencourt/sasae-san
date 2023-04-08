<template>
    <span class="p-1 border border-transparent text-lg font-bold rounded-md " :class="badgeClass">
        <slot></slot>
    </span>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps(['status'])

const badgeClass = computed(() => {
    const status = props.status
    status === 'draft' ? 'bg-yellow-600' : ''
    // switch (props.videoStatus) {
    //     case 'draft': 
    //         'bg-yellow-600';
    //         break;
    //     case 'rendering':
    //         'bg-teal-600 text-white';
    //         break;
    //     case 'ready':
    //         'bg-emerald-800 text-white';
    //         break;
    //     case 'error':
    //         'bg-red-900 text-white';
    //         break;
    //     default:
    //         'bg-gray-800 text-white';
    // }
})

</script>