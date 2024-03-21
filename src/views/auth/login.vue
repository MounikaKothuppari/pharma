<template>
  <div class="auth-bg h-100">
    <b-row class="mx-0 pt-100">
      <b-col class="col-4" offset="7">
        <b-card title="Login" class="px-20 py-20 border-box-radius">
          <b-form>
            <b-input-group class="mt-4" size="lg">
              <template #prepend>
                <b-input-group-text>
                  <i class="fa fa-envelope-o"></i>
                </b-input-group-text>
              </template>
              <b-form-input placeholder="Username" v-model="username"></b-form-input>
            </b-input-group>
            <b-input-group class="mt-4" size="lg">
              <template #prepend>
                <b-input-group-text class="px-20">
                  <i class="fa fa-lock"></i>
                </b-input-group-text>
              </template>
              <b-form-input placeholder="Password" v-model="password" type="password"></b-form-input>
            </b-input-group>
            <b-btn block class="mt-4 ls-4" variant="primary" size="lg" @click="login"> Login</b-btn>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'p-login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$validator.validate().then(result => {
        if (result) {
          if (this.username === 'pharma' && this.password === 'pharma') {
            this.$changeRoute({
              name: 'p-d-cards',
            });
          }
        }
      });
    },
  },
};
</script>

<style scoped></style>
