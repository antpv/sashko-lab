<template>
  <div class="info">
    <h3>User info</h3>
    <div>
      Email:
      <input type="text" disabled value="myemail@gmail.com">
    </div>
    <div>
      Username:
      <input type="text" disabled value="Sasha">
    </div>
    <div>
      Role:
      <select name="roles" disabled>
        <option selected value="Admin">Admin</option>
        <option value="Regular">Regular</option>
      </select>
    </div>
    <div>
      Ballance:
      <input type="text" disabled value="100">
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

export default {
  name: 'UserInfoPage',
  data() {
    return {};
  },
  created() {
    const userUid = localStorage.getItem('user_uid');

    userService.getUserByUid(userUid).then((response) => {
      console.log(response);
    });
  },
  methods: {
  },
};
</script>
