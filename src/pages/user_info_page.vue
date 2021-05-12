<template>
  <div class="info">
    <h3>User info</h3>
    <div>
      Email:
      <input type="text" disabled :value="email">
    </div>
    <div>
      First name:
      <input type="text" disabled :value="firstName">
    </div>
    <div>
      Last name:
      <input type="text" disabled :value="lastName">
    </div>
    <div>
      Role:
      <select name="roles" disabled v-model="isAdmin">
        <option :value="true">Admin</option>
        <option :value="false">Regular</option>
      </select>
    </div>
    <div>
      Ballance:
      <input type="text" disabled :value="balance">
    </div>
    <div>
      Transactions
      <table border="1" id="transactions">
        <tr>
          <td>datetime</td>
          <td>amount</td>
          <td>sender</td>
          <td>receiver</td>
        </tr>
        <tr>
          <td>23.03.2021</td>
          <td>80</td>
          <td>Sasha</td>
          <td>ElonMusk</td>
        </tr>
        <tr>
          <td>24.03.2021</td>
          <td>100</td>
          <td>Mama</td>
          <td>Sasha</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import userService from '../services/user_service';
import walletService from '../services/wallet_service';

export default {
  name: 'UserInfoPage',
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      isAdmin: false,
      uid: null,

      balance: 0,
      transactions: [],
    };
  },
  created() {
    userService.getMyselfUser().then((response) => {
      this.email = response.data.email;
      this.firstName = response.data.first_name;
      this.lastName = response.data.last_name;
      this.isAdmin = response.data.is_admin;
      this.uid = response.data.uid;
    });

    walletService.getWallet().then((response) => {
      this.transactions = response.data;
    });
  },
};
</script>
