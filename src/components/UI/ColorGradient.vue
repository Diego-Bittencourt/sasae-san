<template>
    <div class="flex-col">
        <!-- create the rainbow-like pattern -->
        <div class="h-3 bg-violet-700 rounded-t-xl opacity-80"></div>
        <div class="h-1 bg-blue-400 opacity-80"></div>
        <div class="h-2 bg-green-600 opacity-80 "></div>
        <div class="h-1 bg-yellow-300 opacity-80"></div>
        <div class="h-3 bg-orange-700 opacity-80"></div>
        <div class="h-1 bg-red-800 mb-3 opacity-80"></div>
    
    <slot></slot>
    
        <!-- create the rainbow-like pattern -->
        <div class="h-1 bg-red-800 mt-3 opacity-80"></div>
        <div class="h-3 bg-orange-700 opacity-80"></div>
        <div class="h-1 bg-yellow-300 opacity-80"></div>
        <div class="h-2 bg-green-600 opacity-80"></div>
        <div class="h-1 bg-blue-400 opacity-80"></div>
        <div class="h-3 bg-violet-700 rounded-b-xl opacity-80"></div>
    </div>
</template>

<script setup></script>