<template>
    <div class="modal">
        <h3>Delete user</h3>
        <div class="field">
            Are you sure you want to delete user?
            <input type="text" disabled :value="email">
        </div>
        <div class="field">
            <input
              @click="onDeleteMyself"
              type="submit"
              :disabled="fetchingUser || beeinDeleted"
              value="Yes">
            <input type="reset" value="No">
        </div>
    </div>
</template>

<script>
import userService from '../services/user_service';
import { removeToken } from '../services/api_service';

export default {
    name: 'DeleteUserPage',
    data() {
        return {
            fetchingUser: false,
            beeinDeleted: false,
            email: '',
            uid: null,
        };
    },
    created() {
        this.fetchingUser = true;

        userService.getMyselfUser().then((response) => {
            this.email = response.data.email;
            this.uid = response.data.uid;
        }).finally(() => {
            this.fetchingUser = false;
        });
    },
    methods: {
        onDeleteMyself() {
            this.beeinDeleted = true;

            userService.deleteUserByUid(this.uid).then(() => {
                alert('User deleted');

                this.$root.$emit('changeAuthStatus', false);

                removeToken();

                this.$router.push('/');
            }).finally(() => {
                this.beeinDeleted = false;
            });
        },
    },
};
</script>
