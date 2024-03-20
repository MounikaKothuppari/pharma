<template>
  <div>
    <div class="w-100 header-css">
      <b-button variant="link" class="border-none fs-28 py-0" @click="changeSidebarWidth">
        <i class="fa fa-bars"></i>
      </b-button>
    </div>
    <b-container fluid class="h-100 px-0">
      <div class="d-flex w-100">
        <div :style="{ width: sidebarStyle.width }" class="sidebar-css">
          <b-nav vertical class="nav-sidebar">
            <b-nav-item active-class="active-nav" @click="$changeRoute({
        name: 'p-d-sample-table',
      })">
              <div class="fs-22 d-inline-block width-3 ml-5"> <i class="fa fa-link"></i></div>
              <div class="d-inline-block fw-600 ls-5" v-if="!minSidebar">Integration</div>
            </b-nav-item>

          </b-nav>
        </div>
        <b-container class="text-center bg-white p-10 border-box-radius mx-10" fluid
          :style="{ width: '84% !important' }">
          <router-view></router-view>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'p-dashbaord',
  data() {
    return {
      sidebarStyle: {
        width: '16%',
      },
      minSidebar: false,
    };
  },
  methods: {
    changeSidebarWidth() {
      this.minSidebar = !this.minSidebar;
      this.sidebarStyle = {
        width: this.minSidebar ? '4%' : '16%',
      };
    },
  },
};
</script>

<style lang="scss">
.sidebar-css {
  background: #84c9d3;
  position: sticky;
  top: 4rem;
  z-index: 1000;
  height: calc(100vh - 3rem);
  border-radius: 10px;
}

.header-css {
  height: 3rem;
}

.nav-sidebar {
  .nav-link {
    color: #000 !important;
  }
}

.dashboard-cards {
  .custom-card {
    border: 2px solid #000;
    border-radius: 5px;
    background-color: transparent;
  }

  .card-content {
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
    padding: 15px;

    &:hover {
      background-color: #d6e6f7;
    }
  }

  .line {
    width: 2px;
    background-color: #000;
    height: 60px;
    border-radius: 5px;
  }

  .card-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .card-image {
    max-height: 50px;
    max-width: 50px;
    min-width: 50px;
  }
}
</style>
