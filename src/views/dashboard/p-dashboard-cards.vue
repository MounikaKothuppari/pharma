<template>
  <b-row class="dashboard-cards">
    <b-col class="col-4">

      <div class="custom-card cursor-pointer m-5" style="height:95%;" @click="$changeRoute({
        name: 'p-d-sample-table',
      })">
        <div class="card-content text-center">
          <i class="fa fa-link"></i>
          <div class="line"></div>
          <div class="card-title text-center fw-600 ls-4">Integration</div>
        </div>
      </div>
    </b-col>

  </b-row>
</template>
<script>
export default {
  name: 'p-dashbaord-cards',
  data() {
    return {};
  },
  methods: {

  },
};
</script>
