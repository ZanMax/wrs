<template>
  <div>
    <body id="page-top">
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Header></Header>
          <div class="container-fluid">
            <b-table striped hover :items="table_body" :fields="table_header">
              <template #cell(track_time)="data">
                {{ data.item.track_time | toHMS }}
              </template>
              <template #cell(tab_opened)="data">
                {{ data.item.tab_opened | moment }}
              </template>
              <template #cell(tab_closed)="data">
                {{ data.item.tab_closed | moment }}
              </template>
              <template #cell(tab_url)="data"> <!-- #cell(detailed_report)="data" access data.value -->
                <a :href=data.value>{{ data.value.slice(0, 120) }}</a>
              </template>
            </b-table>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
    </body>
  </div>
</template>

<script>
import Header from './Header.vue';
import SideBar from "./SideBar";
import Footer from "./Footer";
import axios from "axios";
import moment from 'moment';

export default {
  title: 'Detailed Report - Work Report System',
  name: "DetailedReport",
  components: {
    Header,
    SideBar,
    Footer
  },
  props: ['userId', 'reportDate', 'uid'],
  data() {
    return {
      table_header: [
        {
          key: 'tab_url',
          label: 'Tab URL',
        },
        {
          key: 'track_time',
          label: 'Track Time',
          sortable: true
        },
        {
          key: 'tab_opened',
          label: 'Tab Opened',
        }, {
          key: 'tab_closed',
          label: 'Tab Closed',
        }],
      table_body: []
    }
  },
  methods: {
    getDataByDateAndUserId() {
      axios.get('/detailedreport', {
        params: {
          report_date: this.reportDate,
          user_id: this.userId,
          uid: this.uid
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
  filters: {
    moment: function (date) {
      return moment(date).format('DD-MM-YYYY HH:mm:ss');
    },
    toHMS(sec) {
      return new Date(sec * 1000).toISOString().substr(11, 8)
    }
  },
  mounted() {
    this.getDataByDateAndUserId();
  }
}
</script>

<style scoped>

</style>