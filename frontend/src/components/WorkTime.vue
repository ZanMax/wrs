<template>
  <div>
    <body id="page-top">
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Header></Header>

          <div class="container-fluid">
            <div>
              <label for="datepicker">Choose a date</label>
              <b-form-datepicker id="datepicker" v-model="selected_date" class="mb-2"
                                 @input="getDataByDate"></b-form-datepicker>
            </div>
            <template>
              <div>
                <b-table striped hover :items="table_body" :fields="table_header">
                  <template #cell(start)="data">
                    {{ data.item.start | moment }}
                  </template>
                  <template #cell(finish)="data">
                    {{ data.item.finish | moment }}
                  </template>
                  <template #cell(detailed_report)="data"> <!-- #cell(detailed_report)="data" access data.value -->
                    <router-link class="btn btn-primary btn-icon-split btn-sm btn-view"
                                 :to="{name: 'detailedReport', params: {userId: data.item.id_user, uid: data.item.uid, reportDate: selected_date }}">
                      <span><b-icon icon="box-arrow-right" aria-hidden="true"></b-icon></span>
                      <span class="viewResult">View</span>
                    </router-link>
                  </template>
                  <template #cell(consolidate_report)="data">
                    <router-link class="btn btn-primary btn-icon-split btn-sm btn-view"
                                 :to="{name: 'consolidateReport', params: { userId: data.item.id_user, uid: data.item.uid, reportDate: selected_date}}">
                      <span><b-icon icon="box-arrow-right" aria-hidden="true"></b-icon></span>
                      <span class="viewResult">View</span>
                    </router-link>
                  </template>
                </b-table>
              </div>
            </template>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
    </body>
  </div>
</template>

<script>

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";
import moment from 'moment';
import axios from 'axios';

export default {
  title: 'Work Time - Work Report System',
  name: "WorkTime",
  components: {
    Header,
    SideBar,
    Footer
  },
  data() {
    return {
      // userID: 1, // TODO chagne to get from VUEX
      selected_date: '',
      table_header: [
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'start',
          label: 'Start',
        },
        {
          key: 'finish',
          label: 'Finish',
        },
        {
          key: 'work_shift',
          label: 'Work Shift',
        },
        {
          key: 'detailed_report',
          label: 'Detailed Report',
        }, {
          key: 'consolidate_report',
          label: 'Consolidate Report',
        }],
      table_body: []
    }
  },
  methods: {
    getDataByDate() {
      axios.get('/worktime/', {
        params: {
          selected_date: this.selected_date
        }
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
    }
  },
  watch: {
    selected_date: function () {
      console.log('Date was changed')
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('DD-MM-YYYY HH:mm:ss');
    }
  },
  created() {
    console.log('created');
    this.selected_date = moment(new Date()).format('YYYY-MM-DD');
  },
  mounted() {
    console.log('Mount');
    this.getDataByDate();
  }
}
</script>

<style scoped>
 .viewResult {
   padding-left: 5px;
 }
 .btn-view {
   padding: 3px;
 }
</style>