<template>
  <nav>
    <router-link to="/">开始</router-link> |
    <router-link to="/store">应用</router-link> |
    <router-link to="/manage">管理</router-link> |
    <router-link to="/about">关于</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #b96e42;
}
</style>
