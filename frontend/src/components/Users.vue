<template>
  <div>
    <body id="page-top">
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Header></Header>
          <div class="container-fluid add-user">
            <b-button v-b-modal.modal-add-user variant="outline-primary">Add User</b-button>
          </div>
          <div class="container-fluid">
            <b-table striped hover :items="table_body" :fields="table_header">
              <template #cell(action)="data">

                <b-button variant="primary" class="btn-sm" @click="selectUser(data.item.id)">
                  <span><b-icon icon="pencil-square" aria-hidden="true"></b-icon></span>
                  <span class="edit-text">Edit</span>
                </b-button>
              </template>
            </b-table>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
    </body>

    <b-modal
        id="modal-add-user"
        ref="modal"
        title="Add new user"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
            label="Name"
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
        >
          <b-form-input
              id="name-input"
              v-model="name"
              :state="nameState"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Email"
            label-for="email-input"
            invalid-feedback="Email is required"
            :state="emailState"
        >
          <b-form-input
              id="email-input"
              v-model="email"
              :state="emailState"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group
            label="Password"
            label-for="password-input"
            invalid-feedback="Password is required"
            :state="passwordState"
        >
          <b-form-input
              id="password-input"
              v-model="password"
              :state="passwordState"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group
            label="Type"
            label-for="type-input"
            invalid-feedback="Type is required"
            :state="typeState"
        >
          <b-form-select
              id="type-input"
              v-model="selectedType"
              :options="user_types"
              :state="typeState"
          ></b-form-select>
        </b-form-group>
        <b-form-group
            label="Groups"
            label-for="groups-input"
            invalid-feedback="Groups is required"
            :state="groupState"
        >
          <b-form-select
              id="type-input"
              v-model="selectedGroup"
              :options="user_groups"
              :state="groupState"
          ></b-form-select>
        </b-form-group>
      </form>
    </b-modal>

    <b-modal
        id="modal-edit-user"
        ref="modal"
        title="Edit user"
        @show="editShowModal"
        @hidden="editResetModal"
        @ok="updateUser"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
            label="Name"
            label-for="edit-name-input"
            invalid-feedback="Name is required"
            :state="nameState"
        >
          <b-form-input
              id="edit-name-input"
              v-model="name"
              :state="nameState"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Email"
            label-for="email-input"
            invalid-feedback="Email is required"
            :state="emailState"
        >
          <b-form-input
              id="email-input"
              v-model="email"
              :state="emailState"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group
            label="Password"
            label-for="password-input"
            invalid-feedback="Password is required"
            :state="passwordState"
        >
          <b-form-input
              id="password-input"
              v-model="password"
              :state="passwordState"
              required
          ></b-form-input>
        </b-form-group>
        <b-form-checkbox
            id="checkbox-user-active"
            v-model="userStatus"
            name="checkbox-user-active"
            value="true"
            unchecked-value="false"
        >
          Active
        </b-form-checkbox>
      </form>
    </b-modal>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "Users",
  components: {
    Header,
    SideBar,
    Footer
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      selectedType: '',
      selectedGroup: '',
      nameState: null,
      emailState: null,
      passwordState: null,
      typeState: null,
      groupState: null,
      userStatus: 'true',
      selectedUserId: 0,
      table_header: [
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'email',
          label: 'Email',
        },
        {
          key: 'is_active',
          label: 'Active',
        },
        {
          key: "action",
          label: "Action"
        }
      ],
      table_body: [],
      user_types: [
        {value: 'super-admin', text: 'Super Admin'},
        {value: 'group-admin', text: 'Group Admin'},
        {value: 'user', text: 'User'}
      ],
      user_groups: [
        {value: 'support', text: 'Support'}
      ]
    }
  },
  methods: {
    getUsersDataByLoad() {
      axios.get('/user', {
        params: {}
      })
          .then(response => {
            this.table_body = response.data;
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {
            // always executed
          });
    },
    getGroupsByLoad() {
      console.log("Get Groups");
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      console.log(valid)
      return valid
    },
    handleOk(bvModalEvt) {
      if (!this.checkFormValidity()) {
        bvModalEvt.preventDefault()
        return
      }
      console.log(this.name, this.email, this.password, this.selectedGroup, this.selectedType);

      axios.post('/user', {'name': this.name, 'email': this.email, 'password': this.password})
          .then(response => {
            console.log(response.data);
            this.getUsersDataByLoad();
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {
            // always executed
          });
    },
    resetModal() {
      this.name = '';
      this.email = '';
      this.password = '';
      this.selectedGroup = '';
      this.selectedType = '';
    },
    editShowModal() {
      console.log('show');
    },
    editResetModal() {
      console.log('reset');
    },
    selectUser(userId) {
      axios.get('/user/?user_id=' + userId, {})
          .then(response => {
            this.$bvModal.show('modal-edit-user');
            this.name = response.data.name;
            this.email = response.data.email;
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {
            this.selectedUserId = userId;
          });
    },
    updateUser() {
      console.log(this.name, this.email, this.password, this.userStatus);
      axios.put('/user', {
        id: this.selectedUserId, name: this.name, email: this.email, password: this.password, is_active: this.userStatus
      })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {
            // always executed
          });
    }
  },
  mounted() {
    this.getUsersDataByLoad();
    this.getGroupsByLoad();
  }
}
</script>

<style scoped>
.add-user {
  margin-bottom: 10px;
}

.edit-text {
  padding-left: 3px;
}
</style>