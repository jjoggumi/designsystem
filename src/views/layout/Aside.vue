<template>
  <aside>
    <div class="navBrand"><a href="@/">Creative Lab</a></div>   
    <div class="collapseSet type02">
      <Collapse v-for="(route, index) in routes" :key="index" :isActive="mainCate === route.name" :nonChild="!route.children">
        <template #tit>
          <router-link :to="route.path" v-if="!route.children">{{ route.name }}</router-link>
          <span v-else>{{ route.name }}</span>
        </template>
        <template #con>
          <div v-for="(childRoute, subIndex) in route.children" :key="subIndex" class="item" >
            <router-link :to="route.path + '/' + childRoute.path">{{ childRoute.name }}</router-link>
            <!--
            {{ $route.fullPath }}
            {{ $route.path }}
            {{ $route.name }}
            {{ $route.params.id }}
            {{ $router.push('/detail/0') }}
            {{ $router.go(-1)}}
            -->
          </div>
        </template>
      </Collapse>
    </div>
  </aside>
</template>

<script>
import Collapse from '@/components/Collapse.vue';

export default {
  components: { Collapse },
  name: 'AsideLayout',
  props:{
    routes : Array,
    mainCate : String
  },
  data(){
    return{
    }
  }
}
</script>