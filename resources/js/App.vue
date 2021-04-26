<template>
    <main>
     
     

       <Header />
        <div id="layoutSidenav">
            <Sidebar />

            <router-view></router-view>
           
        </div>
       
    </main>
</template>

<script>

import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default {
    components:{
        Header,
        Sidebar,
     
    }
    
}
</script>