<template>
  <header>
    <nav>
      <div class="navBrand"><a href="@/"><img src="@/assets/images/logo.png" alt="kimey"></a></div>
      <div class="navWrap">
        <ul class="navBar">
          <li class="scroll"><a href="@/">About</a></li>
          <li class="scroll"><a href="@/">History</a></li>
          <li class="scroll"><a href="@/">Portfolio</a></li>
          <li class="scroll"><a href="@/">Contact</a></li> 
        </ul>
        <div class="navEtc">
          <img src="@/assets/images/icon-down.gif" alt="Project Down">
          <a href="@/" target="_blank">PROJECT LIST - PDF</a>
        </div>
      </div>
      <button class="navbar_toggler">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name : 'HeaderLayout'

}
</script>

<style>

</style>